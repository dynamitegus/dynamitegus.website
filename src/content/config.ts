import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

// Reference: https://github.com/petermorgandev/petermorgan.dev
const blogPostsCollection = defineCollection({
	//type: "content",
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		modDate: z.date().optional(),
		pubDate: z.date().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string().default('dynamitegus'),
		image:	z.object({
			url: z.string().url(),
			alt: z.string().max(125)
		}).optional()
	}),
});
export const collections = { blog: blogPostsCollection };