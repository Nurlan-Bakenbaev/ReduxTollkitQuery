import { useNavigate } from "react-router";
import { useGetAllproductsQuery } from "../app/service/dummyData";
import "../index.css";
const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllproductsQuery();

  const navigate = useNavigate();

  const handleItemClick = (productId) => {
    navigate(`/products/${productId}`);
  };
  if (isError) {
    return <h1>Some error occured</h1>;
  }
  if (isLoading) {
    return <h1> Loading ... Please wait ...</h1>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
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
          onClick={() => handleItemClick(item.id)}
          key={id}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
