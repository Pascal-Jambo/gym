import { ClassesType, SelectedPage } from "@/shared/enum";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "@/shared/Class";

const classes:Array< ClassesType> = [
  {
    name: "Weight Training Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image2,
  },
  {
    name: "Ab core Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image5,
  },
  {
    name: "Training Classes",
    dscription:
      "Bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor. In dictum non consectetur a erat nam at. Auctor eu augue ut lectus. Nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum.",
    image: image6,
  },
];
type Props = {
  setSelected: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelected }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelected(SelectedPage.OurClasses)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5 md:w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
              dolor sit amet consectetur adipiscing elit duis tristique
              sollicitudin. Praesent elementum facilisis leo vel fringilla est
              ullamcorper. Vel orci porta non pulvinar neque laoreet suspendisse
              interdum consectetur. Potenti nullam ac tortor vitae purus
              faucibus ornare suspendisse
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item:ClassesType, index) => (
              <Class key={index} 
              name={item.name}
              description={item.dscription}
              image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
