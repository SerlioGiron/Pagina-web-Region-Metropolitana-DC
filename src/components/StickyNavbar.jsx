"use client";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Menu,
    MenuHandler,
    IconButton,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const [navHeight, setNavHeight] = React.useState("h-[10vh]");

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    React.useEffect(() => {
        if (openNav) {
            setNavHeight("h-auto min-h-[30vh]"); // Increase height more when menu is open
        } else {
            setNavHeight("h-[15vh]"); // Default height when menu is closed
        }
    }, [openNav]);

    const navList = (
        <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal uppercase font-bold text-[#005f6b]"
            >
                <a href="/" className="flex items-center">
                    Inicio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal uppercase font-bold text-[#005f6b]"
            >
                <a href="/SobreNosotros" className="flex items-center">
                    Sobre Nosotros
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal uppercase font-bold text-[#005f6b]"
            >
                <Link href="/Departamentos" className="flex items-center">
                    Departamentos y unidades
                </Link>
            </Typography>
            <Menu>
                <MenuHandler>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal uppercase font-bold cursor-pointer text-[#005f6b]"
                    >
                        <span className="flex items-center">
                            Establecimientos de Salud
                        </span>
                    </Typography>
                </MenuHandler>
                <MenuList>
                    <MenuItem onClick={() => window.location.href = "/Establecimientos/CIS"}>CIS</MenuItem>
                    <MenuItem onClick={() => window.location.href = "/Establecimientos/UAPS"}>UAPS</MenuItem>
                    <MenuItem onClick={() => window.location.href = "/Establecimientos/Redes"}>REDES</MenuItem>
                </MenuList>
            </Menu>
        </ul>
    );

    return (
        <Navbar
            className={`w-full sticky top-0 z-30 mx-auto rounded-none shadow-none transition-all duration-300 ${navHeight}`}
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                
                {/* Logo */}
                <a
                    href="/"
                    className="cursor-pointer flex items-center h-full"
                >
                    <img 
                        src="/assets/logo RSM-DC BG.png" 
                        alt="Región Sanitaria del Distrito Central" 
                        className="h-[10vh] w-auto object-contain max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
                    />
                </a>

                {/* Subtitulos */}
                <div className="hidden lg:flex justify-center w-full">
                    {navList}
                </div>

                {/* Redes Sociales */}
                <div className="hidden lg:flex gap-4 text-blue-gray-900 sm:justify-center">
                    <Typography
                        as="a"
                        href="https://www.facebook.com/RegionSanitariaMetropolitanaDC64/"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        <svg
                            className="h-5 w-5 text-[#005f6b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Typography>
                    <Typography
                        as="a"
                        href="https://www.instagram.com/region_metropolitanadc/"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        <svg
                            className="h-5 w-5 text-[#005f6b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Typography>
                    <Typography
                        as="a"
                        href="https://twitter.com/regionmetropol3"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        <svg
                            className="h-5 w-5 text-[#005f6b]"
                            xmlns="http://www.w3.org/2000/svg"
                            // shape-rendering="geometricPrecision"
                            // text-rendering="geometricPrecision"
                            // image-rendering="optimizeQuality"
                            fill="currentColor"
                            viewBox="0 0 512 462.799"
                        >
                            <path
                                fillRule="nonzero"
                                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                            />
                        </svg>
                    </Typography>
                    {/* tiktok */}
                    <Typography
                        as="a"
                        href="https://www.tiktok.com/@regionmetropolitanadc?_t=8c2PpgYEfFG&_r=1"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        <svg
                            className="h-5 w-5 text-[#005f6b]"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                        >
                            <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
                        </svg>
                    </Typography>
                    {/* youtube */}
                    <Typography
                        as="a"
                        href="https://youtube.com/@regionmetropolitanadc"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        <svg
                            className="h-5 w-5 text-[#005f6b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M21.582 7.15c-.239-1.007-.982-1.8-1.909-2.053C18.265 4.75 12 4.75 12 4.75s-6.264 0-7.673.347c-.927.254-1.67 1.046-1.909 2.053C2 8.621 2 12 2 12s0 3.379.418 4.85c.239 1.007.982 1.8 1.909 2.053C5.736 19.25 12 19.25 12 19.25s6.264 0 7.673-.347c.927-.254 1.67-1.046 1.909-2.053C22 15.379 22 12 22 12s0-3.379-.418-4.85zM9.955 14.955V9.045L15 12l-5.045 2.955z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Typography>
                </div>

                {/* En celular */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="flex justify-center py-4">{navList}</div>
            </Collapse>
        </Navbar>
    );
}
