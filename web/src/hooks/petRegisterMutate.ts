import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { petRegisterDetails } from "../routes/petRegister";
import { tokenStore } from "../store/tokenStore";

async function postData(data: petRegisterDetails, authToken: string) {
  try {
    if (authToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      await axios.post("http://localhost:3333/pets", data, config);
      console.log("Postagem bem-sucedida!");
    }
  } catch (error) {
    console.error("Erro ao postar:", error);
  }
}

export function usePetRegisterMutate() {
  const storeToken = localStorage.getItem("storeToken");
  const setToken = tokenStore((state) => state.setToken);
  const authToken = tokenStore((state) => state.token);

  if (storeToken) {
    setToken(storeToken);
  }

  const mutate = useMutation({
    mutationFn: (data: petRegisterDetails) => postData(data, authToken),
  });
  return mutate;
}
