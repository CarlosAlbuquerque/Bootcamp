/**
 * Para criar um user: name, email, password
 */
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name ?: string; // ?: quer dizer que o valor é opcional
    email: string; 
    password: string
    techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password, techs }: CreateUserData) {
    const user = {
        name, 
        email, 
        password,
        techs,
    }

    return user;
}