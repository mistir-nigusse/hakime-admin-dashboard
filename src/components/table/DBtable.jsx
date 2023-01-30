import React, {useState, useEffect, useMemo} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table"


import { GlobalFilter } from "../Filter"

 
const DBtable = (props) => {
  const columns =   useMemo(()=> props.columnName,[]);
  const data =  useMemo(()=> props.dataName,[])   
   

        const { getTableProps, 
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
      columns,
      data,
      initialState: {pageIndex : 0}
    },
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const { globalFilter,pageIndex,pageSize} = state
    return ( 
      <React.Fragment>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} className="table-auto border-spacing-3 border w-auto">
        <thead className="border-spacing-3 border">
            {headerGroups.map((headerGroup)=>(
                 <tr  {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                    <th className="border-spacing-3 border" {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ?  " " : (<FontAwesomeIcon icon={faSort} />)}
                      </span>
                      </th> 
                 ))}
             </tr>
    ))}
           
        </thead>
        <tbody {...getTableBodyProps()} >
          {page.map(row => {
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                 {row.cells.map((cell)=>{
                  return <td className="border-spacing-3 border" {...cell.getCellProps}>{cell.render('Cell')}</td>
                 })}
              </tr>
            )
          })}
          
        </tbody>
      </table>
      <div className="pt-5">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1}  of {pageOptions.length}

          </strong>{' '}
        </span>
        <span> | Go to page: {' '} <input type="number" defaultValue={pageIndex +1}
        onChange={e =>{
          const pageNumber = e.target.value? Number(e.target.value) - 1 :0
           gotoPage(pageNumber)
        }}
        style={{width: '50px', height: '5px'}}
        /></span>
        <select  value={pageSize} onChange={(e)=> setPageSize(Number(e.target.value))}>
          {[10,25,50].map((pageSize)=>(
            <option key={pageSize} value={pageSize}>
              show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={()=> gotoPage(0)} disabled = {!canPreviousPage}>{"<<"}</button>
        <button onClick ={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick ={()=> nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=> gotoPage(pageCount - 1)} disabled = {!canNextPage}>{">>"}</button>

      </div>
    </React.Fragment> 
    );
};

export default DBtable;