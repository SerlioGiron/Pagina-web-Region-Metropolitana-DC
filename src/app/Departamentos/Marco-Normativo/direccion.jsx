import React from "react";
import {Button, Input, Textarea, Typography} from "@material-tailwind/react";
export function ContactSection14({
    direccion,
    telefono,
    correo,
    maps,
    foto,
    horario,
}) {
    console.log(foto);

    return (
        <section className="py-8 lg:py-8">
            <div className=" px-8 py-8 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start bg-[#68c5d7]">
                <img
                    src={foto}
                    alt="map"
                    className="h-full lg:max-h-[510px] justify-self-center"
                />
                <div className="w-full h-[400px] lg:h-[510px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src={maps}
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-2 px-8 lg:px-0">
                <div className="flex flex-col gap-4 lg:max-w-sm mx-auto">
                    <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-gray-900"
                        >
                            Correo del Departamento
                        </Typography>
                        <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
                            <Typography
                                variant="small"
                                className="text-left !text-gray-700"
                            >
                                {correo}
                            </Typography>
                        </div>
                    </div>

                    <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-gray-900"
                        >
                            Teléfonos
                        </Typography>
                        <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
                            <Typography
                                variant="small"
                                className="text-left !text-gray-700"
                            >
                                {telefono}
                            </Typography>
                        </div>
                    </div>

                    <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-gray-900"
                        >
                            Ubicación
                        </Typography>
                        <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
                            <Typography
                                variant="small"
                                className="text-left !text-gray-700"
                            >
                                {direccion}
                            </Typography>
                        </div>
                    </div>

                    <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-gray-900"
                        >
                            Horario de Atención
                        </Typography>
                        <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
                            <Typography
                                variant="small"
                                className="text-left !text-gray-700"
                            >
                                {horario}
                            </Typography>
                        </div>
                    </div>

                    <Button
                        className="w-full mt-2 bg-[#68c5d7]"
                        color="gray"
                        onClick={() =>
                            (window.location.href = `mailto:${correo}`)
                        }
                    >
                        Enviar correo
                    </Button>
                </div>
            </div>
        </section>
    );
}
