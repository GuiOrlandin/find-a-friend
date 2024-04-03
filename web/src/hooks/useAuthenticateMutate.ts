import axios from "axios";
import { AccountDetails } from "../routes/login";
import { useMutation } from "@tanstack/react-query";

async function postData(data: AccountDetails) {
  await axios.post("http://localhost:3333/authenticate", data);
}

export function useAuthenticateMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });

  console.log(mutate);
  return mutate;
}
