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

    return <div className="mt-2 grid sm:grid-cols-2 gap-2">
        {data.map((game) => (
            <GameItemComponent key={game.id} game={game}/>
        ))}
    </div>
}

