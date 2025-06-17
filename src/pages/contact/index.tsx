import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context, CustomButton, CustomDiv, CustomForm } from "./styles";
import { Animate } from "react-simple-animate";
import { Input, Label } from "reactstrap";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tlr7cir", // do EmailJS
        "template_g3j0ghs", // do EmailJS
        form.current,
        "ZJzcmHfv8vdB7aFHV" // public key
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
          form.current.reset(); // limpa os campos
        },
        (error) => {
          alert("Erro ao enviar. Tente novamente.");
          console.log(error.text);
        }
      );
  };

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
            <CustomForm ref={form} onSubmit={sendEmail}>
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
              <CustomButton type="submit">Enviar</CustomButton>
            </CustomForm>
          </Animate>
        </div>
      </Context>
    </>
  );
};
