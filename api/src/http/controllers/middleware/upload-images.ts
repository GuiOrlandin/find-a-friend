import multer from "fastify-multer";
import crypto from "crypto";
import { FastifyInstance } from "fastify";

export function uploadImages() {
  const storage = multer.diskStorage({
    destination: "./uploads",

    filename(request, file, callback) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new Error("Only image files are allowed!"));
      }

      const hash = crypto.randomBytes(6).toString("hex");
      const fileExt = file.originalname.split(".").pop();

      const fileName = `${file.originalname}-${hash}.${fileExt}`;
      return callback(null, fileName);
    },
  });

  return multer({ storage });
}

const upload = uploadImages();

export async function uploadRoute(app: FastifyInstance) {
  app.post(
    "/upload",
    { preHandler: upload.array("petImage", 4) },
    async (request, reply) => {
      reply.send("Upload de imagens realizado com sucesso!");
    }
  );
}
