import PocketBase from "pocketbase";
import { DBURL } from "./constants";

export const client = new PocketBase(DBURL);

export const createUser = async (data) => {
  const newUser = {
    //verified : true,
    name: data.name,
    emailVisibility: true,
    email: data.email,
    password: data.password,
    passwordConfirm: data.password,
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
  const authData = await client
    .collection("users")
    .authWithPassword(data2.email, data2.password);

  // after the above you can also access the auth data from the authStore
  console.log(client.authStore.isValid);
  console.log(client.authStore.token);
  console.log(client.authStore.model.id);
  console.log(authData);
  return authData;
};

export const authWithPassword = async (data) => {
  const authData = await client
    .collection("users")
    .authWithPassword(user_email, password);
};

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
};
export const updateUserBd = async (
  id,
  name,
  email,
  mobile,
  address,
  userImage,
  lost,
  publicAddress,
  publicEmail,
  publicMobile
) => {
  const data = {
    name,
    email,
    mobile,
    address,
    userImage,
    lost,
    publicAddress,
    publicEmail,
    publicMobile,
  };
  const record = await pb.collection("users").update(id, data);
  return record;
};

export const getPet = async (ownerId) => {
  try {
    const record = await client
      .collection("pets")
      .getFirstListItem(`owner="${ownerId}"`);
    return record;
  } catch (error) {
    return {};
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

export const getOneLostPet = async () => {
  const record = await client.collection("lostPets").getOne("3ivabigfje7s7jh", {
    expand: "relField1,relField2.subRelField",
  });
  return record;
};
