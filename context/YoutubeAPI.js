import React, { createContext , useContext , useEffect, useState } from 'react'

export const YoutubeAPIContext = createContext();

let lat = "39.5501"
let long = "105.7821"
let radius = "621.37mi"
let api_key = "AIzaSyAK3o9hZNDKxPNWjtvPUSIn5UiCLs72mnc"

function YoutubeAPI(props) {
    const [api, setApi] = useState()
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()

    const fetchingLiveVideos = async () => {
        console.log("<--------hitting the fetch request")
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=42&location?${lat},${long}&locationRadius?${radius}&eventType=live&q=church&type=video&key=${api_key}`)
            const data = await response.json()
            // console.log(data, "<--------------data?")
            setNextPage(data.nextPageToken)
            setApi(data.items)
        } catch(e) {
            console.log(e, "<==if error")
        }
    }

    const handleNextPage = async (next) => {
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?pageToken=${next}&part=snippet&maxResults=42&location?${lat},${long}&locationRadius?${radius}&eventType=live&q=church&type=video&key=${api_key}`) 
            const data = await response.json()
            setNextPage(data.nextPageToken)
            setPrevPage(data.prevPageToken)
            setApi(data.items)
        }catch(e){
            console.log(e, "<----error")
        }
    }

    const handlePrevPage = async (prev) => {
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?pageToken=${prev}&part=snippet&maxResults=42&location?${lat},${long}&locationRadius?${radius}&eventType=live&q=church&type=video&key=${api_key}`) 
            const data = await response.json()
            setNextPage(data.nextPageToken)
            setPrevPage(data.prevPageToken)
            setApi(data.items)
        }catch(e){
            console.log(e, "<----error")
        }
    }

    useEffect(() => {
        fetchingLiveVideos()
    }, [])
    

    return (
        <YoutubeAPIContext.Provider value={{ api, setApi, nextPage, setNextPage, handleNextPage, handlePrevPage, prevPage, setPrevPage }}>
            {props.children}
        </YoutubeAPIContext.Provider>
    )
}

export default YoutubeAPI
