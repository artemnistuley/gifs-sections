import { useState, useEffect } from 'react';

import loadGifs from './load-gifs';
import getRandomString from './get-random-string';

const useGifsData = (random = false) => {
    const term = random ? getRandomString() : '';

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState(term);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadGifs(search, page, setLoading, setGifs);
    }, [search, page]);

    return {
        gifs,
        search,
        page,
        loading,
        setGifs,
        setSearch,
        setPage,
        setLoading,
    }
};

export default useGifsData;
