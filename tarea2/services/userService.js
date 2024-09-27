const URL = "https://66f5ee8b436827ced9757a22.mockapi.io/api/v1/users"

async function getUsers() {
    try{
        const response = await fetch(URL);
        return await response.json()
    } catch(e){
        console.error("Error al obtener los usuarios.");
        
    }
}

async function existsUserByEmail(email){
    const users = await getUsers();
    return users.find(user => user.email === email);
}

async function createUser(userData){
    const existsUser = await existsUserByEmail(userData.email);
    
    if (existsUser) {
        let error = new Error("El usuario ya existe.")
        error.code = 409;
        throw error;

    }
    
    const newUser = {
        ...userData,
        createdAt: new Date().toISOString()
    }
    
    const response = await fetch(URL, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });

    return await response.json();
}


module.exports = {
    getUsers,
    createUser
}