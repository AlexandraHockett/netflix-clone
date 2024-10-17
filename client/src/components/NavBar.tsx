import { useEffect, useState } from "react";

const tabs = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

export default function NavBar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-16 py-6 flex items-center ${
          showBackground ? "bg-black bg-opacity-90" : null
        }`}
      >
        <img
          className="h-14"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix logo"
        />
        <div className="flex gap-7 ml-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <p>{tab}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
