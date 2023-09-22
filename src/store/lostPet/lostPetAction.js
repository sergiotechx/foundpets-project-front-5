import { getOneLostPet } from "@/lib/pocketbase";
import { setOnePet } from "./lostPetsReducer";

export const getOnePetAction = (id) => {
  return async (dispatch) => {
    try {
      const oneLostPet = await getOneLostPet(id);
      dispatch(setOnePet(oneLostPet));
    } catch (error) {
      console.log("no se puede traer el dato");
    }
  };
};
