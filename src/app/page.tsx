import {Button} from "./MTailwind";
import Image from "next/image";
import {StickyNavbar} from "../components/StickyNavbar";
import {CarouselDefault} from "../components/Carousel";
import {HorizontalCard} from "../components/HorizontalCard";
import {FooterWithSocialLinks} from "../components/Footer";
import {Carousel} from "./MTailwind";

export default function Home() {
    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            
            <StickyNavbar />
            <CarouselDefault />
            <Carousel>
              <HorizontalCard />
              <HorizontalCard />
              <HorizontalCard />
            </Carousel>
            <FooterWithSocialLinks />
        </div>
    );
}
