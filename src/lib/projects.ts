import { getCollection } from "astro:content";
import { projectCategories } from "@data/profile";

export async function getSortedProjects() {
  const projects = await getCollection("projects");

  return projects.sort((a, b) => {
    if (a.data.priority !== b.data.priority) {
      return a.data.priority - b.data.priority;
    }

    return b.data.year - a.data.year;
  });
}

export function getCategoryMeta(categoryId: string) {
  return (
    projectCategories.find((category) => category.id === categoryId) ?? {
      id: categoryId,
      title: categoryId,
      intro: "",
      logo: "/assets/marks/fr.svg",
    }
  );
}
