import styled from "styled-components";

export const MainStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .main-page-contents-container {
    min-width: 1000px;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .user-search-container {
      width: 100%;
      height: 100%;

      .user-search-label {
        font-weight: bold;
        font-size: 30px;
        padding-left: 10px;
      }
    }

    .search-result-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 15px;
    }
  }
`;
