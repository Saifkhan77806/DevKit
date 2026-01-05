import z from "zod";

export const createProjectSchema = z.object({
  projectName: z.string().min(1, "Project is required"),
  mongodbUrl: z.string().min(1, "Mongodb Url is Required"),
});
