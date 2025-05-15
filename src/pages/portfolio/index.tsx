import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context } from "./styles";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="Portfólio"
          icon={<BsInfoCircleFill size={40} />}
        />
      </Context>
    </>
  );
};
