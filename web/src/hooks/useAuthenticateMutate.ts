import axios from "axios";
import { AccountDetails } from "../routes/login";
import { useMutation } from "@tanstack/react-query";

async function postData(data: AccountDetails) {
  try {
    const response = await axios.post(
      "http://localhost:3333/authenticate",
      data
    );
    const token = response.data.token;
    return token;
  } catch (error) {
    throw new Error("Falha ao autenticar usuário");
  }
}

export function useAuthenticateMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });

  return mutate;
}
