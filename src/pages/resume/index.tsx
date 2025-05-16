import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context, CustomBody, CustomH3 } from "./styles";
import { ResumeData } from "../../util/resume";
import { MdWork } from "react-icons/md";

export const Resume = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader headertext="Resumo" icon={<BsInfoCircleFill size={40} />} />
        <CustomBody>
          <div>
            <h3 className="title">EXPERIÊNCIA</h3>
            <VerticalTimeline layout={"1-column"} lineColor={"A9A9A9"}>
              {ResumeData.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1.5px solid #000",
                  }}
                  date="2020 - Present"
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#e0e0e0",
                    color: "#323238",
                  }}
                >
                  <CustomH3>
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </CustomH3>
                  <p>{item.Description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div>
            <h3 className="title">ACADÊMICO</h3>
            <VerticalTimeline layout={"1-column"} lineColor={"#A9A9A9"}>
              {ResumeData.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1.5px solid #000",
                  }}
                  date="2020 - Present"
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#e0e0e0",
                    color: "#323238",
                  }}
                >
                  <CustomH3>
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </CustomH3>
                  <p>{item.Description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </CustomBody>
      </Context>
    </>
  );
};
