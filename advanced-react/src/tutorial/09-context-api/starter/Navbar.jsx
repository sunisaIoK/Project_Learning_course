import NavbarLink from "./NavbarLink"
import { useState, createContext } from "react"
import { useContext } from "react"; 

export const NavbarContext = createContext();
export const useAppContext = () => useContext(NavbarContext);
const Navbar = () => {
    const [user, setUser] = useState({ name: 'bob' });
    const logout = () => {
      setUser(null);
    }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavbarLink />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar