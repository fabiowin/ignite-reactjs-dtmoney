import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button: {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content {
    width: 100%;
    background: var(--background);
    max-width: 576px;
    padding: 3rem;
    border-radius: 0.25rem;
    position: relative;
  }

  .react-modal-close {
    background: transparent;
    border: 0;

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }

  }

`