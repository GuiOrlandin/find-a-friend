import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const storeToken = localStorage.getItem("storeToken");

const authToken = storeToken;
const config = {
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
};

async function postData(files: File[]) {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append(`petImage`, file);
    });

    await axios.post("http://localhost:3333/upload", formData, config);
    console.log("Upload bem-sucedido!");
  } catch (error) {
    console.error("Erro ao postar:", error);
  }
}

export function useUploadImageMutate() {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
