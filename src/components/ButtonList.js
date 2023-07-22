import React from 'react';
import Button from './Button';
const ButtonList=()=>{
    const list=["All","Live","Gaming"]
    return (
        <div className='flex'>
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Live"/>
            <Button name="Soccer"/>
            <Button name="Cricket"/>
            <Button name="Cooking"/>
            <Button name="Songs"/>
            <Button name="Cricket"/>
            <Button name="Cricket"/>
        </div>
    )
}
export default ButtonList;