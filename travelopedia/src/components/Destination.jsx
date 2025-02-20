import React, { useState } from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import { useUpdateDestinationMutation } from "../api/destinationApi";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [updateDestination] = useUpdateDestinationMutation();

  const handleUpdate = (destination) => {
    let city = "",
      country = "";

    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }

    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });
    setNewCity("");
    setNewCountry("");
    setIsUpdating();
  };

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                className="form-control"
                type="text"
                placeholder="city..."
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              />
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                className="form-control"
                type="text"
                placeholder="country..."
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              />
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-3">
        <button
          className="btn btn-warning m-1"
          onClick={() => {
            setIsUpdating(!isUpdating);
          }}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(destination)}
          >
            Update{" "}
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger m-1"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
