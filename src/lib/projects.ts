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

export async function getFeaturedProjects() {
  const projects = await getSortedProjects();

  return projects.filter((project) => project.data.featured);
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

export async function getProjectsByCategory() {
  const projects = await getSortedProjects();

  return projectCategories.map((category) => ({
    ...category,
    projects: projects.filter(
      (project) => project.data.category === category.id,
    ),
  }));
}
