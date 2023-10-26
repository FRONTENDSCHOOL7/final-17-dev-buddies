import styled from "styled-components";

export const Top = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }
  .btn-save {
    color: #fff;
    background: #12184E;
    padding: 7px 32px;
    border-radius: 32px;

    &.disabled {
      color: #fff; /* 비활성화 시 텍스트 색상 */
      background: #6f76b6; /* 비활성화 시 배경색 */
    }
  }
`;

export const TopFollowers = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }
  h2 {
    transform: translateY(-15%);
    font-size: 20px;
    margin-left: -5px;
  }
`;
