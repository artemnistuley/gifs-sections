import React, { useState, useEffect } from "react";
import getGifsFromApi from "./api";

const SectionTwo = () => {
  const [randomSearch, setRandomSearch] = useState(getRandomString());
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadGifs = async () => {
      setLoading(true);
      const gifs = await getGifsFromApi({ search: randomSearch, page });
      setGifs(gifs);
      setLoading(false);
    };
    loadGifs();
  }, [randomSearch, page]);

  return (
    <div className="section-two">
      section two!{" "}
      {loading && (
        <img
          width="30"
          alt=""
          src="https://media1.tenor.com/images/6095fc8da2cbc3fe96ab197140505e69/tenor.gif"
        />
      )}
      <div>
        <p>current search: {randomSearch}</p>
        <button onClick={() => setRandomSearch(getRandomString())}>
          random search
        </button>
      </div>
      <div>
        <ul className="section-two-images">
          {gifs.map(g => (
            <li key={g.id}>
              <img alt="" src={g.images.original.url} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="pagination">
          <li
            className={page === 1 ? "active" : "nonactive"}
            onClick={() => setPage(1)}
          >
            1
          </li>
          <li
            className={page === 2 ? "active" : "nonactive"}
            onClick={() => setPage(2)}
          >
            2
          </li>
          <li
            className={page === 3 ? "active" : "nonactive"}
            onClick={() => setPage(3)}
          >
            3
          </li>
          <li
            className={page === 4 ? "active" : "nonactive"}
            onClick={() => setPage(4)}
          >
            4
          </li>
          <li
            className={page === 5 ? "active" : "nonactive"}
            onClick={() => setPage(5)}
          >
            5
          </li>
        </ul>
      </div>
    </div>
  );
};

const getRandomString = () => {
  const randomStrings = [
    "apple",
    "santa",
    "tesla",
    "fender",
    "gibson",
    "react",
    "angular",
    "banana",
    "developer",
    "geek",
    "laugh",
    "how about no"
  ];
  return randomStrings[Math.floor(Math.random() * randomStrings.length)];
};

export default SectionTwo;
