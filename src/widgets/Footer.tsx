import { Link } from "react-router-dom";
import MapPin from "../icons/MapPin"
import Email from "@/icons/Email";
import { Linkedin, Youtube, Instagram, Twitter } from "@/icons/SocialMedia";

{/*import { Whatsapp } from "../icons/Whatsapp"*/ }

export const Footer = () => {
    return ( 
        <footer className="flex flex-col items-center bg-brand-support-strong gap-3 md:gap-6 xl:gap-8 section">
            <a href="/" aria-label="Ir a la home" className="flex justify-center" >
                <h1 className="pointer text-2xl leading-5 md:text-3xl md:leading-9 lg:text-4xl lg:leading-12 font-extrabold">
                    <span className="text-blue-800">Áurea Estudio</span>
                </h1>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-white gap-3 md:gap-6 xl:gap-0 w-full">

                {/* Links Frecuentes */}
                <div className="flex flex-col container-inner">
                    <h2 className="title-footer-aurea">Links Frecuentes</h2>
                    <ul className="flex flex-col container-inner-content">
                        <li><Link to="/acerca-de" className="text-black hover:text-brand-secondary-medium font-semibold">Acerca de</Link></li>
                        <li><Link to="/proceso" className="text-black hover:text-brand-secondary-medium font-semibold">Proceso</Link></li>
                        <li><Link to="/preguntas-frecuentes" className="text-black hover:text-brand-secondary-medium font-semibold">FAQs</Link></li>
                        <li><Link to="/tyc" className="text-black hover:text-brand-secondary-medium font-semibold">Términos y Condiciones</Link></li>
                        <li><Link to="/contacto" className="text-black hover:text-brand-secondary-medium font-semibold">Contacto</Link></li>
                    </ul>
                </div>

                {/*quito la declaracion de utilidad text-content-footer de todos los li de links frecuentes y de Contacto también*/}
                {/*declaros utilidades de uso exclusivas para el uso de aurea, title-footer-aurea */}

                {/* Contacto */}
                <div className="flex flex-col container-inner">
                    <h2 className="title-footer-aurea">¿Dudas? Contáctenos</h2>

                    <ul className="flex flex-col container-inner-content gap-5">
                        <li className="flex gap-1 items-center">
                            <MapPin />
                            <p className="text-black">Avenida Libertador 1150, CABA - Argentina</p>
                        </li>
                        {/*<li className="flex gap-1 items-center">
                            <Email />
                            <p className="text-black font-bold">hola@aureaestudio.com</p>
                        </li>*/}
                    </ul>
                   {/* <img src={locationMap} alt="Localización" className="rounded-lg md:rounded-xl border-2 border-gray-100" />*/}

                   {/*<a className="flex gap-1 items-center mt-4 md:mt-6 xl:mt-8 transition-all duration-200 hover:text-brand-secondary-strong hover:scale-98"
                        href="https://wa.me/5490000000000?text=Hola,+me+gustar%C3%ADa+hacer+una+consulta+sobre+los+servicios+de+Áurea+Estudio."
                        target="_blank"
                        rel="noopener noreferrer">
                        <p className="text-black text-cta-wsp">Escríbenos al Whatsapp</p>
                        <Whatsapp className="icon-wsp" />
                    </a>*/}

                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col container-inner">
                    <li className="flex gap-1 items-center">
                        <Email />
                        <p className="text-black font-bold">hola@aureaestudio.com</p>
                    </li>
                    <h3 className="title-footer-aurea">Síguenos en nuestras redes!</h3>
                    <ul className="grid grid-cols-4 container-inner-content">
                        <li className="flex flex-center justify-center items-center container-social-media-aurea">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media-aurea">
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media-aurea">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media-aurea">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="icons-social-media" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


            {/* Copyright */}
            <div className="flex flex-center flex-col w-full">
                <hr className="border-b-[0.5px] text-gray-300" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 h-auto mt-3 md:mt-6 xl:mt-8 gap-2">

                    <p className="copyright text-center text-black-200 leading-5  md:leading-9">
                        ©2025 | Diseñado y Desarrollado por
                    </p>

                    <a href="" aria-label="Ir a RENE-UXUI.COM" className="flex justify-center items-center gap-1 md:gap-2">

                        <img src="/favicon-rcd.svg" alt="logo rene.creative.dev"
                            className="w-[24px] h-[24px]" />

                        <h1 className="pointer text-lg leading-5 md:text-2xl md:leading-9 font-extrabold text-black/80">
                            Rene.creative.dev
                        </h1>

                    </a>
                </div>
            </div>


        </footer>
    )
}
