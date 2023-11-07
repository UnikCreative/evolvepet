import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";



const classes: Array<ClassType> = [
    {
        name: "Weitht Training Classes",
        desc: "bla bla bla",
        image: image1,
    },
    {
        name: "Yoga Classes",
        desc: "bla bla bla",
        image: image2,
    },
    {
        name: "Weitht Training Classes",
        desc: "bla bla bla",
        image: image3,
    },
    {
        name: "Weitht Classes",
        desc: "bla bla bla",
        image: image4,
    },
    {
        name: "Weitht Training Classes",
        desc: "bla bla bla",
        image: image5,
    },

    {
        name: "Weitht Training Classes",
        desc: "bla bla bla",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>
                            OUR CLASSES
                            <p className="py-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </HText>
                    </div>

                    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default OurClasses