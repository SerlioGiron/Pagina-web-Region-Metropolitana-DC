"use client";
import {Noticias} from "../../components/Noticias";
import {CarouselDefault} from "../../components/Carousel";
import {StickyNavbar} from "../../components/StickyNavbar";
import {FooterWithSocialLinks} from "../../components/Footer";
import {Galeria} from "../../components/Galeria";

import {Card, CardBody, Typography} from "@material-tailwind/react";
import {GlobeAltIcon, LightBulbIcon} from "@heroicons/react/24/solid";

const Mision = () => {
    return (
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-blue-50">
            <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                    <GlobeAltIcon className="w-12 h-12 text-blue-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2"
                >
                    Misión
                </Typography>
                <Typography className="text-gray-600">
                    Nuestra misión es proporcionar servicios de salud accesibles
                    y de calidad, promoviendo el bienestar y la prevención de
                    enfermedades en nuestra comunidad.
                </Typography>
            </CardBody>
        </Card>
    );
};

const Vision = () => {
    return (
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-green-50">
            <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                    <LightBulbIcon className="w-12 h-12 text-green-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2"
                >
                    Visión
                </Typography>
                <Typography className="text-gray-600">
                    Ser una institución líder en el sector salud, reconocida por
                    su excelencia en la atención médica y su compromiso con la
                    innovación y la equidad.
                </Typography>
            </CardBody>
        </Card>
    );
};

export default function Region() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <CarouselDefault />
            <div className="flex flex-col md:flex-row gap-8 p-8 items-center justify-center">
                <Mision />
                <Vision />
            </div>
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <img
                    src="/assets/organigrama_page-0001.jpg"
                    alt="Organigrama"
                    className="w-full max-w-4xl object-contain"
                />
            </div>
            <FooterWithSocialLinks />
        </div>
    );
}
