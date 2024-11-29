import { z } from "zod";

export const editPostSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Content is required" }),
  imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
  author: z.string().min(1, { message: "Author is required" }),
});

export type EditBlogPost = z.infer<typeof editPostSchema>;
