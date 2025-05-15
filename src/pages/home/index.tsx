import { Header } from "../../components/Header";
import { Animate } from "react-simple-animate";
import { Context, NewButton } from "./styles";
import { useNavigate } from "react-router-dom";

export const Inicio = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <Header />
      <Context>
        <h1>
          Hello, I´m Wallisson Lima
          <br />
          Front-End Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateY(300px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <div>
            <NewButton onClick={handleClick}>Contrate-me</NewButton>
          </div>
        </Animate>
      </Context>
    </>
  );
};
