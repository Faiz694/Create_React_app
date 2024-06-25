import React from "react";
import CardUser from "./CardUser";

const Card = ({ image, title, heading, experience, userName, views, avatar, headLogo }) => {
  return (
    <>
      <div className="space-y-4 border border-gray-300 rounded-md">
        <div>
          <img
            src={image}
            alt="post-picture"
            className="w-full h-[120px] sm:h-[150px] md:h-[220px] object-cover rounded-t-md"
          />
          <div className="px-4 py-2 space-y-3">
            <span className="text-black/60 flex items-center gap-2">
              <img
                src={headLogo}
                width="70"
                height="16"
                alt="category-icon"
              />
              <span className="font-semibold">{title}</span>
            </span>
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold leading-[1.2]">{heading}</h3>
              <div className="relative inline-block text-left font-semibold">
                <button
                  type="button"
                  className="inline-flex justify-center items-center size-8 bg-transparent shadow-sm font-medium focus:outline-none"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <img
                    width="24"
                    height="24"
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='6'%20viewBox='0%200%2020%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6666%203C14.6666%204.28334%2015.7166%205.33334%2016.9999%205.33334C18.2833%205.33334%2019.3333%204.28334%2019.3333%203C19.3333%201.71667%2018.2833%200.666672%2016.9999%200.666672C15.7166%200.666672%2014.6666%201.71667%2014.6666%203ZM12.3333%203C12.3333%201.71667%2011.2833%200.666671%209.99992%200.666671C8.71659%200.666671%207.66659%201.71667%207.66659%203C7.66659%204.28334%208.71658%205.33334%209.99992%205.33334C11.2833%205.33334%2012.3333%204.28334%2012.3333%203ZM5.33325%203C5.33325%201.71667%204.28325%200.666671%202.99992%200.666671C1.71659%200.666671%200.666586%201.71667%200.666586%203C0.666586%204.28334%201.71658%205.33334%202.99992%205.33334C4.28325%205.33334%205.33325%204.28334%205.33325%203Z'%20fill='%23212529'%20/%3e%3c/svg%3e"
                    alt="category-icon"
                  />
                </button>
              </div>
            </div>
            <p className="text-lg leading-[1.2]">{experience}</p>
          </div>
        </div>
        <CardUser userName={userName} views={views} avatar={ avatar } />
      </div>
    </>
  );
};

export default Card;
