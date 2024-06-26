import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificItem = () => {
  const { productId } = useParams();
  const { isError, isLoading, data } = useGetProductByIdQuery(productId);
  if (isError) {
    return <h1>Some error occured</h1>;
  }
  if (isLoading) {
    return <h1> Loading ... Please wait ...</h1>;
  }
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h3>${data.price}</h3>
    </div>
  );
};

export default SpecificItem;
