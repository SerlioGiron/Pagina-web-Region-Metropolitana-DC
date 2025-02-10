'use client';
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "../app/MTailwind";
   
export function HorizontalCard({ noticia }) {
    // Adjust content length based on screen size
    const getContent = () => {
        const content = noticia.content;
        // Use a shorter excerpt for mobile
        const mobileLength = 150;
        // Desktop length remains the same
        const desktopLength = 500;
        
        return {
            mobile: content.slice(0, mobileLength).concat("..."),
            desktop: content.slice(0, desktopLength).concat("...")
        };
    };

    const truncatedContent = getContent();

    return (
        <Card className="rounded-none w-full">
            {/* Make card stack vertically on mobile screens */}
            <div className="flex flex-col lg:flex-row">
                {/* Added max-h-96 to limit image height and relative positioning for image container */}
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="relative m-0 w-full lg:w-2/5 shrink-0 rounded-none h-48 lg:h-96 max-h-96 overflow-hidden"
                >
                    <img
                        src={noticia.image}
                        alt="card-image"
                        className="absolute top-0 left-0 h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="flex flex-col h-full">
                    <Typography variant="h6" color="gray" className="mb-2 lg:mb-4 uppercase">
                        startups
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {noticia.title}
                    </Typography>
                    {/* Show different content lengths based on screen size */}
                    <div className="hidden lg:block">
                        <Typography color="gray" className="mb-4 font-normal">
                            {truncatedContent.desktop}
                        </Typography>
                    </div>
                    <div className="lg:hidden">
                        <Typography color="gray" className="mb-4 font-normal">
                            {truncatedContent.mobile}
                        </Typography>
                    </div>
                    {/* Push button to bottom of card */}
                    <div className="mt-auto">
                        <Link href={`/Blog-page?id=${noticia.id}`} className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Saber Mas
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </CardBody>
            </div>
        </Card>
    );
}