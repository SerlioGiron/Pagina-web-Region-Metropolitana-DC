import { Noticias } from "../../components/Noticias";
import { CarouselDefault } from "../../components/Carousel";
import { StickyNavbar } from "../../components/StickyNavbar";
import { Preguntas } from "../../components/Preguntas";
import { FooterWithSocialLinks } from '../../components/Footer';
import { DescargasTab } from "../../components/Descargas";

export default function Marco_Normativo() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <CarouselDefault />
            <Noticias />
            <DescargasTab />
            <Preguntas />
            <FooterWithSocialLinks />
        </div>
    );
}
