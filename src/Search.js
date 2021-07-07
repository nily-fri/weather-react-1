import React from "react";

export default function Search() {
  return (
    <div>
      <div className="search-city">
        <form>
          <div>
            <input type="search" placeholder="Location" />
          </div>
          <div>
            <input
              type="image"
              src="https://static.thenounproject.com/png/197410-200.png"
              alt="submit"
              className="search-engine"
              width="20px"
            />
            <input
              type="image"
              src="https://www.iconpacks.net/icons/2/free-location-pin-icon-2964-thumb.png"
              alt="pin"
              width="20px"
              className="pin-icon"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
