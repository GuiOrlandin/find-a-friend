import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { petRegisterDetails } from "../routes/petRegister";

const storeToken = localStorage.getItem("storeToken");

const authToken = storeToken;
const config = {
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
};

async function postData(data: petRegisterDetails) {
  try {
    await axios.post("http://localhost:3333/pets", data, config);
    console.log("Postagem bem-sucedida!");
  } catch (error) {
    console.error("Erro ao postar:", error);
  }
}

export function usePetRegisterMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
