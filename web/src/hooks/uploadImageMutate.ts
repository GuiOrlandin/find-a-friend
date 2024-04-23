import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { tokenStore } from "../store/tokenStore";

async function postData(files: File[], authToken: string) {
  try {
    if (files) {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const formData = new FormData();

      files.forEach((file) => {
        formData.append(`petImage`, file);
      });

      await axios.post("http://localhost:3333/upload", formData, config);
    }
  } catch (error) {
    console.error("Erro ao postar:", error);
  }
}

export function useUploadImageMutate() {
  const storeToken = localStorage.getItem("storeToken");
  const setToken = tokenStore((state) => state.setToken);
  const authToken = tokenStore((state) => state.token);

  if (storeToken) {
    setToken(storeToken);
  }

  const mutate = useMutation({
    mutationFn: (data: File[]) => postData(data, authToken),
  });
  return mutate;
}
