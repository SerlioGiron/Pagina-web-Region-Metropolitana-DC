import React from "react";
import {Button, Input, Textarea, Typography} from "@material-tailwind/react";

export function ContactSection14() {
    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                <img
                    src="/assets/direccion-marco.jpg"
                    alt="map"
                    className="w-full h-full lg:max-h-[510px]"
                />
                <div className="w-full h-[400px] lg:h-[510px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3869.655152021599!2d-87.2053601249034!3d14.097522986331336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA1JzUxLjEiTiA4N8KwMTInMTAuMCJX!5e0!3m2!1ses-419!2shn!4v1743443866783!5m2!1ses-419!2shn"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-2">
                {/* <Typography className="font-medium !text-lg !text-gray-800">
                        <span className="font-bold">
                            Correo del Departamento:
                        </span>{" "}
                        dvmn.rsmtegucigalpa@gmail.com
                    </Typography>
                    <Typography className="font-medium !text-lg !text-gray-800">
                        <span className="font-bold">Teléfono:</span> 2232-1139,
                        2232-1685
                    </Typography> */}
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
                                dvmn.rsmtegucigalpa@gmail.com
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
                                2232-1139, 2232-1685
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
                                Departamento de Vigilancia del Marco Normativo,
                                Región Sanitaria Metropolitana, Tegucigalpa
                            </Typography>
                        </div>
                    </div>

                    {/* <div>
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
                                    Lunes a Viernes: 8:00 AM - 4:00 PM
                                </Typography>
                            </div>
                        </div> */}

                    <Button
                        className="w-full mt-2"
                        color="gray"
                        onClick={() =>
                            (window.location.href =
                                "mailto:dvmn.rsmtegucigalpa@gmail.com")
                        }
                    >
                        Enviar correo
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection14;
