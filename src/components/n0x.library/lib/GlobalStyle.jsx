import { createGlobalStyle } from "styled-components/macro";
export const GlobalStyle = createGlobalStyle`

  html {
      font-size: calc( 18px + ( 21 - 18 ) * ( 100vw - 400px ) / ( 800 - 400 ) );
  }
  html, body {
    color: ${props => props.theme.colors.bodyText};
    background-color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.normal};
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
  button {
    outline: none;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {font-size: 2.441em;}

  h3 {font-size: 1.953em;}

  h4 {font-size: 1.563em;}

  h5 {font-size: 1.25em;}

  small, .text_small {font-size: 0.8em;}

  *,
  ::before,
  ::after
  {
      box-sizing: border-box; /* 2 */

      background-repeat: no-repeat; /* 1 */
  }
  ::before,
  ::after
  {
      vertical-align: inherit; /* 2 */
      text-decoration: inherit; /* 1 */
  }

  html
  {
      font-family: system-ui,
      /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ Segoe UI,
      /* Android 4+ */ Roboto,
      /* Ubuntu 10.10+ */ Ubuntu,
      /* Gnome 3+ */ Cantarell,
      /* KDE Plasma 5+ */ Noto Sans,
      /* fallback */ sans-serif,
      /* macOS emoji */ 'Apple Color Emoji',
      /* Windows emoji */ 'Segoe UI Emoji',
      /* Windows emoji */ 'Segoe UI Symbol',
      /* Linux emoji */ 'Noto Color Emoji'; /* 2 */
      line-height: 1.15; /* 3 */

      cursor: default; /* 1 */
      word-break: break-word; /* 6 */
      -moz-tab-size: 4; /* 4 */
           tab-size: 4; /* 4 */

          -ms-text-size-adjust: 100%; /* 5 */
      -webkit-text-size-adjust: 100%; /* 5 */
  }
  body
  {
      margin: 0;
  }
  hr
  {
      overflow: visible; /* 2 */

      height: 0; /* 1 */
  }
  main
  {
      display: block;
  }
  nav ol,
  nav ul
  {
      list-style: none;
  }
  pre
  {
      font-family: /* macOS 10.10+ */ Menlo,
      /* Windows 6+ */ Consolas,
      /* Android 4+ */ Roboto Mono,
      /* Ubuntu 10.10+ */ Ubuntu Monospace,
      /* KDE Plasma 5+ */ Noto Mono,
      /* KDE Plasma 4+ */ Oxygen Mono,
      /* Linux/OpenOffice fallback */ Liberation Mono,
      /* fallback */ monospace; /* 1 */
      font-size: 1em; /* 2 */
  }
  a
  {
      background-color: transparent;
      text-decoration: none;
      color: ${props => props.theme.colors.link[0]};
  }
  abbr[title]
  {
      text-decoration: underline;
      text-decoration: underline dotted;
  }
  b,
  strong
  {
      font-weight: bolder;
  }
  code,
  kbd,
  samp
  {
      font-family: /* macOS 10.10+ */ Menlo,
      /* Windows 6+ */ Consolas,
      /* Android 4+ */ Roboto Mono,
      /* Ubuntu 10.10+ */ Ubuntu Monospace,
      /* KDE Plasma 5+ */ Noto Mono,
      /* KDE Plasma 4+ */ Oxygen Mono,
      /* Linux/OpenOffice fallback */ Liberation Mono,
      /* fallback */ monospace; /* 1 */
      font-size: 1em; /* 2 */
  }
  small
  {
      font-size: 80%;
  }
  ::-moz-selection
  {
      color: #000; /* 1 */
      background-color: #b3d4fc; /* 1 */
      text-shadow: none;
      outline: none;
  }
  ::selection
  {
      color: #000; /* 1 */
      background-color: #b3d4fc; /* 1 */
      text-shadow: none;
      outline: none;
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video
  {
      vertical-align: middle;
  }
  audio,
  video
  {
      display: inline-block;
  }
  audio:not([controls])
  {
      display: none;

      height: 0;
  }
  img
  {
      border-style: none;
  }
  svg:not([fill])
  {
      fill: currentColor;
  }
  svg:not(:root)
  {
      overflow: hidden;
  }
  table
  {
      border-collapse: collapse;
  }
  button,
  input,
  select,
  textarea
  {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
  }
  button,
  input,
  select
  {
      margin: 0;
  }
  button
  {
  outline: none;
      overflow: visible; /* 1 */

      text-transform: none; /* 2 */
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit']
  {
      -webkit-appearance: button;
  }
  fieldset
  {
      padding: .35em .75em .625em;
  }
  input
  {
      overflow: visible;
  }
  legend
  {
      display: table; /* 1 */

      max-width: 100%; /* 1 */

      white-space: normal; /* 1 */

      color: inherit; /* 2 */
  }
  progress
  {
      display: inline-block; /* 1 */

      vertical-align: baseline; /* 2 */
  }
  select
  {
      text-transform: none;
  }
  textarea
  {
      overflow: auto; /* 2 */

      margin: 0; /* 1 */

      resize: vertical; /* 3 */
  }
  [type='checkbox'],
  [type='radio']
  {
      padding: 0;
  }
  [type='search']
  {
      outline-offset: -2px; /* 2 */

      -webkit-appearance: textfield; /* 1 */
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button
  {
      height: auto;
  }
  ::-webkit-input-placeholder
  {
      opacity: .54;
      color: inherit;
  }
  ::-webkit-search-decoration
  {
      -webkit-appearance: none;
  }
  ::-webkit-file-upload-button
  {
      font: inherit; /* 2 */

      -webkit-appearance: button; /* 1 */
  }
  ::-moz-focus-inner
  {
      padding: 0;

      border-style: none;
  }
  :-moz-focusring
  {
      outline: 1px dotted ButtonText;
  }
  details
  {
      display: block;
  }
  dialog
  {
      position: absolute;
      right: 0;
      left: 0;

      display: block;

      width:    -moz-fit-content;
      width: -webkit-fit-content;
      width:         fit-content;
      height:    -moz-fit-content;
      height: -webkit-fit-content;
      height:         fit-content;
      margin: auto;
      padding: 1em;

      color: ${props => props.theme.colors.bodyText};
      border: solid;
      background-color: ${props => props.theme.colors.body};
  }

  dialog:not([open])
  {
      display: none;
  }
  summary
  {
      display: list-item;
  }
  canvas
  {
      display: inline-block;
  }
  template
  {
      display: none;
  }
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex]
  {
      -ms-touch-action: manipulation; /* 1 */
          touch-action: manipulation; /* 2 */
  }
  [hidden]
  {
      display: none;
  }
  [aria-busy='true']
  {
      cursor: progress;
  }
  [aria-controls]
  {
      cursor: pointer;
  }
  [aria-disabled='true'],
  [disabled]
  {
      cursor: not-allowed;
  }
  [aria-hidden='false'][hidden]:not(:focus)
  {
      position: absolute;

      display: inherit;
      clip: rect(0, 0, 0, 0);
  }
`;
