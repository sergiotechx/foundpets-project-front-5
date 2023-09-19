import PocketBase from "pocketbase";

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
  console.log("usuario:", newUser);
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


export const authWithEmail = async (data2) => {
  try {
    const validate = await client
      .collection("users")
      .requestVerification(email === data2.email);
    console.log("Validacion:", validate);
    return validate;
  } catch (error) {
    console.error("Usuario no encontrado:", error);
  }
};

export const authWithPassword = async (data) => {
  const authData = await client
    .collection("users")
    .authWithPassword(user_email, password);
};


 export const login = async (user_email, password) => {
  const authData = await pb.collection('users').authWithPassword(
    user_email,
    password,
  );
}
 export const logout = () => {
  client.authStore.clear();
}

export const getUsers = async () => {
  const records = await client.collection('users').getFullList({
    sort: '-created',
  });
  return records;
}

export const deleteUserBd = async (id) => {
  const operation = await client.collection('users').delete(id);
  return operation;
}


export const fullDataHomeBd = async () => {
  const records = await client.collection('lostPets').getFullList();
  return {records:records,length:records.length}
}


export const getBarrios = async () => {
  const records = await client.collection('barrios').getFullList();
  return records
}





