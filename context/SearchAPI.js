import React, { createContext , useContext, useState } from 'react'

export const SearchAPIContext = createContext();
let api_key = "AIzaSyAK3o9hZNDKxPNWjtvPUSIn5UiCLs72mnc"

function SearchAPI(props) {
    const [value, setValue] = useState()
    const [data, setData] = useState([])
    let urltest = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&eventType=live&q=${value}&type=video&key=${api_key}`

    const fetchSearch = async () => {
        try{
            // const resp = await fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=42&location?${lat},${long}&locationRadius?${radius}&eventType=live&q=church&type=video&key=${api_key}`)
            const resp = await fetch(urltest)
            const data = await resp.json()
            setData(data)
        }catch(e){
            console.log(e, "<=====e from search Context")
        }
    }

    return (
        <SearchAPIContext.Provider value={{ setData, data, value, setValue, fetchSearch }}>
            {props.children}
        </SearchAPIContext.Provider>
    )
}

export default SearchAPI
