'use client'

import { Game } from "@/models/product"
import { fetcher } from "@/utils/utils"
import useSWR from "swr"

import GameItemComponent from "../../../components/store/product_item"


export default function GamesComponent() {
    const { data, error, isLoading } = useSWR<Game[], Error>('/api/games', fetcher)
    
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data === undefined) return <div>failed to load</div>

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((game) => (
        <div key={game.id} className="transform transition-all duration-300 hover:scale-105">
            <GameItemComponent game={game}/>
        </div>
    ))}
</div>
}

