import styled from "styled-components";

export const UserSearchStyles = styled.div`
  height: 35px;
  padding: 10px;
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); */

  .input-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    height: 100%;

    .userSearch-input {
      height: 100%;
      border-radius: 6px;
      border: 1px solid grey;
      padding-left: 10px;
      transition: all ease-in-out 0.2s;

      &:hover {
        border: 3px solid black;
      }
    }

    .userSearch-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 10px 15px;
      border-style: none;
      border-radius: 20px;
      transition: all 0.2s linear;

      .btn-text {
        font-weight: bold;
        font-size: 16px;
      }

      &:hover {
        background-color: var(--primary-color);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }
`;
