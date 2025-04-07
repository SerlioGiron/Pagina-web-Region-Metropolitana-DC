'use client';
import { StickyNavbar } from "@/components/StickyNavbar";
import { FooterWithSocialLinks } from "@/components/Footer";
import { NavbarSimple } from "@/components/NavbarMarco";
import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            <StickyNavbar />
            <NavbarSimple />
            <div className="container mx-auto px-4 py-8">
                {/* Encabezado principal */}
                <div className="mb-10 text-center">
                    <Typography
                        variant="h1"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4"
                    >
                        Organigrama del Departamento de Vigilancia del Marco Normativo
                    </Typography>
                    <div className="flex justify-center">
                        <img 
                            src="/assets/organigrama-marco.jpg" 
                            alt="Organigrama del Departamento de Vigilancia del Marco Normativo" 
                            className="max-w-full h-auto shadow-lg rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <FooterWithSocialLinks />
        </div>
    );
}