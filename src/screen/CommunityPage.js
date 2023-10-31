import React, { useState } from "react";
import "../css/reset.css";
import "../css/common.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import Searchbar from "../components/Searchbar";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Paging = () => {
    const [page, setPage] = useState(1);
    const handlePageChange = page => {setPage(page);};
    return (
        <PaginationBox>
        <Pagination
            activePage={page}
            itemsCountPerPage={1}
            totalItemsCount={5}
            pageRangeDisplayed={5}
            onChange={handlePageChange}/>
            </PaginationBox>
    )
};

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding-top: 10%; }
  ul.pagination li {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: var(--mainColor);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem; 
  }
  ul.pagination li { border-radius: 50%; }
  ul.pagination li a { text-decoration: none; color: var(--pointColor); font-size: 3rem; }
  ul.pagination li.active a { color: black; }
  ul.pagination li.active { background-color: var(--pointColor);}
  ul.pagination li a:hover,
  ul.pagination li a.active { font-size: 4rem;}
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