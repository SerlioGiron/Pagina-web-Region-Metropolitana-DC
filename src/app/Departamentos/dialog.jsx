import { Typography } from "@material-tailwind/react";
export function Dialog({
    open,
    setOpen,
    title,
    link,
    descripcion,
    subsecciones,
}) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOpen(false)}
        >
            <div
                className="relative m-2 md:m-4 p-3 md:p-6 w-[95%] md:w-[85%] lg:w-3/5 max-w-[800px] max-h-[95vh] md:max-h-[90vh] rounded-lg bg-white shadow-sm flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="pb-2 md:pb-4 text-center text-lg md:text-xl"
                >
                    {title || "Información de Departamento"}
                </Typography>
                <div className="relative border-t border-slate-200 p-2 md:p-4 leading-normal overflow-y-auto max-h-[70vh] md:max-h-[60vh] text-justify">
                    <Typography
                        variant="paragraph"
                        color="gray"
                        className="mb-3 text-sm md:text-base"
                    >
                        {descripcion || "No hay descripción disponible."}
                    </Typography>

                    {subsecciones && subsecciones.length > 0 && (
                        <div className="mt-3 md:mt-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 text-base md:text-lg"
                            >
                                Subsecciones
                            </Typography>
                            {subsecciones.map((subseccion, index) => (
                                <div key={index} className="mb-3">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium text-sm md:text-base"
                                    >
                                        {subseccion.nombre}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="mt-1 text-xs md:text-sm"
                                    >
                                        {subseccion.descripcion}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex shrink-0 flex-wrap items-center pt-2 md:pt-4 justify-end border-t border-slate-200 mt-2">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-md bg-[#68c5d7] py-1.5 md:py-2 px-3 md:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-blue-700 ml-2"
                        type="button"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
