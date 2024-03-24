import { SelectedPage } from "@/shared/enum";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
type Props = {
  setSelected: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelected }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onsubmitted = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
      <motion.div onViewportEnter={() => setSelected(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Id venenatis a condimentum vitae sapien pellentesque. Diam maecenas
            sed enim ut sem viverra. Eget dolor morbi non arcu risus quis.
            Dignissim convallis aenean et tortor at. Vulputate mi sit amet
            mauris commodo quis imperdiet. Commodo odio aenean sed adipiscing.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onsubmitted}
              action="https://formsubmit.co/77a7ec761e4fa8253add199ed8859dec"
              method="POST"
            >
              <input
                type="text"
                placeholder="Name"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "100 characters are required"}
                </p>
              )}
              <input
                type="text"
                placeholder="Email"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                placeholder="Message"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white"
                {...register("message", {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "200 characters are required"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img src={ContactUsPageGraphic} alt="contact us" className="w-full"/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
