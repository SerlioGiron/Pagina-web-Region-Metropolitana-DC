"use client";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel, CardFooter} from "../app/MTailwind";
import {Card, CardHeader, CardBody, Typography, Button} from "../app/MTailwind";

const handleDownload = async (fileUrl, fileName) => {
    try {
      // For files stored on your server or public URL
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'document'; // Default filename if none provided
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Handle error - you might want to show a notification to the user
    }
}

export function DescargasTab() {
    const data = [
        {
            label: "Acuerdos",
            value: "acuerdos",
            cards: [
                {
                    title: "HTML Guide",
                    desc: "Learn the basics of HTML.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                    fileURL: "/documents/sample.pdf",
                },
            ],
        },
        {
            label: "Listados oficiales",
            value: "listados",
            cards: [
                {
                    title: "React Basics",
                    desc: "Learn how to get started with React.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "React Hooks",
                    desc: "Master the power of hooks in React.",
                    fileURL: "/documents/sample.pdf",
                },
            ],
        },
        {
            label: "Reglamentos",
            value: "reglamentos",
            cards: [
                {
                    title: "Vue Introduction",
                    desc: "Get started with Vue.js.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "Vue Directives",
                    desc: "Learn how to use directives in Vue.",
                    fileURL: "/documents/sample.pdf",
                },
            ],
        },
        {
            label: "Leyes",
            value: "leyes",
            cards: [
                {
                    title: "Angular Basics",
                    desc: "An introduction to Angular.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "Angular CLI",
                    desc: "Efficiently manage your Angular project.",
                    fileURL: "/documents/sample.pdf",
                },
            ],
        },
        {
            label: "Decretos",
            value: "decretos",
            cards: [
                {
                    title: "Svelte Overview",
                    desc: "Learn what makes Svelte unique.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "Svelte Stores",
                    desc: "Manage your state effectively with stores.",
                    fileURL: "/documents/sample.pdf",
                },
                {
                    title: "Svelte Stores",
                    desc: "Manage your state effectively with stores.",
                    fileURL: "/documents/sample.pdf",
                },
            ],
        },
    ];


    

    return (
        <Tabs value="html" className="pt-12 pb-12 max-w-[900px] mx-auto">
            <TabsHeader
            className="bg-transparent p-0 flex-wrap sm:flex-nowrap overflow-x-auto"
            indicatorProps={{
                className: "bg-gray-900/10 shadow-none !text-gray-900",
            }}
            >
            {data.map(({ label, value }) => (
                <Tab
                key={value}
                value={value}
                className="min-w-max px-4 py-2 text-sm sm:text-base whitespace-nowrap"
                >
                {label}
                </Tab>
            ))}
            </TabsHeader>
            <TabsBody  >
                {data.map(({value, cards}) => (
                    <TabPanel
                        key={value}
                        value={value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {cards.map((card, index) => (
                            <Card className="mt-6 w-96"  >
                                <CardBody  >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2">
                                        {card.title}
                                    </Typography>
                                    <Typography  >
                                        {card.desc}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0"  >
                                    <Button onClick={() => handleDownload(card.fileURL, "hola")} >Descargar</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
