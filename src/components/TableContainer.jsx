import React from 'react'
import useFetch from '../hooks/useFetch'
import { URL } from '../utils/constants'
import Table from './Table';

const TableContainer = () => {
   const{isLoading,error,data}= useFetch(URL);

   if(!error&&isLoading){
    return <h1>Loading....</h1>
   }
   if(!isLoading&&error){
    return <h1>Something went wrong</h1>
   }

   console.log(isLoading,error,data)
  return (
    <>
    <Table data={data}/>
      
    </>
  )
}

export default TableContainer
