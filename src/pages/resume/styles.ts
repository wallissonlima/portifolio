import styled from "styled-components";

export const Context = styled.div`
  width: 100%;

  overflow-y: auto;
  padding: 1rem;
`;

export const CustomBody = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;

  > div {
    width: 50%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: inline-block;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 30px;
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: 0.5px;
      position: relative;
      text-transform: uppercase;
      padding: 5px 10px;
      border-bottom: 2px solid ${(props) => props.theme["gray-100"]};

      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 4px;
        height: 10px;
        background-color: ${(props) => props.theme["gray-100"]};
        bottom: -2px;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }
    &:last-child {
      padding-bottom: 0px;
    }
  }
`;

export const CustomH3 = styled.div`
  display: flex;
  justify-content: baseline;
  font-weight: bold;

  h3,
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  h4 {
    margin-left: 8px;
  }
  p {
    font-size: 18px;
  }
`;

export const CustomData = styled.div`
  color: white;
  p {
    font-size: 13px;
  }
`;
