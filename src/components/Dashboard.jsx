import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Search';
import { getSearch } from '../store/actions';

const Dashboard = ({match, search, getSearch}) =>{
import SongContainer from "./SongContainer";
import SongOption from "./SongOption";


    const [currentSearch, setCurrentSearch] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [songSelected, setSongSelected] = useState('');
    const [songOptionSelected, setSongOptionSelected] = useState(false)

    // const testEvent = searchField =>{
    //     setCurrentSearch(searchField.value);
    // };

    useEffect(() => {
        getSearch();
    }, [getSearch])

    if (search.loading) return <h1>loading...</h1>

    return(
        <div className="dashboard-wrapper">
            <Search 
                type="music"
                placeholder="Search for a song"
                eventTimer="800"
                songList={search.songList}
                setSearchResult={setSearchResult}
                setSongOptionSelected={setSongOptionSelected}
                songOptionSelected={songOptionSelected}
            />

            <div className="song-option-container">
                { 
                    !songOptionSelected && searchResult.map((song, index) => 
                        <SongOption key={index} song={song} setSongSelected={setSongSelected} setSongOptionSelected={setSongOptionSelected} />)
                }
            </div>
            
            { songOptionSelected && <SongContainer song={songSelected} />}

            {/* <Route path={`${match.url}/profile`} render={ ()=>{
                // Display Profile Component
                return(<h2>Profile Component</h2>);
            }} /> */}

            <Route path={`${match.url}/songs`} render={ () =>{
                //Display Saved Songs Component
                return(<h2>Saved Songs Component</h2>);
            }} />
        </div>
    );
};

export default connect(({search}) => ({search}), { getSearch})(Dashboard);