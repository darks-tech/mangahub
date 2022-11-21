(() => {
  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (storedTheme) document.querySelector('body').setAttribute('data-theme', storedTheme)
})()