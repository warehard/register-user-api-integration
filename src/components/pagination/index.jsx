import React, { useState } from 'react'

const Pagination = ({className, pageInitial ,setPageInitial, pageFinal ,setPageFinal, data}) => {

    const [page, setPage] = useState(1)

    let totalPages = data.length / 10
    if (totalPages % 1 !== 0) {
        totalPages = Math.floor(totalPages += 1)
    }

    const handlePrevious = () => {
        if (pageInitial >= 10 ){
            setPageInitial(pageInitial - 10)
            setPageFinal(pageFinal - 10)
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        if (page < totalPages) {
            setPageInitial(pageInitial + 10)
            setPageFinal(pageFinal + 10)
            setPage(page + 1)
        }
        
    }

    console.log(data.length / 10)
    return(
        <div className={className}>
            <button onClick={handlePrevious} className='previousButton'>&lt;</button>
            <div><p>Page {page}/{totalPages}</p></div>
            <button onClick={handleNext} className='nextButton'>&gt;</button>
        </div>
    )
}

export default Pagination