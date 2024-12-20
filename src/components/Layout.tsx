"use client"
import { useState } from "react";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };

  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div>
          <a href="/" className="text-2xl font-bold hover:text-gray-300">UH Blogs</a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded-md hover:bg-gray-700 hover:text-gray-300"
          >
            {isDarkTheme ? "Light Theme" : "Dark Theme"}
          </button>
          <a
            href="https://studio-uh-blogs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-700 hover:text-gray-300"
          >
            Admin
          </a>
        </div>
      </header>
        {children}
      <footer className="flex justify-center items-center p-4 border-t border-gray-700">
        <p>2024 UH Blogs</p>
      </footer>
    </div>
  );
};

export default SiteLayout;
