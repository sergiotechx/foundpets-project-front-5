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

    //   record.verified = true;
    //   record = await client.collection('users').update('verified', record);
    
    //   console.log("record:", record);

    // const record = await client.collection('users').create({name:'brayan',password:'0123456710',passwordConfirm:'0123456710'});

      return record;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error; 
    }
  };
  
//   export const authWithPassword = async (user_email,password)=>{
//        const authData = await client.collection('users').authWithPassword(
//         user_email,password );
//   }






const login  = async (user_email,password) =>{
    const authData = await pb.collection('users').authWithPassword(
        user_email,
        password,
    );
}
const logout = ()=>{
    client.authStore.clear();
}

export const getUsers = async ()=>{
    const records = await client.collection('users').getFullList({
        sort: '-created',
    });
   return records;
}

export const deleteUserBd = async (id)=>{
  const operation = await client.collection('users').delete(id);
   return operation;
}



