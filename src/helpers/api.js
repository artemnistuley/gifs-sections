const getGifsFromApi = async ({ search = "", page = 0 }) => {
    if ( ! search ) {
        return Promise.resolve([]);
    }

    const itemsPerPage = 5;

    await sleep();

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=IWOAcSeXSTjScxWSbDj6WDqSemSaMaZB&q=${search}&limit=${itemsPerPage}&offset=${
          (page - 1) * itemsPerPage
        }&rating=g&lang=en`
    );
  
    const json = await response.json();

    return json.data;
};
  
const sleep = async () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};

export default getGifsFromApi;
