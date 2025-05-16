import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/pageHeader";
import { Context, CustomBody, CustomBodyForm } from "./styles";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { SkillsData } from "../../util/slillsData";
import { Line } from "rc-progress";

export const Skills = () => {
  return (
    <>
      <Header />
      <Context>
        <PageHeader
          headertext="Habilidades Técnicas"
          icon={<BsInfoCircleFill size={40} />}
        />
        <CustomBody>
          {SkillsData.map((item, i) => (
            <CustomBodyForm key={i}>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3>{item.label}</h3>
                <div>
                  {item.data.map((skillItem, name) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 1", "opacity: 0"]}
                      iterationCount={1}
                    >
                      <div key={name}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth={2}
                          strokeColor={"#928d8d"}
                          trailWidth={2}
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </CustomBodyForm>
          ))}
        </CustomBody>
      </Context>
    </>
  );
};
