import React from 'react'
import Card from '../compononents/ui/cars/Card'
import { Car } from '../../../lib/types/types'
import CarList from '../compononents/ui/cars/CarList';

type Props = {}


const cars: Car[] = [
    {
      name: "BMW",
      type: "X3",
      color: "Blue",
      motor: {
        serialNumber: 1234,
        hp: 361,
      },
    },
    {
      name: "Audi",
      type: "Q5",
      color: "Black",
      motor: {
        serialNumber: 5678,
        hp: 362,
      },
    },
    {
      name: "Mercedes",
      type: "GLC",
      color: "White",
      motor: {
        serialNumber: 9101,
        hp: 385,
      },
    },
    {
      name: "Tesla",
      type: "Model Y",
      color: "Red",
      motor: {
        serialNumber: 1121,
        hp: 450,
      },
    },
    {
      name: "Lexus",
      type: "RX",
      color: "Gray",
      motor: {
        serialNumber: 3141,
        hp: 349,
      },
    },
  ];

  console.log(cars);

export default function page({}: Props ){
    return(
        <div>
            <h1>Cars</h1>
           <CarList cars={cars} />
        </div>
    )
}