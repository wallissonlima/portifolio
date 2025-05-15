import styled from "styled-components";

export const Context = styled.div`
  width: 100%;
  min-height: 92vh;
  overflow-y: none;
  padding: 1px;
`;

export const ContenteBody = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
`;

export const Custom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CustomBody = styled.div`
  width: 65%;
  h3 {
    width: 100%;
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
    padding: 6px;
  }
  p {
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 1.5;
    padding-bottom: 2px;
    border-bottom: 1px dashed ${(props) => props.theme["gray-200"]};
  }
  li {
    line-height: 1rem;
    margin-bottom: 15px;

    .title {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.5px;
      border-bottom: 2px solid ${(props) => props.theme["gray-200"]};
      position: relative;
      display: inline-block;
      margin-right: 16px;
      padding-bottom: 5px;
      color: ${(props) => props.theme["gray-300"]};
    }
    .value {
      border: none;
    }
  }
`;

export const CustomIconCicular = styled.div`
  width: 350px;
  height: 350px;
  background: radial-gradient(
    180px,
    ${(props) => props.theme["gray-500"]},
    transparent 90%
  );
  position: relative;
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.theme["gray-400"]};
  animation: rotation 10s linear infinite;;
  
  @keyframes rotation {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CustomIcon = styled.div`
  div:nth-child(1) {
    position: absolute;
    top: -9%;
    left: 41%;
  }
  div:nth-child(2) {
    position: absolute;
    right: -8%;
    top: 41.5%;
  }
  div:nth-child(3) {
    position: absolute;
    bottom: -10%;
    left: 41%;
  }
  div:nth-child(4) {
    position: absolute;
    left: -8%;
    top: 41%;
  }
`;
