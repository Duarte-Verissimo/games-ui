'use client'
import GamesComponent from "./ProductsComponent";
import {  Gamepad2 } from 'lucide-react';

export default function DeisiGamePage() {
    return <div className="w-auto">
        <div className="mx-5 mb-10">
            <h2 className="text-6xl	font-bold text-center tracking-wide overline decoration-8 ">Games Library 2.0</h2>
            
            <h3 className="flex align-center  space-x-2 text-xl mt-5 font-bold text-center" id="products">
                <Gamepad2 className="h-6 w-6 inline-block mr-2" />
                Games
            </h3>
            <GamesComponent></GamesComponent>
        </div>
    </div >
} 