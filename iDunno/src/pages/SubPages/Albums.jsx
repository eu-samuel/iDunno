import React from 'react';
import Boy from '../../Images/Characters/Boy.png'
import logo from '../../Images/Components/logo.png'
import { Page } from "../Style";
import { Logo } from '../../Styles/MainStyle';
import { Bar } from '../../Components/Bar/Bar';
import { Footer } from '../../Components/Footer/Footer';
import { AlbumsCase } from '../../Components/Showcases/AlbumsCase'
import { Search } from '../../Components/Bar/SearchBar';
import { useContent } from '../../States';
import { Loader } from '../../Components/Loader/Loader';
import { requestAlbums } from '../../Requests';

export const Albums = () => {

  const {search, setSearch, content, setContent, isLoading, setIsLoading} = useContent()

  return (
    <>
    <Bar/>

      <Page>
        <Logo><img src={logo} alt="idunno"/></Logo>
      <Search
        text="Busque seu álbum aqui"
        request={requestAlbums}
      />
      <div className="showcase">
            {isLoading ? <Loader/> : <AlbumsCase content = {content}/>}
      </div>
      
      </Page>
    
     <Footer/>
    </>
  );
};
