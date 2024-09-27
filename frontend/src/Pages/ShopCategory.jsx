import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import './CSS/Pagination.css'; 
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { backend_url } from "../App";
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [indexShow, setIndexShow]= useState(0);


  const fetchInfo = () => {
    fetch(`${backend_url}/allproducts/${props.category}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    setAllProducts([]);
    fetchInfo();
  }, [props.category]);
  useEffect(() => {
    setCurrentData([])
    if (allproducts.length > 0) {
      setCurrentData(allproducts.slice(0, itemsPerPage)); 
    }
  }, [allproducts]); 
  
  const itemsPerPage = 8; 
  const pageCount = Math.ceil(allproducts.length / itemsPerPage);
  const handlePageChange = (selectedPage) => {
    setCurrentData([])
    let startIndex = selectedPage.selected * itemsPerPage;
    setIndexShow(startIndex);
    const endIndex = startIndex + itemsPerPage > allproducts.length ? allproducts.length : startIndex + itemsPerPage;
    setCurrentData(allproducts.slice(startIndex, endIndex));
  };

  

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort flex items-center">
        <p>
          <span>
            Showing {indexShow + 1 } - {indexShow + 8}
          </span>{" "}
          out of {allproducts.length} Products
        </p>
        <ReactPaginate
        nextLabel={<FaChevronRight />} // Thay thế bằng icon
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel={<FaChevronLeft />} // Thay thế bằng icon
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        />
        <div className="shopcategory-sort w-32 flex items-center gap-4">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 w-">
        {currentData.length === 0
          ? ""
          : currentData.map((item, i) => {
              return (
                <Item
                  delay={i * 200}
                  id={item._id}
                  key={i}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
      </div>
      <div className="shopcategory-loadmore hover:bg-[#EB423F] hover:text-white hover:border-white transition duration-200 cursor-pointer">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
