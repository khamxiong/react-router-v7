import type { Route } from "./+types/about";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function About() {
  return <div className="w-full grid place-items-center h-[80vh]">
    This is About Page
  </div>;
}
