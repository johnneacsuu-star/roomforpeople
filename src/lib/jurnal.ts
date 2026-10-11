import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'jurnal'>;
// Publicate, cele mai noi primele; la aceeași dată, după `order` (1 = primul scris).
export async function publishedPosts(): Promise<Post[]> {
  const all = await getCollection('jurnal');
  return all.filter((p) => !p.data.draft).sort((a, b) => (b.data.date.getTime() - a.data.date.getTime()) || (a.data.order - b.data.order));
}
export const fmtDate = (d: Date) => d.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
