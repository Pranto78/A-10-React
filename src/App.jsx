import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="p-6">
      <button
        className="btn btn-primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="mt-4 card bg-base-200 p-4 shadow-xl">
        <h2 className="text-xl font-bold">Hello World!</h2>
        <p>The background and text color will change with theme!</p>
      </div>
    </div>
  );
}

export default App;
