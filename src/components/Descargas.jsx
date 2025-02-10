"use client";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel, CardFooter} from "../app/MTailwind";
import {Card, CardHeader, CardBody, Typography, Button} from "../app/MTailwind";

export function DescargasTab() {
    const data = [
        {
            label: "Acuerdos",
            value: "acuerdos",
            cards: [
                {
                    title: "HTML Guide",
                    desc: "Learn the basics of HTML.",
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                    image: "https://via.placeholder.com/150",
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
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "React Hooks",
                    desc: "Master the power of hooks in React.",
                    image: "https://via.placeholder.com/150",
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
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "Vue Directives",
                    desc: "Learn how to use directives in Vue.",
                    image: "https://via.placeholder.com/150",
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
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "Angular CLI",
                    desc: "Efficiently manage your Angular project.",
                    image: "https://via.placeholder.com/150",
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
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "Svelte Stores",
                    desc: "Manage your state effectively with stores.",
                    image: "https://via.placeholder.com/150",
                },
                {
                    title: "Svelte Stores",
                    desc: "Manage your state effectively with stores.",
                    image: "https://via.placeholder.com/150",
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
                                    <Button  >Descargar</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
