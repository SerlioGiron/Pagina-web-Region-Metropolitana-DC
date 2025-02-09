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
    const content = noticia.content.slice(0, 500);
    const truncatedContent = content.concat("...");
    return (
      <Card className="rounded-none h-full w-full flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-none"
        >
          <img
            src={noticia.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {noticia.title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {truncatedContent}
          </Typography>
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
        </CardBody>
      </Card>
    );
  }