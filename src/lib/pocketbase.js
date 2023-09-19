import PocketBase from "pocketbase"

const url = "https://foundpets.pockethost.io";
export const client = new PocketBase(url);



export const createUser = async (data) => {
   const newUser = {
        //verified : true,
        name: data.username,
        emailVisibility: true,
        email: data.email,
        password: data.password,
        passwordConfirm: data.password,
   }
  console.log("usuario:",newUser);
    try {
    

      let record = await client.collection('users').create(newUser);

      return record;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error; 
    }
  };
  
  export const authWithEmail = async (data2) => {

    // try {
         
    //     // const validate = await client.collection('users').requestVerification(email === data2.email);
    //     const validate = await client.collection('users').getFirstListItem(`email=${data2.email}`, {
    //         expand: 'relField1,relField2.subRelField',
    //     });


    //     console.log("Validacion:", validate);
    //     return validate;
    // } catch (error) {
    //     console.error("Usuario no encontrado:", error);
    // }

    const authData = await client.collection('users').authWithPassword(data2.email, data2.password);

    // after the above you can also access the auth data from the authStore
    console.log(client.authStore.isValid);
    console.log(client.authStore.token);
    console.log(client.authStore.model.id);
    
    // "logout" the last authenticated model
    // pb.authStore.clear();
   console.log(authData); 
    return authData;
  } 
  
  
  
export const authWithPassword = async (data)=>{
       const authData = await client.collection('users').authWithPassword(
        user_email,password );
  }




const login  = async (user_email,password) =>{
    const authData = await pb.collection('users').authWithPassword(
        user_email,
        password,
    );
}
export const logout = ()=>{
    client.authStore.clear();
}

export const getUsers = async ()=>{
    const records = await client.collection('users').getFullList({
        sort: '-created',
    });
   return records;
}

