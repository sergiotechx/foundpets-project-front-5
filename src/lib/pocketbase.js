import PocketBase from "pocketbase"

const url = "https://foundpets.pockethost.io";
export const client = new PocketBase(url);

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

