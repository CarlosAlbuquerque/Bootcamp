const express = require('express');
const cors = require('cors')
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json()) 

/**
 * Metódos HTTP:
 * GET
 * POST
 * PUT/PATCH
 * DELETE 
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: filtros e paginação
 * Route Params: Identificar recursos(
 * Request Body: Counteudo na hora de criar ou editar um recurso (JSON)
 */

/***
 * Middleware
 * 
 *  Interceptador de Requisições 
 *  que pode interromper totalmente a req 
 *  ou alterar dados da req
 */

const projects = [];

// Inteceptador de requisições que mostra quais rotas do app estão sendo chamadas.
function logRequest(req, res, next) {
    const { method, url } = req;

    const logLabel = `[${method} ${url}]`

    console.time(logLabel)//medir o tempo de cada req

    next(); // Vá para o proximo middleware

    console.timeEnd(logLabel)//medir o tempo de cada req
}

function validateProjectId(req, res, next){
    const { id } = req.params;

    if(!isUuid(id)) {
        // caso chegue aqui ia interromper o app
        return res.status(400).json({error: 'Invalid project ID'})
    }

    return next()
}

app.use(logRequest); 
app.use('/projects/:id', validateProjectId);

/***
 * podemos colocar ele no app em geral usando app.use()
 * ou:
 * app.get('/projects', logRequest, (req, res) => {
 * e ele será executado somente na rota GET
 * ou: 
 * app.use('/projects/:id', validateProjectId);
 * e ele será executado somente nas rotas q tiverem '/projects/:id'
 * */

app.get('/projects', (req, res) => {
    const { title } = req.query;

    const results = title ? projects.filter(project => project.title.includes(title)) : projects;

    return res.json(results);
});

app.post('/projects', (req, res) => {
    const { title, owner } = req.body;

    const project = { id: uuid(), title, owner }

    projects.push(project);

    return res.json(project);
});

app.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0) {
        return res.status(400).json({ error: 'Project not found'})
    }

    const project = {
        id, 
        title,
        owner,
    };

    projects[projectIndex] = project;

    return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0) {
        return res.status(400).json({ error: 'Project not found'})
    }

    projects.splice(projectIndex, 1)

    return res.status(204).send();
});


app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});