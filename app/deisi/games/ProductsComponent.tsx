'use client'

import { Game } from "@/models/product"
import { fetcher } from "@/utils/utils"
import useSWR from "swr"

import GameItemComponent from "../../../components/store/product_item"

export default function GamesComponent() {
    const { data, error, isLoading } = useSWR<Game[], Error>('/api/games', fetcher)
    
    if (error) return (
        <div className="flex items-center justify-center p-8 text-red-500 rounded-lg bg-red-50 my-4">
            <p className="font-medium">Failed to load games. Please try again later.</p>
        </div>
    )
    
    if (isLoading) return (
        <div className="flex items-center justify-center p-8 animate-pulse">
            <div className="space-y-4 w-full max-w-4xl">
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                    ))}
                </div>
            </div>
        </div>
    )
    
    if (data === undefined) return (
        <div className="flex items-center justify-center p-8 text-amber-500 rounded-lg bg-amber-50 my-4">
            <p className="font-medium">No games available at this time.</p>
        </div>
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((game) => (
                    <div key={game.id} className="transform transition-all duration-300 hover:scale-105">
                        <GameItemComponent game={game}/>
                    </div>
                ))}
            </div>
        </div>
    )
}