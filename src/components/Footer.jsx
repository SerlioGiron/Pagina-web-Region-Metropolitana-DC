import {Typography} from "@material-tailwind/react";
const links = [{name:"Inicio", link:"/"}, {name:"Sobre Nosotros", link:"/SobreNosotros"}, {name:"Departamentos y unidades", link:"/Departamentos"}, {name:"Establecimientos de Salud", link:"/Establecimientos"}];
const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
    return (
        <footer className="px-8 py-20">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {links.map((link, index) => (
                        <ul key={index}>
                            <li>
                                <Typography
                                    as="a"
                                    href={link.link}
                                    color="white"
                                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                                >
                                    {link.name}
                                </Typography>
                            </li>
                        </ul>
                    ))}
                </div>
                <Typography
                    color="blue-gray"
                    className="mt-6 !text-sm !font-normal text-gray-500"
                >
                    Copyright &copy; {currentYear} Serlio Giron
                </Typography>
            </div>
        </footer>
    );
}
export default FooterWithSocialLinks;
