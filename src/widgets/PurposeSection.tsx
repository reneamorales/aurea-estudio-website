export const PurposeSection = () => {
    const purposeData = [
        {
            title: "Nuestro propósito para con el mundo",
            descriptionIntro: [
                <>
                    <p>En <strong>Áurea Estudio</strong> transformamos ideas en espacios modernos y funcionales. Cada proyecto refleja nuestra pasión por el diseño, la innovación y la atención al detalle.</p>
                    <br />
                    <p className="font-semibold">Creemos en un enfoque que combina:</p>
                </>
            ],
            items: [
                "Innovación: soluciones arquitectónicas que sorprender y perduran.",
                "Sostenibilidad: materiales y procesos que respetan el entorno",
                "Diseño centrado en el usuario: espacios pensados para quienes lo habitan."
            ],
            descriptionFinal:
                "Nuestro equipo multidiciplinario trabaja en conjunto para dar vida a proyectos que inspiran, desde la conceptualización hasta la ejecución."
        }
    ];
    return (
        <section
            aria-labelledby="our-purpose"
            className="flex items-center justify-center bg-surface-cran-25 px-4 md:px-6 lg:px-24 xl:px-32 w-full py-28 md:py-32 xl:py-40"
        >
            <div className="max-w-3xl w-full text-black text-sm md:text-base xl:text-lg">

                {purposeData.map((purpose, purposeIdx) => (

                    <div className="flex flex-col">
                        <h2 id="our-purpose-title" key={purposeIdx} className="font-semibold text-xl md:text-2xl xl:text-3xl mb-3 md:mb-4">
                            {purpose.title}
                        </h2>
                        <div className="font-normal">{purpose.descriptionIntro}</div>

                        {purpose.items.map((item, itemIdx) => {
                            return (
                                <div className="flex" key={itemIdx}>
                                    <ul className="list-disc pl-5" >
                                        <li className="text-black purpose-items">
                                            {item}
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}

                        <p className="mt-2 font-medium italic">{purpose.descriptionFinal}</p>
                    </div>

                ))}
            </div>
        </section>
    );
}