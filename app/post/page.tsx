"use client"
import { useRouter } from 'next/navigation';
import React, { use } from 'react'
import { useState } from 'react';

export default function page() {
    const [inputValue, setInputValue] = useState('');
    const route = useRouter();
    const [search, setSearch] = useState('');
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputValue(value);

    }
    const handleClick = () => {
        route.push(`/post?search=${inputValue}`);
        setSearch(inputValue);
    }
    return (
        <div>
            <input type="text" onChange={handleChangeInput} />
            <button onClick={handleClick}>Tim kiem</button>
            <div>search value: {search}</div>
        </div>
    )
}
