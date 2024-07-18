import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const tableHead = [
  { title: "Title" },
  { title: "Description" },
  { title: "Price" },
  { title: "Rating" },
  { title: "Stock" },
  { title: "Brand" },
  { title: "Category" },
];

const Table = ({ data }) => {

    const [currentPage,setCurrentPage]=useState(1);
    const [pageSize,setPageSize]=useState(10);
    const [totalPages,setTotalPage]=useState(data.length/pageSize);

    const [filterData,setFilterData]=useState([])

    const [title,setTitle]=useState("");
    const[isOpen,setIsOpen]=useState(false);

    const toggleTitle=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{

        const startIndex=(currentPage-1)*pageSize;
        const endIndex=startIndex+pageSize

      
      const res=  data.slice(startIndex,endIndex)
      setFilterData(res)

        console.log(res,"ressult")
        
        console.log(filterData,"filterDat")
    },[currentPage,pageSize])

    const goToPage=(pageNumeber)=>{
        setCurrentPage(pageNumeber)
    }

  
  

  return (
    <>
      <table style={{width:"95vw"}}>
        <caption>Custom Table</caption>
        <thead>
          <tr>
            {tableHead?.map((head) => {
              return (
                <th key={head.title} scope="col">
                  {head.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          { filterData?.map(
            ({
              id,
              title,
              description,
              brand,
              stock,
              category,
              price,
              rating,
            }) => {
              return (
                <tr key={id}>
                  <td onClick={()=>{setTitle(title);toggleTitle()}} scope="row">{title}</td>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>{rating}</td>
                  <td>{stock}</td>
                  <td>{brand}</td>
                  <td>{category}</td>
                </tr>
              );
            }
          )}

         
        </tbody>
        <tfoot>
          {/* <tr>
            <th scope="row" colspan="2">
              Average age
            </th>
            <td>33</td>
          </tr> */}
        </tfoot>
      </table>
      <dialog open={isOpen}>
        {title}
      </dialog>

      <Pagination currentPage={currentPage} goToPage={goToPage} totalPage={totalPages} pageSize={pageSize}/>
    </>
  );
};

export default Table;
