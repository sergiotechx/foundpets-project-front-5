import PocketBase from "pocketbase";
import { DBURL } from "./constants";
import { v4 as uuidv4 } from 'uuid';

export const client = new PocketBase(DBURL);

export const createUser = async (data) => {
  const newUser = {
    name: data.name,
    emailVisibility: true,
    email: data.email,
    password: data.password,
    passwordConfirm: data.password,
    qr: uuidv4()
  };
  console.log("usuario:", newUser);
  try {
    let record = await client.collection("users").create(newUser);
    return record;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

export const authWithEmail = async (data2) => {
  const authData = await client.collection('users').authWithPassword(data2.email, data2.password);
  return authData;
};

/*export const authWithPassword = async (data) => {
  const authData = await client
    .collection("users")
    .authWithPassword(user_email, password);
};*/

export const login = async (user_email, password) => {
  const authData = await pb
    .collection("users")
    .authWithPassword(user_email, password);
};

export const logoutPb = () => {
  const result = client.authStore.clear();
};

export const getUser = async (id) => {
  const record = await client.collection("users").getOne(id);
  return record;
};

export const getUsers = async () => {
  try {
    const records = await client.collection("users").getFullList({
      sort: "-created",
    });
    return records;
  } catch (error) {
    return {};
  }
};

export const deleteUserBd = async (id) => {
  const operation = await client.collection("users").delete(id);
  return operation;
}
export const updateUserBd = async (data) => {


  try {
    const record = await client.collection('users').update(data.id, data);
    return record
  }
  catch (error) {

    throw error;
  }
}

export const getPet = async (ownerId) => {
  try {
    const record = await client
      .collection("pets")
      .getFirstListItem(`owner="${ownerId}"`);
    return record;
  } catch (error) {
    if (error.status == 404) {
      return {};
    }
    else {
      throw error
    }
  }
};

export const fullDataHomeBd = async () => {
  const records = await client.collection("lostPets").getFullList();
  return { records: records, length: records.length };
};

export const getBarrios = async () => {
  const records = await client.collection("barrios").getFullList();
  return records;
};

export const createPetBd = async (data) => {
  try {
    let record = await client.collection("pets").create(data);
    return record;
  } catch (error) {
    throw error
  }
};
export const updatePetBd = async (id, data) => {
  try {

    let record = await client.collection("pets").update(id, data);
    return record;
  } catch (error) {
    throw error
  }
};



export const newMessage = async (updatedData) => {

  const messageNew = {

    message: updatedData.description,
    contactName: updatedData.name,
    asunto: updatedData.asunto,
    contactData: updatedData.email,
    petOwner: updatedData.petOwner
  };

  try {
    const record = await client.collection('messages').create(messageNew);
    return record;
  } catch (error) {
    console.log("error aca:", error);
  }
}

export const ownerMessages = async (userMessageId) => {
  console.log("userMessageId en ownerMessages:", userMessageId);
  const records3 = await client.collection('messages').getFullList({
    filter: `petOwner="${userMessageId}"`,
  });

  console.log("mesajes:", records3);
  return records3;

}

export const deleteMessage = async (id) => {
  try {
    await client.collection('messages').delete(id);
  } catch (error) {
    console.error("Error al eliminar el mensaje:", error);
    throw error;
  }
};

// ownerMessages("9eslkd9relyqzgh");



export const getOneLostPet = async (id) => {
  const record = await client.collection("lostPets").getOne(id, {
    expand: "relField1,relField2.subRelField",
  });
  return record;
};

export const newLocationBd = async (petOwner, latitude, longitude) => {
  try {
    const data = {
      petOwner: petOwner,
      latitude: latitude,
      longitude: longitude
    };
    const record = await client.collection('location').create(data);
    return record;
  }
  catch (error) {
       throw error
  }

};
export const getPetPoints = async (ownerId) => {
  try{
  const records = await client.collection('location').getFullList({
    filter: `petOwner="${ownerId}"`,sort: '-created'
  });
  return records;
}
catch(error){
  throw error
}


  

}


