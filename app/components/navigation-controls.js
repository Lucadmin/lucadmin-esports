"use client";
import React, { useState } from "react";
import NavBar from "@/app/components/nav-bar";
import MobileMenu from "@/app/components/mobile-menu";

const NavigationControls = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default NavigationControls;