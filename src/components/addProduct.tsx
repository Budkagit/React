import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [vendorName, setVendorName] = useState("");
  const[vendorID,setVendorID]=useState("");
  const [longitude,setLongitude]=useState("");
  const [latitude,setLatitude]=useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    
    axios .post("http://localhost:4000/auth/addProduct", {

        name,
        price,
        vendor_name: vendorName,
        vendorID,
        longitude,
        latitude,
        rating,
        image,
        location,
      })
  
      .then((response) => {
        console.log(response.data);
        alert("Item added successfully!");
        navigate("/product")
      })
      .catch((error) => {
        console.error(error);
        alert("Error adding item. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Vendor Name:
        <input
          type="text"
          value={vendorName}
          onChange={(event) => setVendorName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Vendor ID:
        <input
          type="number"
          value={vendorID}
          onChange={(event) => setVendorID(event.target.value)}
        />
      </label>
      <br />
      <label>
        Longitude:
        <input
          type="number"
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
        />
      </label>
      <br />
      <label>
        latitude :
        <input
          type="number"
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <br />
      <label>
        location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
