

function HomeBanner() {

    return (
        <div className="w-full h-[55vh] px-[10%] bg-[#FFC017] border-b border-black flex items-center">
            <div className="w-1/2 flex flex-col justify-around h-4/5">
                <div className="text-[5.5rem] font-semibold font-serif">
                    <h1>
                        Stay curious.
                    </h1>
                </div>
                <div className="text-2xl">
                    <p>
                        Discover stories, thinking, and expertise from writers on any topic.
                    </p>
                </div>
                <div>
                    <button className="px-4 py-1 rounded-full bg-black text-white shadow-sm">
                        Start Reading
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;