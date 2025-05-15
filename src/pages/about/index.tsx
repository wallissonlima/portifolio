import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  ContenteBody,
  Context,
  Custom,
  CustomBody,
  CustomIcon,
  CustomIconCicular,
} from "./styles";
import { Animate } from "react-simple-animate";
import { FaDatabase, FaDev } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";

export const About = () => {
  const personlDetails = [
    {
      label: "Nome",
      value: "Wallisson Lima",
    },
    {
      label: "Idade",
      value: "27",
    },
    {
      label: "Endereço",
      value: "Luziania-Go",
    },
    {
      label: "E-mail",
      value: "wallissonlima12@gmail.com",
    },
    {
      label: "Celular",
      value: "61 99636-5510",
    },
  ];
  const jobSummary =
    "Sou graduado em Sistemas de Informação pelo Centro Universitário UNIDESC e apaixonado por Tecnologia da Informação. Iniciei minha carreira como estagiário no Ministério da Fazenda, atuando com suporte técnico, e posteriormente como programador web no DNIT, desenvolvendo sistemas com Laravel e Vue.js. Atualmente, foco no desenvolvimento de soluções web e mobile utilizando ReactJS e React Native. Tenho experiência com metodologias ágeis, trabalho em equipe e estou sempre em busca de aprendizado contínuo. Estou pronto para contribuir com projetos inovadores e agregar valor à sua organização.";
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="Sobre mim"
          icon={<BsInfoCircleFill size={40} />}
        />
        <ContenteBody>
          <CustomBody>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: "translateX(-900px)" }}
              end={{ transform: "translatex(0px)" }}
            >
              <h3>Front End Developer</h3>
              <p>{jobSummary}</p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: "translateX(500px)" }}
              end={{ transform: "translatex(0px)" }}
            >
              <h3>informações pessoais</h3>
              <ul>
                {personlDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </CustomBody>
          <Custom>
            <CustomIconCicular>
              <CustomIcon>
                <div>
                  <FaDev size={60} color="#ffffff" />
                </div>
                <div>
                  <DiAndroid size={60} color="#ffffff" />
                </div>
                <div>
                  <FaDatabase size={60} color="#ffffff" />
                </div>
                <div>
                  <DiApple size={60} color="#ffffff" />
                </div>
              </CustomIcon>
            </CustomIconCicular>
          </Custom>
        </ContenteBody>
      </Context>
    </>
  );
};
