import React from 'react';

import useGifsData from '../../helpers/use-gifs-data';

import SearchField from '../search-field';
import GifsList from '../gifs-list';
import Pagination from '../pagination';

import './section-one.css';

const SectionOne = () => {
    const { 
        gifs, 
        search, 
        page, 
        loading, 
        setSearch, 
        setPage 
    } = useGifsData();

    return (
        <div className="section-one">
            <SearchField value={search} onSearchChange={setSearch} />

            <br />
            { !! gifs.length && (
                <div>
                    <div>
                        Gifs ({loading ? "loading ..." : "loaded"}):
                        {gifs.length && (
                            <GifsList gifs={gifs} />
                        )}
                    </div>
                    <Pagination pageCount={5} page={page} onSetPage={setPage} />
                </div>
            )}
        </div>
    );
};

export default SectionOne;
