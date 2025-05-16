import styled from "styled-components";

export const Context = styled.div`
  width: 100%;
  min-height: 92vh;
  overflow-y: auto;
  padding: 1rem;
`;

export const CustomBody = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const CustomBodyForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
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

  div {
    width: 100%;
    padding: 10px 0 0;

    p {
      font-size: 1rem;
      margin: 0 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
