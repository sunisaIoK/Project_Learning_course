import UserContainer from "./UserContainer";
const NavbarLink = () => {
  return (
    <div className='nav-container'>
        <ul className='nav-links'>
            <li>
                <a href='#'>home</a>
            </li>
            <li>
                <a href='#'>about</a>
            </li>
            <UserContainer />
        </ul>
    </div>
  )
}
export default NavbarLink