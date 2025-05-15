import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context } from "./styles";

export const Contact = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="contato"
          icon={<BsInfoCircleFill size={40} />}
        />
      </Context>
    </>
  );
};
