import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import moreIcon from '../../images/icons/more_horiz-black-18dp.svg'
const Pagination = ({className ,setPageInitial ,setPageFinal, data, pageLimit}) => {

    const pageArr = []
    const [initialSlice, setInitialSlice] = useState(1)
	const [lastSlice, setLastSlice] = useState(5)
	const history = useHistory()

    let totalPages = data.length / pageLimit
    if (totalPages % 1 !== 0) {
        totalPages = Math.floor(totalPages += 1)
    }

    

    for (let i = 1; i <= totalPages; i++) {
        pageArr.push(i)
    }   
    
    const handlePage = (currentPage) => {
        
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

	    else if ( currentPage === 2 || currentPage === 3 || currentPage === 1) {
			setInitialSlice(1)
			setLastSlice(5)
        }
        else if ( currentPage === totalPages) {
            setInitialSlice(totalPages -5)
            setLastSlice(totalPages -1)
        }
        
		history.push(`/users/${currentPage}`)
				
    }
    
    return(
        <div className={className}>
            
            <button key={pageArr[0]} onClick={() => handlePage(pageArr[0])}>{pageArr[0]}</button>
            {initialSlice !== 1 && <img src={moreIcon}/>}
            {pageArr.slice(initialSlice,lastSlice).map((page) => <button key={page} onClick={() => handlePage(page)}>{page}</button>)}
            <img src={moreIcon}/>
            <button key={totalPages} onClick={() => handlePage(totalPages)}>{totalPages}</button>

        </div>
    )
}

export default Pagination