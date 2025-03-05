import React from 'react';
import Link from "next/link";

type Props = {}

export default function Menu({}: Props ){
    return(
        <div>
            <ul>
            <Link href="/">Home</Link>
            </ul>
            <ul>
            <Link href="/cars">Cars</Link>
            </ul>
            <ul>
            <Link href="/trucks">Trucks</Link>
            </ul>
        </div>
    )
}