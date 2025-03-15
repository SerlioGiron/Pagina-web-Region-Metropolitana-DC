"use client";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    CardFooter,
} from "../app/MTailwind";
import {Card, CardHeader, CardBody, Typography, Button} from "../app/MTailwind";

const handleDownload = async (fileUrl, fileName) => {
    try {
        // For files stored on your server or public URL
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "document"; // Default filename if none provided

        // Append to document, click, and cleanup
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Release the blob URL
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Download failed:", error);
        // Handle error - you might want to show a notification to the user
    }
};

export function DescargasTab({data}) {
    

    return (
        <Tabs value="acuerdos" className="pt-12 pb-12 max-w-[900px] mx-auto">
            <TabsHeader
                className="bg-transparent p-0 flex-wrap sm:flex-nowrap overflow-x-auto"
                indicatorProps={{
                    className: "bg-gray-900/10 shadow-none !text-gray-900",
                }}
            >
                {data.map(({label, value}) => (
                    <Tab
                        key={value}
                        value={value}
                        className="min-w-max px-4 py-2 text-sm sm:text-base whitespace-nowrap"
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({value, cards}) => (
                    <TabPanel
                        key={value}
                        value={value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {cards.map((card, index) => (
                            <Card
                                key={`${value}-${index}`}
                                className="mt-6 w-full"
                            >
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2"
                                    >
                                        {card.title}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button
                                        onClick={() =>
                                            handleDownload(
                                                card.fileURL,
                                                card.title
                                            )
                                        }
                                    >
                                        Descargar
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
