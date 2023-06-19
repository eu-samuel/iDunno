// import { useState } from "react";
// import { requestArtists, requestAlbums, requestTracks } from './Requests';

// const [search1, setSearch1] = useState("")
// const [search2, setSearch2] = useState("")
// const [search3, setSearch3] = useState("")

// const [artists, setArtists] = useState("")
// const [tracks, setTracks] = useState("")
// const [albums, setAlbums] = useState("")

// const [isLoading1, setIsLoading1] = useState(false)
// const [isLoading2, setIsLoading2] = useState(false)
// const [isLoading3, setIsLoading3] = useState(false)

// const handleEnter1 = (e) => {
//   if (e.key === 'Enter') { requestArtists(search1, setArtists, setSearch1, setIsLoading1) }
// }

// const handleEnter2 = (e) => {
//   if (e.key === 'Enter') { requestAlbums(search2, setAlbums, setSearch2, setIsLoading2) }
// }

// const handleEnter3 = (e) => {
//   if (e.key === 'Enter') { requestTracks(search3, setTracks, setSearch3, setIsLoading3) }
// }

// export const searches = [search1, setSearch1, search2, setSearch2, search3, setSearch3]
// export const content = [artists, setArtists, albums, setAlbums, tracks, setTracks]
// export const loaders = [isLoading1, setIsLoading1, isLoading2, setIsLoading2, isLoading3, setIsLoading3]
// export const handlers = [handleEnter1, handleEnter2, handleEnter3]