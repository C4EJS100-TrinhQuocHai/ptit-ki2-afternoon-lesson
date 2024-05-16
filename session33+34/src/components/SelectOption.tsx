import React, { useState } from 'react'

export default function SelectOption() {
        const [select,setSelect]=useState<string>("")
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value);
    }
    console.log("giá trị được chọn",select);
    
    return (
        <div>
            SelectOption
            <select onChange={handleChange}>
                <option value="nam1">Nam</option>
                <option selected value="nữ1">Nữ</option>
                <option value="khác1">Khác</option>
            </select>
        </div>
    )
}
