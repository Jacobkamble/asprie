import React from 'react'

const Pagination = ({currentPage,goToPage,totalPage,pageSize}) => {
  return (
    <>
    <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
        <button disabled={currentPage===1} onClick={()=>{goToPage(currentPage-1)} }>Prev</button>
        {currentPage}
        <button disabled={currentPage===totalPage} onClick={()=>{goToPage(currentPage+1)} } >Next</button>
    </div>
     
    </>
  )
}

export default Pagination
