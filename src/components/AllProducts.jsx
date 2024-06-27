import { useNavigate } from "react-router";
import {
  useDeleteProductMutation,
  useGetAllproductsQuery,
} from "../app/service/dummyData";
import "../index.css";
const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllproductsQuery();
  const [
    deleteProduct,
    {
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleted,
    },
  ] = useDeleteProductMutation();

  const navigate = useNavigate();

  const handleItemClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleDeleteitem = async (itemId) => {
    try {
      deleteProduct(itemId).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  if (isError || isDeleteError) {
    return <h1>Some error occured</h1>;
  }
  if (isLoading || isDeleteLoading) {
    return <h1> Loading ... Please wait ...</h1>;
  }
  if (isDeleted) {
    return <h1> Item Deleted</h1>;
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>
        <a href="/product/addItem">Add A new Products</a>
      </h1>
      {data?.products.map((item, id) => (
        <div
          style={{
            width: "80%",
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
          key={id}
        >
          <h3 onClick={() => handleItemClick(item.id)}>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleDeleteitem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
