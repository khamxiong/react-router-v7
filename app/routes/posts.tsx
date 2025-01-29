import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Posts() {
  return <div className="w-full grid place-items-center h-[80vh]">
    This is Post Pages
  </div>;
}
