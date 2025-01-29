import {useState,useEffect, use} from 'react'
import { Link } from 'react-router'
import { useLocation } from 'react-router'

const Nav = [
    {id:1, name:"Home", link:"/"},
    {id:2, name:"About", link:"/about"},
    {id:3, name:"Posts", link:"/posts"},
    {id:4, name:"Contact", link:"/contact"},
]
export default function Navbar() {
    const [active, setActive] = useState<string>('');
    const location = useLocation();
    useEffect(() => {
      setActive(location.pathname);
    }, [location]);

  return (
    <header className='w-full bg-blue-400'>
      <nav className='w-full justify-center flex p-2'>
        <ul className='flex gap-10 items-center justify-center w-full'>
          {Nav.map((item) => (
            <li key={item.id} className={`${active === item.link ? 'underline' : 'none-underline'} text-white`}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
