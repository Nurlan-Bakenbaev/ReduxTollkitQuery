import { useState } from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";
const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading, isSuccess }] =
    useAddNewProductMutation();
  const [newItem, setNewItem] = useState({ id: "", name: "", disc: "" });
  if (isError) {
    return <h1>Some error occured</h1>;
  }
  if (isLoading) {
    return <h1> Loading ... Please wait ...</h1>;
  }
  if (isSuccess) {
    return <h1>Posted successfully </h1>;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddItem = async () => {
    try {
      console.log("Adding item:", newItem);
      await addNewProduct(newItem);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Mutation data:", data);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="number"
        name="id"
        value={newItem.id}
        placeholder="Inter id"
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={newItem.name}
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        name="disc"
        id="disc"
        value={newItem.disc}
        placeholder="Description"
      />
      <button onClick={handleAddItem} disabled={isLoading}>
        Add item
      </button>
      <a href="/">Back</a>
    </div>
  );
};

export default AddNewProduct;
