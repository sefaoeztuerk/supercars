import React from 'react'
import { Car } from '../../../../../lib/types/types'

type Props = {car:Car}

export default function Card({car}: Props ){
    return(
        <div className="bg-blue-500 border p-4">
            <h2>{car.name}</h2>
            <div>{car.color}</div>
        </div>
    )
}