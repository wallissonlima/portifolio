import styled from "styled-components";

export const Context = styled.nav`
  height: 80px;
  font-size: 1.2rem;
  padding-right: 0.5rem;
  background-color: ${(props) => props.theme["gray-1000"]};
  position: sticky;

  img {
    width: 5rem;
    height: 50px;
  }
  .navbar-toggler {
    border: none;
    color: white;
    font-size: 1.5rem;
    margin-right: auto;
  }
  .collapse {
    display: flex;
    justify-content: flex-end;
  }
  .navbar {
    display: flex;
    list-style: none;
    text-align: center;
    flex-wrap: nowrap;
  }
  .nav-item {
    line-height: 40px;
    list-style: none;
    text-align: center;
  }
  .nav-link {
    font-size: 1rem;
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: whitesmoke;
      transition: all 0.5s ease;
    }

    &:hover {
      color: ${(props) => props.theme["gray-200"]};

      &::after {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .DropAdmin {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .DropAdmin.active {
      background-color: #181818;
      left: 0px;
      opacity: 1;
    }
  }
`;
