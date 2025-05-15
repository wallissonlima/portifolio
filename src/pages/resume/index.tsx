import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context } from "./styles";

export const Resume = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="Resumo"
          icon={<BsInfoCircleFill size={40} />}
        />
      </Context>
    </>
  );
};
