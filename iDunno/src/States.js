import { useState } from "react";

export const useContent = () => {

    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState([])

    return {search, setSearch, content, setContent, isLoading, setIsLoading}
}


const handleEnter1 = (e) => {
  if (e.key === 'Enter') { requestArtists(search, setArtists, setSearch, setIsLoading) }
}

const handleEnter2 = (e) => {
  if (e.key === 'Enter') { requestAlbums(search, setAlbums, setSearch, setIsLoading) }
}

const handleEnter3 = (e) => {
  if (e.key === 'Enter') { requestTracks(search, setTracks, setSearch, setIsLoading) }
}

