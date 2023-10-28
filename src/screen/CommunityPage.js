import React, { useState } from "react";
import "../css/reset.css";
import "../css/common.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import Searchbar from "../components/Searchbar";
import Shoe from '../shoes/shoe_green.png';
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Paging = () => {
    const [page, setPage] = useState(1);
    const handlePageChange = page => {setPage(page);};
    return (
        <PaginationBox>
        <Pagination
            activePage={page}
            itemsCountPerPage={2}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={handlePageChange}/>
            </PaginationBox>
    )
};

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`

function CommunityPage(){
    
    

    return(
        <div className="Page">
            <Header />
            <div className="content">
                <Searchbar />
                <ItemList />
            </div>
            <Paging />
            <Footer />
        </div>

    )
}

export default CommunityPage;    