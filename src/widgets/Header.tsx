import { useState, useEffect, useCallback } from "react";
import { Link} from "react-router-dom";
import { ScrollLink } from "@/components/ScrollLink/ScrollLink";
import Menu from "../icons/Menu";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarState, setNavbarState] = useState("top"); // "top", "hidden", "scrolled-up"


    // Alternar estado del menú
    const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
    {/*const closeMenu = useCallback(() => setIsMenuOpen(false), []);*/}

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.scrollY;
                    const vh = window.innerHeight;

                    if (currentScroll === 0) {
                        setNavbarState("top");
                    } else if (currentScroll > vh && currentScroll > lastScrollY) {
                        setNavbarState("hidden");
                    } else if (currentScroll > vh && currentScroll < lastScrollY) {
                        setNavbarState("scrolled-up");
                    } else if (currentScroll <= vh) {
                        setNavbarState("top");
                    }
                    lastScrollY = currentScroll;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Cierra el menú móvil si el ancho es mayor a 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const headerClass = [
        "px-8 py-3 flex flex-col items-start w-full bg-white transition-transform duration-300",
        navbarState === "hidden" && "-translate-y-full",
        navbarState === "scrolled-up" && "translate-y-0 shadow-lg",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <header className={headerClass}>
            <div className="flex justify-between items-center w-full h-auto">
                {/* Logo */}
                <Link to="/" aria-label="Ir a la home">
                    <h1 className="pointer text-xl leading-5 md:text-3xl md:leading-9 lg:text-4xl lg:leading-12 font-extrabold">
                        <span className="text-blue-900">Áurea Estudio</span>
                    </h1>
                </Link>

                {/* Menú Desktop */}
                <nav className="hidden text-black md:flex flex-1 min-w-[362px] max-w-[576px] w-full">
                    <ul className="flex justify-between items-center w-full ">
                        {[
                            { name: "Nosotros", path: "/nosotros" },
                            { name: "Proyectos", path: "/proyectos" },
                            { name: "Proceso", path: "/proceso" },
                            { name: "FAQs", path: "/preguntas-frecuentes" },
                            { name: "Contacto", path: "/#contacto", isScroll: true }
                        ].map(item => (
                            <li key={item.name}>
                                {item.isScroll ? (
                                    <ScrollLink
                                        to={item.path}
                                        className="pointer text-base md:text-lg font-semibold leading-8 transition-colors duration-300 ease-in-out hover:text-brand-secondary-medium"
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="pointer text-base md:text-lg font-semibold leading-8 transition-colors duration-300 ease-in-out hover:text-brand-secondary-medium"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botón menú móvil */}
                <button
                    className="md:hidden text-black"
                    aria-label="Abrir menú"
                    onClick={toggleMenu}
                >
                    <Menu />
                </button>
            </div>

            {/* Menú móvil */}
            <nav
                className={`md:hidden w-full bg-black transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-4 p-4">
                    {[{ name: "Nosotros", path: "/nosotros" },
                    { name: "Proyectos", path: "/proyectos" },
                    { name: "Proceso", path: "/proceso" },
                    { name: "FAQs", path: "/preguntas-frecuentes" },
                    { name: "Contacto", path: "/#contacto", }
                    ].map(item => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="pointer text-base md:text-lg font-semibold leading-8 text-white transition-colors duration-300 ease-in-out hover:text-brand-secondary-medium"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
