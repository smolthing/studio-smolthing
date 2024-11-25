import { useEffect, useState } from "react";

interface PopupProps {
  handleClose: () => void;
  handleFullScreen?: () => void;
  handleMinimize?: () => void;
  isFullScreen?: boolean;
  isMinimized?: boolean;
  email?: string;
  message?: string;
  showAllButtons?: boolean;
}

function Popup({
  handleClose,
  handleFullScreen = () => {},
  handleMinimize = () => {},
  isFullScreen = false,
  isMinimized = false,
  email = "",
  message,
  showAllButtons = false,
}: PopupProps) {
  const defaultMessage = () => (
    <>
      hehe, thank <span className="font-bold">{email}</span> for subscribing!
    </>
  );

  const colors = [
    "bg-custom-pink",
    "bg-custom-blue",
    "bg-custom-green",
    "bg-custom-yellow",
  ];
  const [color, setColor] = useState("");

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, []); // Runs only once when the component mounts

  return (
    <>
      {!isMinimized && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`relative bg-gray-100 border-2 border-black shadow-[2px_2px_0px_0px_black] ${
              isFullScreen ? "w-full h-full" : "w-[300px]"
            } transition-all`}
          >
            <div
              className={`flex items-center justify-end border-b-2 border-black px-2 ${color} text-lg`}
            >
              {showAllButtons && (
                <>
                  <button
                    onClick={handleMinimize}
                    className="text-black hover:text-custom-yellow focus:outline-none mr-2"
                    title="Minimize"
                  >
                    -
                  </button>
                  <button
                    onClick={handleFullScreen}
                    className="text-black hover:text-custom-yellow focus:outline-none mr-2"
                    title="Maximize"
                  >
                    o
                  </button>
                </>
              )}

              <button
                onClick={handleClose}
                className="text-black hover:text-red-600 focus:outline-none"
                title="Close"
              >
                x
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm mb-2">
                {message ? message : defaultMessage()}
              </p>
            </div>
          </div>
        </div>
      )}

      {isMinimized && (
        <div
          onClick={() => handleMinimize()}
          className="fixed bottom-5 left-5 text-white rounded-full p-2 cursor-pointer shadow-md"
        >
          💛
        </div>
      )}
    </>
  );
}

export default Popup;
