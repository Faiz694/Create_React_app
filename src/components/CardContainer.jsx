import React from "react";
import rectangle1 from "../assets/Rectangle 5.svg";
import rectangle2 from "../assets/Rectangle 5 (1).svg";
import rectangle3 from "../assets/Rectangle 5 (2).svg";
import avatar1 from "../StaticFiles/Rectangle 3.jpg";
import avatar2 from "../StaticFiles/Rectangle 3 (3).jpg";
import avatar3 from "../StaticFiles/Rectangle 3 (1).jpg";
import avatar4 from "../StaticFiles/Rectangle 3 (2).jpg";
import article from "../assets/✍️ Article.svg"

import Card from "./Card";

const CardContainer = () => {
  const heading1 =
    " What if famous brands had regular fonts? Meet RegulaBrands!";
  const heading2 =
    "Tax Benefits for Investment under National Pension Scheme launched by Government";
  const experience = " I’ve worked in UX for the better part of a decade. F..";
  return (
    <>
      <div className="flex flex-col gap-4 justify-center">
        <Card
          headlogo={article}
          image={rectangle1}
          title={"Article"}
          heading={heading1}
          experience={experience}
          userName={"Sarthak Kamra"}
          views={"1.4k views"}
          avatar={avatar1}
        />
        <Card
          image={rectangle2}
          title={"Education"}
          heading={heading2}
          experience={experience}
          userName={"Sarah West"}
          views={"4.8k views"}
          avatar={avatar2}
        />


        <div className="space-y-4 border border-gray-300 rounded-md">
          <div>
            <img
              src={rectangle3}
              alt="post-picture"
              className="w-full h-[120px] sm:h-[150px] md:h-[220px] object-cover rounded-t-md"
            />
            <div className="px-4 py-2 space-y-3">
              <span className="text-black/60 flex items-center gap-2">
                <img
                  src="/assets/meetup-BDzInjzR.svg"
                  width="16"
                  height="16"
                  alt="category-icon"
                />
                <span className="font-semibold">Meetup</span>
              </span>
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xl font-bold leading-[1.2]">
                  Finance &amp; Investment Elite Social Mixer @Lujiazui
                </h3>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between">
                <span className="text-black/60 font-semibold flex items-center gap-2">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%202.00001H10V0.666672H8.66667V2.00001H3.33333V0.666672H2V2.00001H1.33333C0.593333%202.00001%200.00666666%202.60001%200.00666666%203.33334L0%2012.6667C0%2013.4%200.593333%2014%201.33333%2014H10.6667C11.4%2014%2012%2013.4%2012%2012.6667V3.33334C12%202.60001%2011.4%202.00001%2010.6667%202.00001ZM10.6667%2012.6667H1.33333V5.33334H10.6667V12.6667ZM2.66667%206.66667H6V10H2.66667V6.66667Z'%20fill='%23495057'%20/%3e%3c/svg%3e"
                    width="14"
                    height="14"
                    alt="date-icon"
                  />
                  <span className="text-black/80 line-clamp-1">
                    Fri, 12 Oct, 2018
                  </span>
                </span>
                <span className="text-black/60 font-semibold flex items-center gap-2">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='10'%20height='14'%20viewBox='0%200%2010%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.99992%200.333328C2.41992%200.333328%200.333252%202.42%200.333252%205C0.333252%208.5%204.99992%2013.6667%204.99992%2013.6667C4.99992%2013.6667%209.66659%208.5%209.66659%205C9.66659%202.42%207.57992%200.333328%204.99992%200.333328ZM1.66659%205C1.66659%203.16%203.15992%201.66666%204.99992%201.66666C6.83992%201.66666%208.33325%203.16%208.33325%205C8.33325%206.92%206.41325%209.79333%204.99992%2011.5867C3.61325%209.80666%201.66659%206.9%201.66659%205Z'%20fill='%23495057'%20/%3e%3cpath%20d='M4.99992%206.66666C5.92039%206.66666%206.66659%205.92047%206.66659%204.99999C6.66659%204.07952%205.92039%203.33333%204.99992%203.33333C4.07944%203.33333%203.33325%204.07952%203.33325%204.99999C3.33325%205.92047%204.07944%206.66666%204.99992%206.66666Z'%20fill='%23495057'%20/%3e%3c/svg%3e"
                    width="14"
                    height="14"
                    alt="loaction-icon"
                  />
                  <span className="text-black/80">Ahmedabad, India</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between px-6 py-2">
            <a
              href="#"
              className="w-full px-4 py-2 text-center rounded-xl border border-gray-400 font-bold text-amber-600"
            >
              Visit Website
            </a>
          </div>
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <img
                width="50"
                height="50"
                className="size-12 rounded-full object-cover"
                src= {avatar3}
                alt="Ronal Jones-avatar"
              />
              <div className="flex flex-col">
                <span className="font-bold">Ronal Jones</span>
                <span className="font-semibold text-sm text-gray-600/70 block md:hidden">
                  800 views
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden md:flex items-center gap-2">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'%20/%3e%3c/g%3e%3c/svg%3e"
                  className="size-4"
                  alt="view-icon"
                />
                <span className="font-semibold text-sm text-gray-600/70 hidden md:block">
                  800 views
                </span>
              </span>
              <button className="flex items-center gap-1 bg-gray-200/60 px-2 py-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20viewBox='0%200%2014%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5%2011.06C10.93%2011.06%2010.42%2011.285%2010.03%2011.6375L4.6825%208.525C4.72%208.3525%204.75%208.18%204.75%208C4.75%207.82%204.72%207.6475%204.6825%207.475L9.97%204.3925C10.375%204.7675%2010.9075%205%2011.5%205C12.745%205%2013.75%203.995%2013.75%202.75C13.75%201.505%2012.745%200.5%2011.5%200.5C10.255%200.5%209.25%201.505%209.25%202.75C9.25%202.93%209.28%203.1025%209.3175%203.275L4.03%206.3575C3.625%205.9825%203.0925%205.75%202.5%205.75C1.255%205.75%200.25%206.755%200.25%208C0.25%209.245%201.255%2010.25%202.5%2010.25C3.0925%2010.25%203.625%2010.0175%204.03%209.6425L9.37%2012.7625C9.3325%2012.92%209.31%2013.085%209.31%2013.25C9.31%2014.4575%2010.2925%2015.44%2011.5%2015.44C12.7075%2015.44%2013.69%2014.4575%2013.69%2013.25C13.69%2012.0425%2012.7075%2011.06%2011.5%2011.06Z'%20fill='%23212529'%20/%3e%3c/svg%3e"
                  className="size-5"
                  alt="share-icon"
                />
                <span className="block md:hidden">Share</span>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4 border border-gray-300 rounded-md">
          <div>
            <div className="px-4 py-2 space-y-3">
              <span className="text-black/60 flex items-center gap-2">
                <img
                  src="/assets/job-BTAyX2Eh.svg"
                  width="16"
                  height="16"
                  alt="category-icon"
                />
                <span className="font-semibold">Job</span>
              </span>
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xl font-bold leading-[1.2]">
                  Software Developer - II
                </h3>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between">
                <span className="text-black/60 font-semibold flex items-center gap-2">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%202.00001H10V0.666672H8.66667V2.00001H3.33333V0.666672H2V2.00001H1.33333C0.593333%202.00001%200.00666666%202.60001%200.00666666%203.33334L0%2012.6667C0%2013.4%200.593333%2014%201.33333%2014H10.6667C11.4%2014%2012%2013.4%2012%2012.6667V3.33334C12%202.60001%2011.4%202.00001%2010.6667%202.00001ZM10.6667%2012.6667H1.33333V5.33334H10.6667V12.6667ZM2.66667%206.66667H6V10H2.66667V6.66667Z'%20fill='%23495057'%20/%3e%3c/svg%3e"
                    width="14"
                    height="14"
                    alt="date-icon"
                  />
                  <span className="text-black/80 line-clamp-1">
                    Innovaccer Analytics
                  </span>
                </span>
                <span className="text-black/60 font-semibold flex items-center gap-2">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='10'%20height='14'%20viewBox='0%200%2010%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.99992%200.333328C2.41992%200.333328%200.333252%202.42%200.333252%205C0.333252%208.5%204.99992%2013.6667%204.99992%2013.6667C4.99992%2013.6667%209.66659%208.5%209.66659%205C9.66659%202.42%207.57992%200.333328%204.99992%200.333328ZM1.66659%205C1.66659%203.16%203.15992%201.66666%204.99992%201.66666C6.83992%201.66666%208.33325%203.16%208.33325%205C8.33325%206.92%206.41325%209.79333%204.99992%2011.5867C3.61325%209.80666%201.66659%206.9%201.66659%205Z'%20fill='%23495057'%20/%3e%3cpath%20d='M4.99992%206.66666C5.92039%206.66666%206.66659%205.92047%206.66659%204.99999C6.66659%204.07952%205.92039%203.33333%204.99992%203.33333C4.07944%203.33333%203.33325%204.07952%203.33325%204.99999C3.33325%205.92047%204.07944%206.66666%204.99992%206.66666Z'%20fill='%23495057'%20/%3e%3c/svg%3e"
                    width="14"
                    height="14"
                    alt="loaction-icon"
                  />
                  <span className="text-black/80">Noida, India</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between px-6 py-2">
            <a
              href="#"
              className="w-full px-4 py-2 text-center rounded-xl border border-gray-400 font-bold text-green-600"
            >
              Apply on Timesjobs
            </a>
          </div>
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <img
                width="50"
                height="50"
                className="size-12 rounded-full object-cover"
                src={ avatar4}
                alt="Joseph Gray-avatar"
              />
              <div className="flex flex-col">
                <span className="font-bold">Joseph Gray</span>
                <span className="font-semibold text-sm text-gray-600/70 block md:hidden">
                  1.7k views
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden md:flex items-center gap-2">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'%20/%3e%3c/g%3e%3c/svg%3e"
                  className="size-4"
                  alt="view-icon"
                />
                <span className="font-semibold text-sm text-gray-600/70 hidden md:block">
                  1.7k views
                </span>
              </span>
              <button className="flex items-center gap-1 bg-gray-200/60 px-2 py-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20viewBox='0%200%2014%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5%2011.06C10.93%2011.06%2010.42%2011.285%2010.03%2011.6375L4.6825%208.525C4.72%208.3525%204.75%208.18%204.75%208C4.75%207.82%204.72%207.6475%204.6825%207.475L9.97%204.3925C10.375%204.7675%2010.9075%205%2011.5%205C12.745%205%2013.75%203.995%2013.75%202.75C13.75%201.505%2012.745%200.5%2011.5%200.5C10.255%200.5%209.25%201.505%209.25%202.75C9.25%202.93%209.28%203.1025%209.3175%203.275L4.03%206.3575C3.625%205.9825%203.0925%205.75%202.5%205.75C1.255%205.75%200.25%206.755%200.25%208C0.25%209.245%201.255%2010.25%202.5%2010.25C3.0925%2010.25%203.625%2010.0175%204.03%209.6425L9.37%2012.7625C9.3325%2012.92%209.31%2013.085%209.31%2013.25C9.31%2014.4575%2010.2925%2015.44%2011.5%2015.44C12.7075%2015.44%2013.69%2014.4575%2013.69%2013.25C13.69%2012.0425%2012.7075%2011.06%2011.5%2011.06Z'%20fill='%23212529'%20/%3e%3c/svg%3e"
                  className="size-5"
                  alt="share-icon"
                />
                <span className="block md:hidden">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
