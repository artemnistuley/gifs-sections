import getGifsFromApi from "./api";

const loadGifs = async (search, page, setLoading, setGifs) => {
    setLoading(true);
    
    const gifs = await getGifsFromApi({ search, page });

    setGifs(gifs);
    setLoading(false);
};

export default loadGifs;
