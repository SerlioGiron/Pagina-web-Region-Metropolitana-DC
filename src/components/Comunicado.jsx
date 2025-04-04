import React, {useState} from "react";
import {Typography, Card, CardBody, CardFooter} from "@material-tailwind/react";
import {Dialog} from "../app/Departamentos/dialog";

export function ComunicadoPreview({titulo, imagenPreview, descripcionCorta}) {
    const [openDialog, setOpenDialog] = useState(false);

    // Contenido del dialog
    const comunicadoInfo = {
        title: titulo,
        descripcion: descripcionCorta,
        imagenes: ["/comunicado/imagen1.jpg", "/comunicado/imagen2.jpg"],
    };

    return (
        <>
            <Card className="h-[70vh] my-7 flex flex-row items-center justify-center gap-5 w-full mx-auto overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-shadow duration-300">                
                <div className="h-full  overflow-hidden">
                    <img
                        src={imagenPreview}
                        alt={titulo}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <CardBody>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 font-semibold"
                    >
                        {titulo}
                    </Typography>

                    <Typography className="text-gray-600 line-clamp-3">
                        {descripcionCorta}
                    </Typography>
                </CardBody>

                <CardFooter className="pt-0">
                    <button
                        onClick={() => setOpenDialog(true)}
                        className="rounded-md bg-[#68c5d7] py-2 px-4 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition-all"
                    >
                        Leer Más
                    </button>
                </CardFooter>
            </Card>

            {/* Dialog personalizado para mostrar las imágenes */}
            <ComunicadoDialog
                open={openDialog}
                setOpen={setOpenDialog}
                comunicado={comunicadoInfo}
            />
        </>
    );
}

// Componente de dialog personalizado para mostrar imágenes
function ComunicadoDialog({open, setOpen, comunicado}) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOpen(false)}
        >
            <div
                className="relative m-4 p-6 w-[95%] md:w-[85%] lg:w-3/5 max-w-[800px] max-h-[90vh] rounded-lg bg-white shadow-sm flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="pb-4 text-center text-xl"
                >
                    {comunicado.title || "Comunicado"}
                </Typography>

                <div className="relative border-t border-slate-200 p-4 leading-normal overflow-y-auto max-h-[70vh] flex flex-col items-center">
                    {comunicado.descripcion && (
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="mb-6 text-base whitespace-pre-line"
                        >
                            {comunicado.descripcion}
                        </Typography>
                    )}

                    {/* Contenedor de imágenes */}
                    <div className="w-full space-y-6">
                        {comunicado.imagenes.map((imagen, index) => (
                            <div
                                key={index}
                                className="w-full overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src={imagen}
                                    alt={`Comunicado imagen ${index + 1}`}
                                    className="w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end border-t border-slate-200 mt-2">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-md bg-[#68c5d7] py-2 px-4 text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-blue-700 ml-2"
                        type="button"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
