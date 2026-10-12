import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Jurnalul: un fișier .md pe articol, în src/content/jurnal/. Un articol nou nu atinge pagina principală.
// draft: true îl ține nepublicat. Secțiunea „Din Jurnal” apare pe prima pagină doar de la trei articole publicate.
// Imaginea: `image` (cale în /public), `imageAlt`, `credit`, `creditUrl` pentru o fotografie; fără ele se folosește desenul din `art`.
const jurnal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jurnal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    pillar: z.enum(['Pragul', 'A doua tură', 'Atelierul', 'Cum te vede lumea', 'Din cameră']),
    profesii: z.array(z.enum(['psi', 'as', 'co'])).default(['psi', 'as', 'co']),
    draft: z.boolean().default(true),
    art: z.enum(['plan', 'flux', 'harta', 'usa-1', 'usa-2', 'usa-3', 'noapte', 'prag', 'semn', 'tura', 'caiet']).default('plan'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    credit: z.string().optional(),
    creditUrl: z.string().url().optional(),
    order: z.number().default(0),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { jurnal };
