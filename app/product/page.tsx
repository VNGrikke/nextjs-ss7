"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParam = useSearchParams();
    console.log(searchParam);
    const idProduct = searchParam.get('id');
    const nameProduct = searchParam.get('name');
    console.log(idProduct);
    console.log(nameProduct);
    
    
  return (
    <div>Trang san pham
        <h1>ID: {idProduct}</h1>
        <h1>Name: {nameProduct}</h1>
    </div>
  )
}
