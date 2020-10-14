import React from 'react';

import useGifsData from '../../helpers/use-gifs-data';

import Loader from '../loader';
import RandomSearchButton from '../random-search-button';
import GifsList from '../gifs-list';
import Pagination from '../pagination';

import './section-two.css';

const SectionTwo = () => {
    const { 
        gifs, 
        search, 
        page, 
        loading, 
        setSearch, 
        setPage 
    } = useGifsData(true);

    return (
        <div className="section-two">
            section two!{" "}

            {loading && <Loader />}

            <RandomSearchButton currentSearch={search} onSetRandomSearch={setSearch} />

            { !! gifs.length && (
                <div>
                    <GifsList gifs={gifs} design="square" />
                    <Pagination pageCount={5} page={page} onSetPage={setPage} design="rounded" />
                </div>
            )}
        </div>
    );
};

export default SectionTwo;
