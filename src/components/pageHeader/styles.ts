import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px dashed ${(props) => props.theme["gray-100"]};

  h2 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 1rem;
    text-transform: capitalize;
    color: ${(props) => props.theme["gray-100"]};
    display: flex;
    flex-grow: 1;
  }

  span{
    svg{
        color: ${(props) => props.theme["gray-100"]};
    }
  }
`;
