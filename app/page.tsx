"use client";

import Link from "next/link";
import { useState } from "react";
import Alert from "./common/alert";

export default function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-screen h-screen flex flex-col items-center mt-20">
        <div className="text-center max-w-screen-sm mb-3 mt-20">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight">
            Studio <span className="text-custom-pink">Sm</span>
            <span className="text-custom-orange">ol</span>
            <span className="text-custom-yellow">t</span>
            <span className="text-custom-green">h</span>
            <span className="text-custom-purple">ing</span>
          </h1>
          <div className="mt-5 w-full max-w-sm">
            <div className="relative">
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Join my newsletter"
              />
              <button
                onClick={handleClick}
                className="absolute right-1 top-1 rounded bg-custom-pink p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:shadow-none hover:bg-custom-purple active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <Link
            href="/protected"
            className="text-gray-800 hover:text-blue-600 mr-4"
          >
            Comic
          </Link>
          <Link
            href="/protected"
            className="text-gray-800 hover:text-blue-600 mr-4"
          >
            Blog
          </Link>
          <Link
            href="/protected"
            className="text-gray-800 hover:text-blue-600 mr-4"
          >
            About
          </Link>
          <Link href="/protected" className="text-gray-800 hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
      {showAlert && <Alert handleClose={handleClose} />}
    </div>
  );
}
