"use client";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {ChevronUpIcon} from "@heroicons/react/24/solid";

function NavList() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const handleMenuItemClick = (url) => {
        window.location.href = url;
    };

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold uppercase text-[#4cc7d7]"
            >
                <a
                    href="/Departamentos/Marco-Normativo"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Inicio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold uppercase text-[#4cc7d7]"
            >
                <a
                    href="/Departamentos/Marco-Normativo/sobre-nosotros"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Sobre Nosotros
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold uppercase text-[#4cc7d7]"
            >
                <a
                    href="/Departamentos/Marco-Normativo/unidades"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Unidades
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold uppercase text-[#4cc7d7]"
            >
                <a
                    href="/Departamentos/Marco-Normativo/marco-juridico"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Marco Jurídico
                </a>
            </Typography>
            <Menu>
                <MenuHandler>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-bold cursor-pointer uppercase text-[#4cc7d7]"
                    >
                        <span className="flex items-center hover:text-blue-500 transition-colors">
                            Trámites
                        </span>
                    </Typography>
                </MenuHandler>
                <MenuList>
                    <Menu
                        placement={isMobile ? "bottom-end" : "right-start"}
                        open={openMenu}
                        handler={setOpenMenu}
                        allowHover
                        offset={15}
                    >
                        <MenuHandler className="flex items-center justify-between uppercase text-[#4cc7d7]">
                            <MenuItem>
                                Licencia Sanitaria
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                        openMenu
                                            ? isMobile
                                                ? "rotate-180"
                                                : "rotate-90"
                                            : ""
                                    }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem
                                className="uppercase font-bold text-[#4cc7d7]"
                                onClick={() =>
                                    handleMenuItemClick(
                                        "/Departamentos/Marco-Normativo/licencia-sanitaria/Requisitos"
                                    )
                                }
                            >
                                Requisitos
                            </MenuItem>
                            <MenuItem
                                className="uppercase font-bold text-[#4cc7d7]"
                                onClick={() =>
                                    handleMenuItemClick(
                                        "/Departamentos/Marco-Normativo/licencia-sanitaria/estandares"
                                    )
                                }
                            >
                                Estándares
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu
                        placement={isMobile ? "bottom-end" : "right-start"}
                        open={openMenu2}
                        handler={setOpenMenu2}
                        allowHover
                        offset={15}
                    >
                        <MenuHandler className="flex items-center justify-between uppercase text-[#4cc7d7]">
                            <MenuItem>
                                Constancia de Cumplimiento de medidas
                                ambientales
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                        openMenu2
                                            ? isMobile
                                                ? "rotate-180"
                                                : "rotate-90"
                                            : ""
                                    }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem
                                className="uppercase font-bold text-[#4cc7d7]"
                                onClick={() =>
                                    window.open(
                                        "/medidas-ambientales/DVMNR-064, 2da.V., Requisitos de Constancia de Cumplimiento de Medidas Ambientales CC.pdf",
                                        "_blank"
                                    )
                                }
                            >
                                Requisitos
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </MenuList>
            </Menu>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="w-full px-6 py-3 items-center justify-center">
            <div className="flex items-center justify-center text-blue-gray-900">
                {/* <Typography
                as="a"
                href="#"
                variant="h6"
                className="mr-4 cursor-pointer py-1.5"
            >
                Material Tailwind
            </Typography> */}
                <div className="hidden lg:flex justify-center w-full">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="absolute right-6 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
