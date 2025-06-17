import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context, CustomButton, CustomDiv, CustomForm } from "./styles";
import { Animate } from "react-simple-animate";
import { Button, Input, Label } from "reactstrap";

export const Contact = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="contato"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Entre em contato</h3>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <CustomForm>
              <CustomDiv>
                <div>
                  <Input
                    required
                    className="inputName"
                    name="name"
                    type="text"
                  />
                  <Label className="nameLabel">Nome</Label>
                </div>
                <div>
                  <Input
                    required
                    className="inputEmail"
                    name="email"
                    type="text"
                  />
                  <Label className="emailLabel">E-mail</Label>
                </div>
                <div>
                  <Input
                    required
                    className="inputDescricao"
                    name="descricao"
                    type="text"
                  />
                  <Label className="descricaoLabel">Descrição</Label>
                </div>
              </CustomDiv>
              <CustomButton>Enviar</CustomButton>
            </CustomForm>
          </Animate>
        </div>
      </Context>
    </>
  );
};
