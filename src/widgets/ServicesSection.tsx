import { Card } from "@/components/ui/card";
import {
    Building,
    HardHat,
    Sofa,
    ClipboardPenLine,
    Scale3D    
} from "lucide-react";

const iconColors = [
"#009CA6",  // Diseño arquitectónico
"#6D28D9",  // Dirección de Obra
"#2E7D32",  // Interiorismo
"#2563EB",  // Consultoría técnica
"#F97316"  // Renderizado y modelado 3D
];

const services = [
    {
        icon: Building,
        title: "Diseño arquitectónico",
        description: "Creamos proyectos innovadores y funcionales que combinan estética, confort y eficiencia"
    },
    {
        icon: HardHat,
        title: "Dirección de Obra",
        description: "Supervisamos cada etapa de construcción para garantizar calidad, seguridad y cumplimiento de plazos."
    },
    {
        icon: Sofa,
        title: "Interiorismo",
        description: "Diseñamos espacios interiores modernos y personalizados que reflan tu estilo y necesidades."
    },
    {
        icon: ClipboardPenLine,
        title: "Consultoría técnica",
        description: "Ofrecemos asesoramiento experto en normativas, materiales y procesos para tomar decisiones seguras."
    },
    {
        icon: Scale3D,
        title: "Renderizado y modelado 3D",
        description: "Visualiza tu proyecto antes de construirlo con imágenes realistas y modelos detallados."
    }
];

export const ServicesSection = () => {
    return (
        <section aria-labelledby="our-services"
            className="flex items-center justify-center bg-surface-cran-25 px-4 md:px-6 lg:px-24 xl:px-32 w-full py-28 md:py-32 xl:py-40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Servicios
                        <span className="text-red-800 bg-clip-text"> que ofrecemos</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Soluciones completas desde el concepto hasta la ejecución,
                        con enfoque en resultados superadores y experiencias excepcionales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="p-8 border-[1.8px] border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-100">
                                    <service.icon className="h-6 w-6 " style={{ color: iconColors[index] }} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-black/75">{service.description}</p>
                            </div>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}