/* eslint-disable react/prop-types */
import { useState } from "react";
import { getUser,setUser } from '../utils/UserInformation';
import { RiAccountCircleLine } from "react-icons/ri";

export function Menu() {
    const {name} = getUser();
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="menu-container">
        <div className="menu-trigger" onClick={() =>{setOpen(!open)}}>
            {name !== undefined && <div className="profile"><span className="userName">Hello, {name}</span> <RiAccountCircleLine size={30} /></div>}
        </div>
      </div>
          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>
          Welcome
          <br />
          <span>{name}</span>
        </h3>
        <ul>
          <DropdownItem img={"../../homeIcon.png"} location={"/"} text={"Home"} />
          <DropdownItem img={'../../planeIcon.png'} location={'/info'} text={'start trip'} />
          <DropdownItem img={"../../previousIcon.png"} location={'/'} text={'previous trips'}/>
          <DropdownItem img={"../../logoutIcon.png"} location={'/'} text={'logout'} />
        </ul>
      </div>
    </div>
  );
}
function DropdownItem(props) {
  return (
      <li className="dropdownItem" onClick={() => {
          props.text === 'logout' ? setUser('', '') : null}}>
      <img className='item-img' src={props.img}></img>
      <a className="item-link" href={props.location}>{props.text}</a>
    </li>
  );
}
