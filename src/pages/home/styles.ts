import { Button } from "reactstrap";
import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  min-height: 92vh;
  overflow-y: hidden;
  padding: 1rem;

  position: relative;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0px;
    font-weight: bold;
    padding: 1rem;

    line-height: 3rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    animation: typingEffectAnimation 3.5s steps(30, end);
  }

  @keyframes typingEffectAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const NewButton = styled(Button)`
  cursor: pointer;
  padding: 10px 70px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 4px;
  font-weight: bold;

  &:hover{
    background: ${(props) => props.theme["gray-200"]};
    color: ${(props) => props.theme["gray-1000"]};
  }
`;
