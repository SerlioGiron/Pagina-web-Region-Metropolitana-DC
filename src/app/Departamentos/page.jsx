"use client";

import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid";
import {units} from "./info";
import {Dialog} from "./dialog";
import {useState} from "react";
import {useRouter} from "next/navigation";

const UnitCard = ({title, link, descripcion, subsecciones, tipo}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        if (
            title ===
            "Departamento de Vigilancia del Marco Normativo"
        ) {
            router.push("/Departamentos/Marco-Normativo");
        } else {
            setOpen(true);
        }
    };

    return (
        <>
            <Card
                className="shadow-md rounded-xl cursor-pointer"
                onClick={handleClick}
            >
                <CardBody className="flex items-center space-x-4 p-4">
                    <div className="bg-[#68c5d7] p-3 rounded-full">
                        <BuildingOfficeIcon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        {title}
                    </h3>
                </CardBody>
            </Card>
            <Dialog
                open={open}
                setOpen={setOpen}
                title={title}
                link={link}
                descripcion={descripcion}
                subsecciones={subsecciones}
                tipo={tipo}
            />
        </>
    );
};

export default function Departamentos() {
    return (
        <div className=" items-center">
            <StickyNavbar />
            <Typography className="text-2xl font-bold text-gray-800 text-center pt-8">
                Departamentos y unidades
            </Typography>
            <div className="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {units.map((unit, index) => (
                    <UnitCard
                        key={index}
                        title={unit.name}
                        link={unit.link}
                        descripcion={unit.descripcion}
                        subsecciones={unit.subsecciones}
                        tipo={unit.tipo}
                    />
                ))}
            </div>
        </div>
    );
}
