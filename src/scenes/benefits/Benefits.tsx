import useMediaQuery from "@/hooks/useMediaQuerry";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/enum";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsGraphics from "@/assets/BenefitsPageGraphic.png"
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelected: (value: SelectedPage) => void;
};

const Benefits = ({ setSelected }: Props) => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the art facilities",
      description:
        "Engineers typically lead software development projects, starting with collecting and studying the information and needs of the user",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse classes",
      description:
        "They serve as an in-house expert, both for managers from other departments who need software solutions and the less experienced staff within the IT departmen",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and pro trainers",
      description:
        "Most companies require a minimum of five years of experience working as a Software Engineer.",
    },
  ];
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelected(SelectedPage.Benefits)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>More Than Just A Gym.</HText>
          <p className="my-5 text-sm">
            This opportunity provides the candidates the unique chance to work
            on innovative medical products, with the potential to significantly
            change the practice of medicine in the care of patients suffering
            from a wide range of highly debilitating vascular diseases.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelected={setSelected}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DISCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img className="mx-auto" src={BenefitsGraphics} alt="" />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{"  "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </motion.div>
            {/* DESCRIPTION */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay:0.2,duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelected={setSelected}>
Join now
                    </ActionButton>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
