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
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Sobre Nosotros
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Marco Juridico
                </a>
            </Typography>
            {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Tramites
        </a>
      </Typography> */}
            <Menu>
                <MenuHandler>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium cursor-pointer"
                    >
                        <span className="flex items-center hover:text-blue-500 transition-colors">
                            Tramites
                        </span>
                    </Typography>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        Constancia de Cumplimiento de Medidas Ambientales
                    </MenuItem>
                    <Menu
                        placement="right-start"
                        open={openMenu}
                        handler={setOpenMenu}
                        allowHover
                        offset={15}
                    >
                        <MenuHandler className="flex items-center justify-between">
                            <MenuItem>
                                Licencia Sanitaria
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                        openMenu ? "rotate-90" : ""
                                    }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Requisitos</MenuItem>
                        </MenuList>
                    </Menu>
                </MenuList>
            </Menu>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 transition-colors"
                >
                    Horarios de atencion
                </a>
            </Typography>
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
