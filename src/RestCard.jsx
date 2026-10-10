export default function RestCard({restInfo}){
    return(
        <div className="mx-w-[280px] mb-2  transform transition duration-200 hover:scale-95">

        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl" >{restInfo?.info?.name}</div>
        <div className="flex item-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-green-600"
            >
                <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.41.434c1.164.093 1.636 1.547.749 2.255l-4.117 3.32 1.258 5.272c.27 1.13-.966 2.03-1.96 1.45L12 18.07l-4.634 2.878c-.994.58-2.23-.32-1.96-1.45l1.258-5.272-4.117-3.32c-.887-.708-.415-2.162.749-2.255l5.41-.434 2.082-5.006Z"
                    clipRule="evenodd"
                />
            </svg>

        <span className="text-lg ">{restInfo?.info?.avgRating}</span>
        <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-500 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>

        </div>
        </div>
    )
}