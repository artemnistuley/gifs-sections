import React, { useState, useEffect } from "react";
import getGifsFromApi from "./api";

const SectionOne = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadGifs = async () => {
      setLoading(true);
      const gifs = await getGifsFromApi({ search, page });
      setGifs(gifs);
      setLoading(false);
    };
    loadGifs();
  }, [search, page]);

  return (
    <div className="section-one">
      <div>
        search:{" "}
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <br />
      {!!gifs.length && (
        <div>
          <div>
            Gifs ({loading ? "loading ..." : "loaded"}):
            {gifs.length && (
              <ul className="gifs">
                {gifs.map(g => (
                  <li key={g.id}>
                    <img alt="" src={g.images.original.url} />
                  </li>
                ))}
              </ul>
            )}
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
      )}
    </div>
  );
};

export default SectionOne;
