(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const dark = () => root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  const sync = () => {
    toggle.setAttribute("aria-pressed", dark());
    toggle.title = dark() ? "Dark mode is on" : "Dark mode is off";
  };
  sync();
  toggle.addEventListener("click", () => {
    root.dataset.theme = dark() ? "light" : "dark";
    localStorage.setItem("lc-theme", root.dataset.theme);
    sync();
  });
})();
