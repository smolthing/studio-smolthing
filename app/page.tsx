"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "./common/Popup";
import HeartIcon from "./common/HeartIcon";

export default function Page() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setPopupOpen(true);
    }
  };

  const handleClick = () => {
    if (isPopupOpen) {
      handleMinimize();
    }
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-screen h-screen flex flex-col items-center pt-20">
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
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-25 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter email to join our newsletter"
                onKeyDown={handleEnterKey}
              />
              <button
                onClick={handleClick}
                className="absolute right-1 top-1 rounded bg-custom-pink p-1 border border-transparent text-center text-xl text-white transition-all shadow-sm hover:shadow focus:shadow-none hover:bg-custom-purple active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <div className="h-5	w-5 text-white-100">
                  <HeartIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div>
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
        </div> */}
      </div>
      {isPopupOpen && (
        <Popup
          handleClose={handleClose}
          isMinimized={isMinimized}
          isFullScreen={isFullScreen}
          handleMinimize={handleMinimize}
          handleFullScreen={handleFullScreen}
        />
      )}
    </div>
  );
}
