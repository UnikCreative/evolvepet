import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'




type Props = {
    setSelectedPage: ( value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  
  const isAboveMediaScreens = useMediaQuery( "(min-width:1060px)")
    return (
    <section
        id='home'
        className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
        {/* Image and main header */}
        <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                <motion.div 
                className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
                >
                    {/* Heading */}
                     <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                             <img alt='home-page-text' src={HomePageText} />
                        </div>

                        <p className='mt-8 text-sm'>
                        Welcome to a haven for dog lovers, where tails wag, hearts melt, and paws leave their mark on our souls. We believe that dogs are not 
                        just pets; they're furry family members who enrich our lives with unconditional love and boundless energy.
                        </p>
                    </div>

                    {/* Action */}
                    <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5 }}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                    
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Buy Now
                        </ActionButton>

                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                        <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </motion.div>
            </div>
            {/* Image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img alt='home-page-graphic' src={HomePageGraphic} />
            </div>

        </motion.div>
        {/* Sponsors */}
        {isAboveMediaScreens && (
            <div className="h-[150px] w-full bg-purple-100 py-10">
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center gap-8 justify-between '>
                        <img alt='redbull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}

    </section>
  )
} 

export default Home