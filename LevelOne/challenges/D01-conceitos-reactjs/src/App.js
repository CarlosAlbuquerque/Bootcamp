import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./style.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories/").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post("repositories", {
      title: `Repository ${Date.now()}`,
      url: "www.google.com.br",
      techs: "React, JS",
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const newRepositories = repositories.filter(
      repository => repository.id != id
    )

    setRepositories(newRepositories)
  }

  return (
    <div>

      <div class= "title">
        <h1>Desafio React - Repository</h1>
      </div>

      <ul data-testid="repository-list">
        <button onClick={handleAddRepository}>
          Adicionar novo repositório
        </button>
      </ul>
        {repositories.map(
          (repository) => (
            <div>
              <section class="card">
                <div>
                  <header>
                    <h2 key={repository.id}> {repository.title}</h2>
                  </header>
                  <p> URL: {repository.url}</p>
                  <p> Techs: {repository.techs}</p>
                  <p> Likes: {repository.likes}</p>
                </div>
              </section>

              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover o repositório: {repository.title}
              </button>

            </div>
          )
        )}
    </div>
  );
}

export default App;
