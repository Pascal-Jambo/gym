import useMediaQuery from "@/hooks/useMediaQuerry";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/enum";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFobes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelected: (value: SelectedPage) => void;
};

const Home = ({ setSelected }: Props) => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div onViewportEnter={()=>setSelected(SelectedPage.Home)} className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-10 md:basis-3/5">
          {/* HEADER */}
          <motion.div 
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
          }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt=" homepage text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </motion.div>
          {/* ACTION */}
          <motion.div 
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
          }}
          className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelected={setSelected}>Join Now </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelected(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediaScreens&&(
        <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between">
                    <img src={SponsorRedBull} alt="redbur sponsor" />
                    <img src={SponsorFobes} alt="frobes sponsor" />
                    <img src={SponsorFortune} alt="fortune sponsor" />
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Home;
