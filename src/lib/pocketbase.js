import PocketBase from "pocketbase";

const url = "https://foundpets.pockethost.io";
export const client = new PocketBase(url);

export const fullDataHomeBd = async () => {
  const records = await client.collection("lostPets").getFullList();
  return { records: records, length: records.length };
};
