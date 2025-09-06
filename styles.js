
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    /* Persian Blue scale */
    --pb-50:#e8f6ff; --pb-100:#d4eeff; --pb-200:#b3dcff; --pb-300:#85c3ff;
    --pb-400:#559aff; --pb-500:#2e70ff; --pb-600:#0b43ff; --pb-700:#0239ff;
    --pb-800:#0532c7; --pb-900:#0f34a0; --pb-950:#091d5d;

    /* Light theme */
    --bg: #ffffff;
    --surface: #f7f9fc;
    --surface-elev: #ffffff;
    --text: #0b1220;
    --muted: #667085;
    --border: #e5e7eb;
    --ring: var(--pb-300);

    --btn-bg: var(--pb-500);
    --btn-text: #ffffff;
    --btn-bg-hover: var(--pb-600);

    --chip-bg: var(--pb-50);
    --chip-text: var(--pb-700);
    --chip-border: var(--pb-200);

    --input-bg: #fff;
    --input-border: #d0d5dd;
    --input-text: #111827;
    --input-placeholder: #9aa5b1;

    --shadow-sm: 0 1px 2px rgba(16,24,40,.06);
    --shadow-md: 0 6px 16px rgba(2,57,255,.10);
    --radius: 14px;
  }

  /* Dark mode via data-theme="dark" auf <html> oder body */
  [data-theme="dark"]{
    --bg: #0b1020;
    --surface: #0f1630;
    --surface-elev: #141c3a;
    --text: #eaf0ff;
    --muted: #a4b0cf;
    --border: #1f2b52;
    --ring: var(--pb-400);

    --btn-bg: var(--pb-600);
    --btn-text: #eaf0ff;
    --btn-bg-hover: var(--pb-500);

    --chip-bg: #0f1b3f;
    --chip-text: #cfe1ff;
    --chip-border: #1c2b68;

    --input-bg: #0f1630;
    --input-border: #24315f;
    --input-text: #eaf0ff;
    --input-placeholder: #8ea0cc;

    --shadow-sm: 0 1px 2px rgba(8,14,40,.4);
    --shadow-md: 0 8px 20px rgba(3,31,150,.35);
  }

  *, *::before, *::after { box-sizing: border-box; }
  html, body, #__next { height: 100%; }
  body{
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
    background: var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none; }
  img { display:block; max-width:100%; }
  button { font: inherit; }

  /* Focus ring */
  :focus-visible{
    outline: 3px solid var(--ring);
    outline-offset: 2px;
    border-radius: 10px;
  }

  /* Motion-respect */
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
  }
`;

export default GlobalStyle;
