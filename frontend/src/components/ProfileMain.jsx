import ProfileNavbar from "./ProfileNavbar";

function ProfileMain({user}) {

    return (
        <div className='w-[65%] flex flex-col bg-red-400'>
            <div className="text-4xl font-bold">
                {user.name}
            </div>
            <ProfileNavbar />
        </div>
    )
}

export default ProfileMain;