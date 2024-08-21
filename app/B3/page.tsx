"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
    
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const route = useRouter();

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
        if (inputName === 'input1') {
            setInputValue(event.target.value);
        } else if (inputName === 'input2') {
            setInputValue2(event.target.value);
        }
    }

    const handleClick = () => {
        route.push(`/B3?search=${inputValue}&search2=${inputValue2}`);
    }

    return (
        <div>
            <input type="text" onChange={(event) => handleChangeInput(event, 'input1')} /><br />
            <input type="text" onChange={(event) => handleChangeInput(event, 'input2')} /><br />
            <button onClick={handleClick}>Tim kiem</button>
        </div>
    )
}
