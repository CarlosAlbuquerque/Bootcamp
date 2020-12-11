/**
 * Para criar: name, email, password
 */

interface TechsObjects{
    title: string;
    experience: number;
}

 interface CreateUserData{
     name?: string; //o ? é para dizer que o valor é opcional
     email: string;
     password: string;
     techs: Array<string | TechsObjects>;
 }

export default function createUser({name = '', email, password}:CreateUserData){
    const user = {
        name, 
        email, 
        password,
    }

    return user;
} 