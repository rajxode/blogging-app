import { Link } from "react-router-dom";

function ProfileAside({user}) {    

    return (
        <div className="hidden w-1/3 md:flex flex-col rounded border-l px-3">
            <div className="w-full h-[150px] flex justify-center items-center">
                <div className="h-[125px] w-[125px] bg-green-600 rounded-full">

                </div>
            </div>
            <div className="w-full flex justify-center text-xl font-semibold">
                {user.name}
            </div>
            <div>
                <Link to='/settings' 
                    className='text-[#6eb46c] text-sm hover:text-[#1a8917] hover:underline underline-offset-1'
                    >
                    Edit Profile
                </Link>
            </div>
        </div>
    )
}

export default ProfileAside;