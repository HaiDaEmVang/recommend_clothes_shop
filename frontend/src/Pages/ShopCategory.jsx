import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiChevronsLeft } from "react-icons/fi";
import ReactPaginate from 'react-paginate';
import "./CSS/ShopCategory.css";
import { backend_url } from "../App";
import './CSS/Pagination.css'; 
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [indexShow, setIndexShow]= useState(0);
  const [category, setCategory] = useState("Full products");


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
        <div className="group px-5 py-2 min-w-[200px] rounded-full border-black border-[1px] flex items-center justify-center cursor-pointer relative hover:bg-[#EB423F]/80 hover:border-white transition-all duration-200 shadow-md inset-0 after:content-[''] after:block after:w-full after:h-full after:absolute after:top-1/2 after:left-0">
          <p className="group-hover:text-white">{category}</p>
          <FiChevronsLeft className="ml-3 group-hover:-rotate-90 transition-all duration-200 text-lg group-hover:text-white" />

          <div className="absolute left-0 right-0 top-full p-2 rounded-lg mt-1 bg-white shadow-xl overflow-hidden hidden group-hover:block">
            <ul>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Full products")}>Full products</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Bag")}>Bag</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Shoes")}>Shoes</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Shirt")}>Shirt</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Watch")}>Watch</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 rounded-md mb-1" onClick={()=> setCategory("Pants")}>Pants</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 w-">
        {currentData.filter(item =>  (category === "Full products" ?  true : item.category === category)).length === 0
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
