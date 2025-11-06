import heroImage from "@assets/images/hero/hero-image.png";

export const Hero = () => {
    return (
        <section
            aria-labelledby="hero-title"
            className="flex justify-center items-center bg-white h-[768px] md:h-[1024px] xl:h-[896px] w-full"
        >
            <h1 id="hero-title" className="sr-only">
                Diseñamos espacios modernos, funcionales y atemporales
            </h1>
            <div className="relative aspect-[3/4] md:aspect-[2/3] xl:aspect-[16/9] max-h-full overflow-hidden">
              {   <img
                    className="w-full h-full object-cover"
                   src={heroImage} 
                    alt="Hero"
                />}
               <div className="flex flex-col justify-center items-center gap-2 md:gap-3 absolute bottom-50">
                 <span className="text-center text-red-800 left-16 text-3xl text-leading-lh-3xl md:text-4xl text-leading-lh-4xl xl:text-5xl text-leading-lh-5xl font-extrabold text-balance">
                Diseñamos espacios modernos, funcionales y atemporales
                </span>
                <a href="#proyectos" className='block-inline bg-white text-black font-medium py-2 px-3 md:py-3 md:px-4 xl:py-4 xl:px-5 rounded-sm md:rounded-xl xl:rounded-xl drop-shadow-gray-200 drop-shadow-lg hover:drop-shadow-xl'>Descubrir Proyectos</a>
               </div>
            </div>
        </section>
    );
};
