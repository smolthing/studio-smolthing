"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Popup from "../common/form/Popup";
import HeartIcon from "../common/icon/HeartIcon";
import Star from "../common/icon/Star";
import Image from "next/image";
import ProfileIcon from "../common/icon/ProfileIcon";

const EVENT_KEY_ENTER = "Enter";
const QUERY_PARAM_SUBSCRIBED = "subscribed";
const QUERY_PARAM_EMAIL = "email";
const DEFAULT_EMAIL = "you";
const EMPTY_STRING = "";
const TRUE = "true";
const MESSAGE_DUDU = ` 🐣: eh eh eh! no touching!`;
const WORD_MAPPING: { [key: string]: string } = {
  anything: "You got it! ( ദ്ദി ˙ᗜ˙ )",
  hello: "Helloworld (づ๑•ᴗ•๑)づ♡",
  test: "testing 1 2 3 ⸜(｡˃ ᵕ ˂)⸝♡",
};

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
    const isSubscribed = queryParams.get(QUERY_PARAM_SUBSCRIBED) === TRUE;

    if (isSubscribed) {
      const emailParam = queryParams.get(QUERY_PARAM_EMAIL);
      const email = getDecodedEmail(emailParam);
      setMessage(EMPTY_STRING);
      setEmail(email);
      setPopupOpen(true);
    }
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupDuduOpen, setPopupDuduOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [email, setEmail] = useState(EMPTY_STRING);
  const [inputValue, setInputValue] = useState(EMPTY_STRING);
  const [message, setMessage] = useState(EMPTY_STRING);
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handlePopupDuduClose = () => {
    setPopupDuduOpen(false);
  };

  const handleInputEventKey = (event: React.KeyboardEvent) => {
    if (event.key === EVENT_KEY_ENTER) {
      handleSpecialPopup();
    }
  };

  const handleSpecialPopup = () => {
    if (WORD_MAPPING[inputValue.trim().toLocaleLowerCase()]) {
      setMessage(WORD_MAPPING[inputValue.trim().toLocaleLowerCase()]);
      setPopupOpen(true);
    }
  };

  const handleClick = () => {
    handleSpecialPopup();
  };

  const Login = () => (
    <Link
      href="/protected"
      className="text-gray-800 hover:text-green-600 absolute bottom-4 right-4"
    >
      <ProfileIcon className="w-8 h-8 text-custom-pink hover:text-green-600 transform active:translate-y-1 transition" />
    </Link>
  );

  return (
    <div className="flex h-dvh bg-gradient-to-b from-purple-200 via-pink-00 to-blue-200">
      <Login />
      <div className="w-screen h-dvh flex flex-col items-center">
        <div className="text-center max-w-screen-sm mb-3 mt-20">
          <h1 className="text-4xl">
            <Star className="relative right-2" />
            Studio <span className="text-custom-pink">Sm</span>
            <span className="text-custom-orange">ol</span>
            <span className="text-custom-blue">t</span>
            <span className="text-custom-green">h</span>
            <span className="text-custom-purple">ing</span>
          </h1>
          <div className="mt-4 w-full max-w-sm">
            <Image
              src="/dudu.gif"
              alt="dudu the cockatiel"
              width={45}
              height={45}
              className="absolute z-10 animate-bounce-drop"
              onClick={() => setPopupDuduOpen(!isPopupDuduOpen)}
            />
            <div className="relative">
              <input
                className="w-full bg-transparent rounded placeholder:text-stone-500 text-slate-700 text-sm border border-black pl-12 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-white hover:border-white border-2 border-black shadow-custom-black"
                placeholder="Type anything"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputEventKey}
              />
              <button
                onClick={handleClick}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded bg-custom-pink p-1 text-center text-xl text-white transition-all shadow-sm hover:shadow focus:shadow-none hover:bg-custom-purple active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <HeartIcon className="h-5	w-5 text-white-100" />
              </button>
            </div>
          </div>
        </div>
        <div className="font-mono flex items-center justify-between ">
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
          <Link
            href="https://embeds.beehiiv.com/3dead21d-aa73-4ddb-9a24-7ef51d52eb34"
            className="text-gray-800 hover:text-custom-green"
          >
            Newsletter
          </Link>
          <Star className="relative left-4" size={4} />
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          handleClose={handlePopupClose}
          isMinimized={isMinimized}
          isFullScreen={isFullScreen}
          handleMinimize={handleMinimize}
          handleFullScreen={handleFullScreen}
          email={email}
          message={message}
          showAllButtons
        />
      )}
      {isPopupDuduOpen && (
        <Popup handleClose={handlePopupDuduClose} message={MESSAGE_DUDU} />
      )}
    </div>
  );
}
