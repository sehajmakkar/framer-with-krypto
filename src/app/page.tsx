"use client";
import { useState } from "react";
import {
  RefreshCw,
  Sun,
  Moon,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader1 from "@/loaders/Ace/Loader1";
import Loader2 from "@/loaders/Ace/Loader2";
import Animation1 from "@/loaders/Ace/Animation1";
import Animation2 from "@/loaders/Ace/Animation2";

export default function ComponentShowcase() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [refreshKeys, setRefreshKeys] = useState([0, 1, 2, 3]);

  const refreshComponent = (index: number) => {
    setRefreshKeys((prev) => {
      const newKeys = [...prev];
      newKeys[index] = newKeys[index] + 1;
      return newKeys;
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Component mapping array
  const components = [
    { component: Animation1, name: "Stroke Animation" },
    { component: Animation2, name: "Fill Animation" },
    { component: Loader1, name: "Fill Loader" },
    { component: Loader2, name: "Spin Loader" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <header className="relative px-6 py-8 md:px-12 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              motion.dev w sehaj
            </h1>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className={`${
                isDarkMode
                  ? "border-neutral-700 hover:bg-neutral-300 text-black"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p
            className={`text-lg md:text-xl flex items-center gap-2 ${
              isDarkMode ? "text-neutral-400" : "text-gray-600"
            }`}
          >
            <span>Made for Aceternity UI</span>
            <a
              href="https://ui.aceternity.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-3 py-1 text-sm rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ui.aceternity.com
            </a>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {components.map((item, index) => {
              const ComponentToRender = item.component;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] aspect-square ${
                    isDarkMode
                      ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700"
                      : "bg-gray-50 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {/* Refresh Button */}
                  <div className="absolute top-3 right-3 z-10">
                    <Button
                      onClick={() => refreshComponent(index)}
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 ${
                        isDarkMode
                          ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200"
                          : "bg-gray-200 hover:bg-gray-200 text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Component Content Area */}
                  <div className="p-6 h-full flex flex-col">
                    <div
                      className={`flex-1 rounded-xl border-2 border-dashed flex items-center justify-center mb-4 ${
                        isDarkMode
                          ? "border-neutral-800 bg-neutral-900/50"
                          : "border-gray-300 bg-gray-100/50"
                      }`}
                    >
                      {/* Render the actual component with refresh key */}
                      <div
                        key={refreshKeys[index]}
                        className="flex items-center justify-center"
                      >
                        <ComponentToRender />
                      </div>
                    </div>

                    {/* Component Name - Centered Below */}
                    <h3
                      className={`text-center text-md font-bold ${
                        isDarkMode ? "text-neutral-200" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-center text-xs mt-1 ${
                        isDarkMode ? "text-neutral-500" : "text-gray-500"
                      }`}
                    >
                      Refresh if you missed!
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p
              className={`text-sm ${
                isDarkMode ? "text-neutral-500" : "text-gray-500"
              }`}
            >
              The Animations look crazy in{" "}
              {isDarkMode ? "Light Mode" : "Dark Mode"}!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`mt-16 border-t ${
          isDarkMode
            ? "border-neutral-800 bg-neutral-950/50"
            : "border-gray-200 bg-gray-50/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2">SEHAJ</h4>
              <a
                href="https://x.com/sehajmakkarr"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-3 py-1 text-sm rounded-lg transition-colors ${
                  isDarkMode
                    ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                @sehajmakkarr
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/sehajmakkar",
                    label: "GitHub",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/sehajmakkarr",
                    label: "Twitter",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sehajmakkar/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? "hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200"
                        : "hover:bg-gray-200 text-gray-600 hover:text-gray-800"
                    }`}
                    aria-label={label}
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
