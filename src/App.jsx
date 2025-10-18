import React, { useState } from "react";
import myPhoto from "./assets/myphoto.jpg"; // your photo path
import { FiUser } from "react-icons/fi";

function App() {
  const [page, setPage] = useState(1);
  const totalPages = 4;

  const goPrev = () => { if (page > 1) setPage(page - 1); };
  const goNext = () => { if (page < totalPages) setPage(page + 1); };
  const goHome = () => setPage(1);
  const CreateAccount = () => setPage(3);
  const SignIn = () => setPage(2);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white px-2">

      {/* Full Page Border Box */}
      <div className="w-full max-w-[380px] min-h-[90vh] border-4 border-gray-400 rounded-2xl shadow-2xl bg-white flex flex-col justify-between p-6 relative">

        {/* Welcome Page */}
        {page === 1 && (
          <div className="flex flex-col justify-between h-full">

            {/* Content at bottom */}
            <div className="flex flex-col items-start justify-end text-center h-[70vh] space-y-4 font-sans">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome to PopX
              </h1>
              <p className="text-gray-500 text-base leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis.
              </p>

              <div className="space-y-4 w-full mt-4">
                <button
                  onClick={CreateAccount}
                  className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition cursor-pointer"
                >
                  Create Account
                </button>
                <button
                  onClick={SignIn}
                  className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-semibold hover:bg-purple-300 transition cursor-pointer"
                >
                  Already Registered? Login
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sign In Page */}
        {page === 2 && (
          <div className="text-left font-sans">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Sign in to your PopX account
            </h1>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form className="space-y-6">
              {["Email Address", "Password"].map((label, idx) => (
                <div key={idx} className="relative w-full">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-gray-700 text-sm font-medium">
                    {label}
                  </label>
                  <input
                    type={label === "Password" ? "password" : "email"}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm"
                  />
                </div>
              ))}

              <button
                type="submit"
                onClick={() => setPage(4)}
                className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {/* Create Account Page */}
        {page === 3 && (
          <div className="flex flex-col h-full font-sans">
            <div className="flex items-center gap-2 mb-2 flex-shrink-0">
              {/* Removed extra symbol */}
              <FiUser className="text-gray-700 text-xl" />
              <h1 className="text-2xl font-bold">
                Create your <br /> PopX Account
              </h1>
            </div>

            <div className="flex-1 overflow-auto pr-2 pt-6 pb-32 border border-gray-200 rounded-lg bg-white shadow-inner">
              {[ 
                { label: "Full Name", type: "text", placeholder: "Enter full name" },
                { label: "Phone Number", type: "text", placeholder: "Enter phone number" },
                { label: "Email Address", type: "email", placeholder: "Enter email" },
                { label: "Password", type: "password", placeholder: "Enter password" },
                { label: "Company Name", type: "text", placeholder: "Enter company name" },
              ].map((field, idx) => (
                <div key={idx} className="relative w-full mb-4">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-gray-700 text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm"
                  />
                </div>
              ))}

              <div className="space-y-2 mt-1">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Are you an Agency?
                </p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="agency" value="yes" className="text-violet-600" />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="agency" value="no" className="text-violet-600" />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 left-0 right-0 px-6 flex-shrink-0 mb-6">
              <button
                type="submit"
                onClick={() => setPage(4)}
                className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
              >
                Create Account
              </button>
            </div>
          </div>
        )}

        {/* Account Settings Page */}
        {page === 4 && (
          <div className="text-left space-y-4 font-sans">
            <h1 className="text-xl font-bold text-gray-900">Account Settings</h1>

            <div className="border-t-2 border-dotted border-gray-300 mt-2 mb-4"></div>

            <div className="bg-gray-100 p-4 rounded-md mb-4 flex items-center gap-4">
              <img src={myPhoto} alt="profile" className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-bold text-gray-800">Naveenkumar P</p>
                <p className="text-gray-600 text-sm">nk4496330@gmail.com</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum Dolor Sit Amet. Consetetur sadipscing Elitr. Sed Diam
              Nonumy eirmod Tempor invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat. Sed Diam
            </p>

            <div className="border-t-2 border-dotted border-gray-300 mt-4"></div>
          </div>
        )}

      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-center gap-6 pt-4 max-w-[380px] w-full">
        <button onClick={goHome} className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 013 21V9.75z" />
          </svg>
        </button>

        <button onClick={goPrev} className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer" disabled={page === 1}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-sm text-gray-600">{page} of {totalPages}</span>

        <button onClick={goNext} className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer" disabled={page === totalPages}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
