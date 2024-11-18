"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Popup from "../common/form/Popup";
import HeartIcon from "../common/icon/HeartIcon";
import Image from "next/image";
import ProfileIcon from "../common/icon/ProfileIcon";

const NEWSLETTER_URL =
  "https://embeds.beehiiv.com/3dead21d-aa73-4ddb-9a24-7ef51d52eb34";
const EVENT_KEY_ENTER = "Enter";
const QUERY_PARAM_SUBSCRIBED = "subscribed";
const QUERY_PARAM_EMAIL = "email";
const DEFAULT_EMAIL = "you";

export default function HomePage() {
  const getDecodedEmail = (email: string | null) => {
    try {
      return email ? decodeURIComponent(email) : DEFAULT_EMAIL;
    } catch (error) {
      return DEFAULT_EMAIL;
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isSubscribed = queryParams.get(QUERY_PARAM_SUBSCRIBED) === "true";

    if (isSubscribed) {
      const emailParam = queryParams.get(QUERY_PARAM_EMAIL);
      const email = getDecodedEmail(emailParam);
      setEmail(email);
      setPopupOpen(true);
    }
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [email, setEmail] = useState("");

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === EVENT_KEY_ENTER) {
      handleRedirectToNewsletter();
    }
  };

  const handleClick = () => {
    handleRedirectToNewsletter();
  };

  const handleRedirectToNewsletter = () => {
    window.location.href = NEWSLETTER_URL;
  };

  const Login = () => (
    <Link
      href="/protected"
      className="text-gray-800 hover:text-green-600 absolute top-4 right-4"
    >
      <ProfileIcon className="w-8 h-8 text-custom-pink hover:text-green-600 transform active:translate-y-1 transition" />
    </Link>
  );

  return (
    <div className="flex h-screen bg-white">
      {!isPopupOpen && <Login />}
      <div className="w-screen h-screen flex flex-col items-center pt-20">
        <div className="text-center max-w-screen-sm mb-3 mt-20">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight">
            Studio <span className="text-custom-pink">Sm</span>
            <span className="text-custom-orange">ol</span>
            <span className="text-custom-yellow">t</span>
            <span className="text-custom-green">h</span>
            <span className="text-custom-purple">ing</span>
          </h1>
          <div className="mt-10 w-full max-w-sm">
            <div className="relative">
              <Image
                src="/dudu.gif"
                alt="dudu the cockatiel"
                width={50}
                height={50}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10"
              />{" "}
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-25 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Join our newsletter"
                onKeyDown={handleEnterKey}
              />
              <button
                onClick={handleClick}
                className="absolute right-1 top-1 rounded bg-custom-pink p-1 border border-transparent text-center text-xl text-white transition-all shadow-sm hover:shadow focus:shadow-none hover:bg-custom-purple active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <HeartIcon className="h-5	w-5 text-white-100" />
              </button>
            </div>
          </div>
        </div>
        <div className="font-mono">
          <Link
            href="https://dev.to/studiosmolthing"
            className="text-gray-800 hover:text-blue-600 mr-4"
          >
            Blog
          </Link>
          <Link
            href="https://www.youtube.com/@studiosmolthing"
            className="text-gray-800 hover:text-pink-600 mr-4"
          >
            Youtube
          </Link>
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          handleClose={handleClose}
          isMinimized={isMinimized}
          isFullScreen={isFullScreen}
          handleMinimize={handleMinimize}
          handleFullScreen={handleFullScreen}
          email={email}
        />
      )}
    </div>
  );
}
