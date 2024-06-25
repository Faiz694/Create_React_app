import React from "react";
import profile1 from "../StaticFiles/Rectangle 6 (3).jpg"
import profile2 from "../StaticFiles/Rectangle 6 (2).jpg"
import profile3 from "../StaticFiles/Rectangle 6 (1).jpg"
import profile4 from "../StaticFiles/Rectangle 6.jpg"
import Groups from "./Groups";


const GroupContainer = () => {
  return (
    <>
      <div className="p-4 hidden md:flex flex-col gap-10 sticky top-44 h-fit overflow-y-auto">
        <form className="flex justify-center items-center w-full h-fit border-b border-gray-300 px-2">
          <img
            src="data:image/svg+xml,%3csvg%20width='10'%20height='14'%20viewBox='0%200%2010%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.99992%200.333328C2.41992%200.333328%200.333252%202.42%200.333252%205C0.333252%208.5%204.99992%2013.6667%204.99992%2013.6667C4.99992%2013.6667%209.66659%208.5%209.66659%205C9.66659%202.42%207.57992%200.333328%204.99992%200.333328ZM1.66659%205C1.66659%203.16%203.15992%201.66666%204.99992%201.66666C6.83992%201.66666%208.33325%203.16%208.33325%205C8.33325%206.92%206.41325%209.79333%204.99992%2011.5867C3.61325%209.80666%201.66659%206.9%201.66659%205Z'%20fill='%23495057'%20/%3e%3cpath%20d='M4.99992%206.66666C5.92039%206.66666%206.66659%205.92047%206.66659%204.99999C6.66659%204.07952%205.92039%203.33333%204.99992%203.33333C4.07944%203.33333%203.33325%204.07952%203.33325%204.99999C3.33325%205.92047%204.07944%206.66666%204.99992%206.66666Z'%20fill='%23495057'%20/%3e%3c/svg%3e"
            alt="location-icon"
            width="18"
            height="18"
          />
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full px-4 py-2 text-lg font-semibold focus:outline-none"
          />
          <img
            src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.5%2012.375V15.5H3.625L12.8417%206.28334L9.71667%203.15834L0.5%2012.375ZM15.2583%203.86667C15.5833%203.54167%2015.5833%203.01667%2015.2583%202.69167L13.3083%200.741675C12.9833%200.416675%2012.4583%200.416675%2012.1333%200.741675L10.6083%202.26667L13.7333%205.39167L15.2583%203.86667Z'%20fill='black'%20/%3e%3c/svg%3e"
            alt="edit-icon"
            className="my-1"
            width="20"
            height="20"
          />
        </form>
        <div className="flex items-start justify-start gap-2">
          <img
            src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%20clipPath='url(%23clip0_1_853)'%3e%3cpath%20d='M7.33337%2010H8.66671V11.3334H7.33337V10ZM7.33337%204.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337%201.33337C4.31337%201.33337%201.33337%204.32004%201.33337%208.00004C1.33337%2011.68%204.31337%2014.6667%207.99337%2014.6667C11.68%2014.6667%2014.6667%2011.68%2014.6667%208.00004C14.6667%204.32004%2011.68%201.33337%207.99337%201.33337ZM8.00004%2013.3334C5.05337%2013.3334%202.66671%2010.9467%202.66671%208.00004C2.66671%205.05337%205.05337%202.66671%208.00004%202.66671C10.9467%202.66671%2013.3334%205.05337%2013.3334%208.00004C13.3334%2010.9467%2010.9467%2013.3334%208.00004%2013.3334Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_853'%3e%3crect%20width='16'%20height='16'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="info-icon"
            className="my-1"
            width="18"
            height="18"
          />
          <span className="w-fit text-gray-500">
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
        <div>
          <h6 className="w-full inline-flex items-center gap-2">
            <span>
              <img
                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'%20/%3e%3cpath%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="info-icon"
                className="my-1"
                width="18"
                height="18"
              />
            </span>
            <span className="uppercase">Recommended Groups</span>
          </h6>
          <div className="space-y-3">
            <Groups GroupName={"Leisure"} profile={ profile1} />
            <Groups GroupName={"Activism"} profile={ profile2} />
            <Groups GroupName={"MBA"} profile={ profile3} />
            <Groups GroupName={"Philosophy"} profile={ profile4} />
            <span className="text-blue-600 float-end">See More...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupContainer;
