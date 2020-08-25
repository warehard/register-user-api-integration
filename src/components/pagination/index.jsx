import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const Pagination = ({className, pageInitial ,setPageInitial, pageFinal ,setPageFinal, data, previousIcon, nextIcon, pageLimit}) => {

    const [page, setPage] = useState(1)
    const [initialSlice, setInitialSlice] = useState(1)
		const [lastSlice, setLastSlice] = useState(5)
		const location = useLocation()
		const history = useHistory()

    let totalPages = data.length / pageLimit
    if (totalPages % 1 !== 0) {
        totalPages = Math.floor(totalPages += 1)
    }

    const pageArr = []

    for (let i = 1; i <= totalPages; i++) {
        pageArr.push(i)
    }   
    
    const handlePage = (currentPage) => {
        setPage(currentPage)
        setPageInitial((currentPage - 1) * pageLimit)
        setPageFinal(currentPage * pageLimit)
        if (currentPage === lastSlice - 1) {
            setInitialSlice(initialSlice + 1)
            setLastSlice(lastSlice + 1)
        }
        else if (currentPage === lastSlice) {
            setInitialSlice(initialSlice + 2)
            setLastSlice(lastSlice + 2)
        }
        else if (currentPage === lastSlice -2 && currentPage !== 2 && currentPage !== 3) {
            setInitialSlice(initialSlice -1)
            setLastSlice(lastSlice -1)
        }
        else if ( currentPage === lastSlice -3 && currentPage !== 2 && currentPage !== 3 ) {
            setInitialSlice(initialSlice - 2)
            setLastSlice(lastSlice - 2)
        }

				else if ( currentPage === 2 || currentPage === 3) {
					setInitialSlice(1)
					setLastSlice(5)
				}
				history.push(`/users/${currentPage}`)
				console.log(location.pathname)
    }
    
    return(
        <div className={className}>
            
            <button key={pageArr[0]} onClick={() => handlePage(pageArr[0])}>{pageArr[0]}</button>
            <p>...</p>
            {pageArr.slice(initialSlice,lastSlice).map((page) => <button key={page} onClick={() => handlePage(page)}>{page}</button>)}
            <p>...</p>
            <button key={totalPages} onClick={() => handlePage(totalPages)}>{totalPages}</button>

        </div>
    )
}

export default Pagination