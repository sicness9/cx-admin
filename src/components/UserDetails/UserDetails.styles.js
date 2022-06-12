import styled from "styled-components";

export const UserDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  span {
    color: var(--primary-color);
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }

  .user-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100%;

    .user-info-title {
      font-weight: bold;
    }

    .basic-info-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      gap: 20px;
    }

    .email-preference-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      gap: 20px;
    }

    .other-info-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      gap: 20px;
    }

    .device-info-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      gap: 20px;
    }

    .sub-info-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      gap: 15px;

      .sub-service-link-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 25px;
      }
    }
  }
`;
