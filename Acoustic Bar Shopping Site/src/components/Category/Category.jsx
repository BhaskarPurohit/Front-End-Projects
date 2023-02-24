import "./Category.scss";
import Products from "../Products/Products";
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Products innerPage={true} />
      </div>
      {/* <Products /> */}
    </div>
  );
};

export default Category;
