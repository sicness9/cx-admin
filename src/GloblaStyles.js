import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #F4B543;
        --secondary-color: #1A1A1A;
        --tertiary-color: #97999C;

        --dark-bg: #323335;
        --dark-secondary-color: #F9F9F9;

        --light-bg: #F9F9F9;
    }

    * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    body {
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }

    button {
        background-color: ${({ theme }) => theme.buttonBg};
        color: ${({ theme }) => theme.buttonText};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 10px 15px;
        border-style: none;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            background-color: var(--primary-color);
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(2px);
        }

    }

    a {
        color: ${({ theme }) => theme.text};
        cursor: pointer;
    }
`;
