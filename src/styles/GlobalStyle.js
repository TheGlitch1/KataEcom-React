import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";

//?  fonts
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
/* variables  */
:root {
  /** colors */
  --primary-color: #0f0c29;
  --secondary-color: #302b63;
  --accent-color-1: #24243e;
  --accent-color-2: #ff0080;
  --accent-color-3: #ff8c00;
  --accent-color-4: #f27121;
  --bg-color: #1e1e2f;
  --text-color: #ffffff;
  --muted-text-color: #b0b0b5;
  --link-color: #ff00ff;
  --link-hover-color: #00ffff;

  /** sizes */
  --max-width: 1300px;
  --header-height: 6rem;
  --footer-height: 5rem;
  --breadcrumb-height: 5rem;

  /** styles */
  --transition: 0.3s;
  --radius: 0.35rem;


  /* font-sizes */
  --fs-900: 9.375rem;
  --fs-800: 3rem;
  --fs-700: 2.5rem;
  --fs-600: 2rem;
  --fs-500: 1.62rem;
  --fs-400: 1.425rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
}

/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

/*? typography */
html {
  font-size: 0.525rem;  //8px
  
  ${Screen.sm`
    font-size: 0.562rem;  //9px
    `}

${Screen.md`
  font-size: 0.625rem;  //10px
  `}

${Screen.lg`
font-size: 0.75rem; //12px
  `}
}


/*? global styles */

body {
  background: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: min(100%, var(--max-width));
  margin-inline: auto;
}

main {
  margin-top: var(--header-height);
}

a {
  color: var(--link-color);
  transition: var(--transition);
}
a:hover {
  color: var(--link-hover-color);
}

/*? global class */

.page {
  min-height: calc(
    100vh -
      (var(--header-height) + var(--footer-height) + var(--breadcrumb-height))
  );
}

.page-w-b {
  margin-top: var(--header-height);
  min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
}

/* Utility Classes */
.bg-primary {
  background-color: var(--primary-color);
}

.bg-secondary {
  background-color: var(--secondary-color);
}

.bg-accent-1 {
  background-color: var(--accent-color-1);
}

.bg-accent-2 {
  background-color: var(--accent-color-2);
}

.bg-accent-3 {
  background-color: var(--accent-color-3);
}

.bg-accent-4 {
  background-color: var(--accent-color-4);
}

.text-muted {
  color: var(--muted-text-color);
}

.radius {
  border-radius: var(--radius);
}

.transition {
  transition: var(--transition);
}
`;

export default GlobalStyle;
