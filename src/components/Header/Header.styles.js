import styled from "styled-components";

export const HeaderStyles = styled.div`
  height: 80px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  .cx-admin-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo-container {
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .theme-switch-container {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;

      .theme-toggle-btn {
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;

        &:hover {
          box-shadow: none;
        }
      }
    }
  }
`;
