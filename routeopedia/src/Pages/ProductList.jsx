import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>
      ProductList
    </div>
  );
}

export default ProductList;
