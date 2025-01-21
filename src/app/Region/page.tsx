import { Noticias } from "../../components/Noticias";
import { CarouselDefault } from "../../components/Carousel";
import { StickyNavbar } from "../../components/StickyNavbar";
import { FooterWithSocialLinks } from '../../components/Footer';
import { Establecimientos } from '../../components/Establecimientos';
import { Galeria } from "../../components/Galeria";

export default function Region() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <CarouselDefault />
            <Establecimientos />
            <Noticias />
            <Galeria />
            <FooterWithSocialLinks />
        </div>
    );
}
