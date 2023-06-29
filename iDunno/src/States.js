import { useState } from "react";
import { useColor } from "react-color-palette"

export const useContent = () => {

    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState([])

    const clearStuff = () => {
      setContent("")
      setSearch("")
    }

    return {search, setSearch, content, setContent, isLoading, setIsLoading, clearStuff}
}

export const useSettings  = () =>{

  const [amount, setAmount] = useState(50)
  const [color, setColor] = useColor("hex", "#16A347")

  return {amount, setAmount, color, setColor}

  } 




