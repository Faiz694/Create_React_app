import React,{useState} from "react";
import img from "../assets/Group 3.svg"
import fblogo from "../StaticFiles/f_logo_RGB-Blue_1024.jpg"
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({onCloseSignUp, switchToLogin}) => {
  const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate('/login')
  // }

  // const handleCloseSignUp = () => { 
  //   onCloseSignUp();
  // };
  return (
    <>
      <div className="fixed inset-0 z-[99] w-full h-full bg-black/40 flex justify-center items-end md:items-center">
        <div className="fixed z-[100] h-[600px] w-full md:max-w-[750px] bg-white rounded-t-md md:rounded-lg">
          <button onClick={onCloseSignUp} className="absolute hidden md:block end-0 top-0 translate-y-[-150%] z-[101] bg-white rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <span className="hidden md:block py-4 bg-yellow-50 text-green-600 font-semibold text-sm w-full text-center rounded-t-md">
            Let's learn, share &amp; inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-10 py-6 md:py-4">
            <form className="flex flex-col items-center gap-8 md:mb-5">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl md:text-3xl font-bold w-full text-start">
                  Create Account
                </h2>
                <button
                  type="button"
                  className="md:hidden bg-white rounded-full"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex justify-between items-center w-full">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                />
                <div className="w-full flex items-center p-3 font-semibold border border-gray-200">
                  <input
                    id="password-input"
                    type="password"
                    placeholder="Password"
                    className="w-full focus:outline-none"
                  />
                  <button type="button" className="p-2">
                    <img
                      width="28"
                      height="28"
                      className="w-full"
                      src="data:image/svg+xml,%3csvg%20width='18'%20height='12'%20viewBox='0%200%2018%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%206C2.0475%202.7075%205.25%200.375%209%200.375C12.75%200.375%2015.9525%202.7075%2017.25%206C15.9525%209.2925%2012.75%2011.625%209%2011.625C5.25%2011.625%202.0475%209.2925%200.75%206ZM15.615%206C14.3775%203.4725%2011.8425%201.875%209%201.875C6.1575%201.875%203.6225%203.4725%202.385%206C3.6225%208.5275%206.1575%2010.125%209%2010.125C11.8425%2010.125%2014.3775%208.5275%2015.615%206ZM9%204.125C10.035%204.125%2010.875%204.965%2010.875%206C10.875%207.035%2010.035%207.875%209%207.875C7.965%207.875%207.125%207.035%207.125%206C7.125%204.965%207.965%204.125%209%204.125ZM5.625%206C5.625%204.14%207.14%202.625%209%202.625C10.86%202.625%2012.375%204.14%2012.375%206C12.375%207.86%2010.86%209.375%209%209.375C7.14%209.375%205.625%207.86%205.625%206Z'%20fill='%238A8A8A'%20/%3e%3c/svg%3e"
                      alt="show-password-icon"
                    />
                  </button>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <button
                  className="w-48 md:w-64 py-2 text-sm rounded-full bg-blue-600 text-white font-semibold"
                  type="submit"
                >
                  Create Account
                </button>
                <button onClick={switchToLogin} className="md:hidden underline" type="button">
                  or, Sign In
                </button>
              </div>
              <div className="w-full flex flex-col items-center gap-2 text-sm">
                <a className="w-full py-2 border border-gray-300/60 flex items-center gap-2 justify-center">
                  <img
                    width="16"
                    height="16"
                    src={fblogo}
                    alt="facebook-icon"
                  />
                  Sign up with Facebook
                </a>
                <a className="w-full py-2 border border-gray-300/60 flex items-center gap-2 justify-center">
                  <img
                    width="16"
                    height="16"
                    src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'%20/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'%20/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'%20/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="google-icon"
                  />
                  Sign up with Google
                </a>
              </div>
              <span className="md:hidden text-xs text-gray-500 w-full text-center">
                By signing up, you agree to our Terms &amp; conditions, Privacy
                policy
              </span>
            </form>
            <div className="hidden md:flex flex-col justify-between w-full gap-4">
              <span className="w-full flex items-center justify-end gap-1 text-sm py-2">
                <span className="text-black/70">Already have an account?</span>
                {/* //onClick={handleLoginClick} */}
                <button onClick={switchToLogin} className="text-blue-600 font-semibold" ><Link to="/signin">Sign In</Link> </button>
              </span>
              <img
                className="w-full"
                src={img}
                alt="signIn-img"
              />
              <span className="text-xs text-gray-500 w-full text-center">
                By signing up, you agree to our Terms &amp; conditions, Privacy
                policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
