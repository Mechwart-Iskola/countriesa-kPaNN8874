import { useEffect } from "react"

try {
    const response = await fetch("https://restcountries.com/v3.1/all")
    if (!response.ok) {
        throw new Error
    } 

    const data = await response.json()
    console.log(data)
} catch (error) {
    console.log(error)
    return null
}

export const useFetchCountries = async ()=>{
    useEffect(()=>{
        const Getcountries = async()=>{
            const data = await useFetchCountries()
        }},[])}