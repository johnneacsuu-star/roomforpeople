import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Jurnalul: un fișier .md pe articol, în src/content/jurnal/. Un articol nou nu atinge pagina principală.
// draft: true îl ține nepublicat. Secțiunea „Din Jurnal” apare pe prima pagină doar de la trei articole publicate.
// Imaginea: `art` alege un desen din stilul casei; `image` (cale în /public) și `imageAlt` pun o fotografie în locul lui.
const jurnal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jurnal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    pillar: z.enum(['Pragul', 'A doua tură', 'Atelierul', 'Cum te vede lumea', 'Din cameră']),
    profesii: z.array(z.enum(['psi', 'as', 'co'])).default(['psi', 'as', 'co']),
    draft: z.boolean().default(true),
    art: z.enum(['phone', 'door', 'search', 'evening', 'voice']).default('door'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(0),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { jurnal };
