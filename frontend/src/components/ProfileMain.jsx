
import { Outlet } from 'react-router-dom';
import ProfileNavbar from "./ProfileNavbar";

function ProfileMain({user}) {

    return (
        <div className='w-full md:w-[65%] flex flex-col'>
            <div className="text-4xl font-bold">
                {user.name}
            </div>
            <ProfileNavbar />
            <Outlet />
        </div>
    )
}

export default ProfileMain;