import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        draft: z.boolean().optional()
	}),
});

const projects = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string(),
    project_url: z.string().url(),
    github_url: z.string().url(),
    stack_logos: z.array(z.string())
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  projects
};

