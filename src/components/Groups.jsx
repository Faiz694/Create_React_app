import React from "react";

const Groups = ({GroupName, profile}) => {
    return (
        <>
     <div className="flex items-center justify-between gap-4 my-2">
              <div className="flex items-center gap-3 my-2">
                <img
                  src={profile}
                  alt="group-avatar"
                  className="size-10 rounded-full object-cover"
                />
                    <span className="text-lg line-clamp-1">{ GroupName}</span>
              </div>
              <button className="bg-gray-200/70 rounded-full px-4 py-1 text-sm">
                Follow
              </button>
            </div>
        </>
    )
}

export default Groups