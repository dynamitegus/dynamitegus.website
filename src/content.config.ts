import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';
//thanks to petermorgandev's git repo i understand what im meant to be doing.
const blogPostsCollection = defineCollection({
	type: "content",
    loader: glob({ pattern: "*.md", base: "./blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		modDate: z.date().optional(),
		pubDate: z.date(),
		tags: z.array(z.string()).optional(),
	}),
});
export const collections = { blog: blogPostsCollection };