/* eslint-disable react/prop-types */
import { RiAccountCircleLine } from "react-icons/ri";
import { getUser, setUser } from '../utils/UserInformation';
// import react from 'react';

export function ProfileMenu() {
    const {name} = getUser();
    const handleClick = () => {
        setUser('', '');
        window.location.reload();
    }
    return (
        <>
            {name !== undefined && <div className="profile" onClick={()=>handleClick()} ><span className="userName">Hello {name}!</span> <RiAccountCircleLine size={30} /></div>}
        </>
    );
}
