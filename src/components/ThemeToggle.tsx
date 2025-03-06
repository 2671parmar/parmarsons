
import React from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors", 
        theme === "dark" 
          ? "bg-gray-800 text-amber-300 hover:bg-gray-700" 
          : "bg-gray-100 text-gray-800 hover:bg-gray-200",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
