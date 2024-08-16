import UseLocalStorage from "./UseLocalSorage";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="container" data-theme={theme}>
      <p>Mode of the color</p>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
}
