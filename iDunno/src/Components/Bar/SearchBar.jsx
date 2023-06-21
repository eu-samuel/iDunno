import { SearchBar } from "../Showcases/Styles"
import { useContent } from "../../States";
import { Input, Button } from "../../Styles/MainStyle";
import { BsTrash, BsSearch } from 'react-icons/bs'

  export const Search = (props) => {

    const {search, setSearch, content, setContent, isLoading, setIsLoading} = useContent()

    const clearStuff = () => {
        setSearch("")
        setContent("")
    }
    
    return (
        <SearchBar>
            <Input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder={props.text}
                // onKeyPress={(e) => handleEnter(e)}
            />
        <Button>
            <BsSearch/>
        </Button>
        <BsTrash id="clear" onClick={() => clearStuff()}/>
        </SearchBar>
    )
  }





