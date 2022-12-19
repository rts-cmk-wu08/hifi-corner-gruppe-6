import "./ProductSpecifications.css"
const ProductSpecifications = (props) => {
  return (
    <>
      <h3>PRODUCT SPECIFICATIONS</h3>
      <div className="specTable">
        <ul className="specNames">
          <li>Watt:</li>
          <li>Dimensions:</li>
          <li>Weight:</li>
          <li>Power:</li>
          <li>Frequency:</li>
          <li>Distortion:</li>
        </ul>
        <ul className="specValues">
            <li>{props.product.general.pjat ? props.product.general.pjat : ""}</li>
        <li>{props.product.general.watt}</li>        
        <li>{props.product.general.dimensions}</li>        
        <li>{props.product.general.weight}</li>
          <li>{props.product.specifications.power}</li>
          <li>{props.product.specifications.frequency}</li>
          <li>{props.product.specifications.distortion}</li>
        </ul>
      </div>
    </>
  );
};

export default ProductSpecifications;
