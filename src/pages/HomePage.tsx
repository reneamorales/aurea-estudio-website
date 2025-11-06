import { Hero } from '../widgets/Hero'
import { PurposeSection } from '@/widgets/PurposeSection'


import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '@/widgets/Footer'

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);
    return (
        <>
            <Hero />
            <PurposeSection/>

            {/*  <Report />
            <TestimonialSection testimonialsPlatform={testimonialsPlatform} />
            <ContactForm />*/}
        </>
    )
}

export default HomePage