import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { OrgRegisterDetails } from "../routes/registerOrg";

async function postData(data: OrgRegisterDetails) {
  await axios.post("http://localhost:3333/orgs", data);
}

export function useOrgRegisterMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
