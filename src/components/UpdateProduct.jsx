import React from "react";
import { useUpdatedProductMutation } from "../app/service/dummyData";
const UpdateProduct = () => {
  const [updateProduct, { data, isLoading, isError, isSuccess }] =
    useUpdatedProductMutation();
  if (isError) {
    return <h1>Some error occured</h1>;
  }
  if (isLoading) {
    return <h1> Loading ... Please wait ...</h1>;
  }
  if (isSuccess) {
    return <h1>Updated successfully </h1>;
  }
  const handleUpdateItem = async () => {
    try {
        await updateProduct()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleUpdateItem} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
