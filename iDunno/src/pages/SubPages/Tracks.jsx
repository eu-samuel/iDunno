import React from 'react';
import Boy from '../../Images/Characters/Boy.png'
import logo from '../../Images/Components/logo.png'

import { Page } from "../Style";
import { Logo } from '../../Styles/MainStyle';
import { Bar } from '../../Components/Bar/Bar';
import { Footer } from '../../Components/Footer/Footer';
import { TracksCase } from '../../Components/Showcases/TracksCase'
import { Search } from '../../Components/Bar/SearchBar';
import { Loader } from '../../Components/Loader/Loader';
import { useContent } from '../../States';
import { requestTracks } from '../../Requests';

export const Tracks = () => {

  const {search, setSearch, content, setContent, isLoading, setIsLoading} = useContent()

  return (
    <>
    <Bar/>

      <Page>
        <Logo><img src={logo} alt="idunno"/></Logo>
      <Search
        text="Busque sua música aqui"
        request={requestTracks}
      />
      <div className="showcase">
            {isLoading ? <Loader/> : <TracksCase content = {content}/>}
      </div>
      
      </Page>
    
     <Footer/>
    </>
  );
};
