import React from "react"

const CardUser = ({userName, views, avatar}) => {
    return (
        <>
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-2">
            <img
              width="50"
              height="50"
              className="size-12 rounded-full object-cover"
              src={avatar}
              alt="Sarthak Kamra-avatar"
            />
            <div className="flex flex-col">
              <span className="font-bold">{userName}</span>
              <span className="font-semibold text-sm text-gray-600/70 block md:hidden">
                {views}
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
                {views}
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
        </>
    )
}

export default CardUser