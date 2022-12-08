import { useQuery } from "react-query";
import axios from "axios";
import "./ProductDetails.css"

async function fetchDetails() {
  const { data } = await axios.get("http://localhost:4000/category");
  return data;
}

const ProductDetails = (props) => {
  const { data, error, isError, isLoading, isSuccess } = useQuery(
    "products",
    fetchDetails
  );
  let product = {};
  let productId = 11;
  if (props.id) productId = props.id;
  if (isSuccess) {
    product = data.cd_player.find((product) => product.id === productId);
    console.log(product);
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  if (isLoading) return <p>Loading...</p>;
  if (isSuccess)
    return (
        <main className="productDetails">
<header className="productDetailsHeader">
 <h1>PRODUCT</h1>

</header>
<section className="productDetailsImage">
{product.image.url}
</section>
<section className="productDetailsText">
{product.description}
</section>
<section className="productDetailsSpecs">
{product.specifications.power}
</section>
<section className="productDetailsCompare">
Nothing compares with {product.name}
</section>
        </main>
    );
};

export default ProductDetails;
