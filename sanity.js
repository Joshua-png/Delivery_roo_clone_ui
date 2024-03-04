import { createClient } from "@sanity/client";
import imageUrl from "@sanity/image-url";

export const client = createClient({
  projectId: "teurdkl4",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03",
});

const builder = imageUrl(client);

export const urlFor = (source) => builder.image(source);

export async function getFeaturedCategories() {
  const featuredCategories = await client.fetch(`*[_type=="featured"]{...}`);
  return featuredCategories;
}
