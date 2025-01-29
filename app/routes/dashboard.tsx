
import { Outlet } from "react-router";
import Navbar from '../components/Navbar';
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return <main className="flex w-full">
    <SideBar />
     <section className="ml-auto w-[calc(100vw-220px)]">
      <Navbar />
       <div className="w-full py-20 px-5">
       <Outlet />
       </div>
     </section>
  </main>
}



