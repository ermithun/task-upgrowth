import React, { useState } from "react";
import axios from "axios";
import { config } from "../assets/config";

export const Photo = () => {
  const [searchInput, setSearchInput] = useState("");
  const [photoData, setPhotoData] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`${config.baseUrl}&query=${searchInput}`).then((res) => {
      setPhotoData(res.data.results);
    });
  };
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Photo Galary</h2>

          <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            className="form-control"
            value={searchInput}
          />
          <button
            class="btn btn-secondary"
            type="button"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
        <div id="row">
          {photoData
            ? photoData.map((d, i) => (
                <div key={i} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.urls.small} alt="..." className="team-img" />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
