import type { Route } from "./+types/login";
import { Link } from "react-router";
export function meta({}: Route.MetaArgs) {
    return [
      { title: "Login Page" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }
  

export default function Login() {
    return <main className=" w-full grid place-items-center h-[80vh]">
   <div className="w-48 flex flex-col items-center gap-16 ">
    <h1>Login</h1>
    <button className="bg-blue-400 p-4">
        <Link to="/dashboard">Dashboard</Link>
    </button>
   </div>
    </main>
  }
  