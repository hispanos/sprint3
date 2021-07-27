import React, { useEffect, useState } from 'react'

const Pagination = ({setPagination, pagination, data}) => {

    const handlePag = (number) => {
        setPagination({
            start: (number * 10) - 10,
            end: number * 10
        })
    }

    const handlePage = (page) => {
        if (page === 'prev' && pagination.start !== 0) {
            setPagination({
                start: pagination.start - 10,
                end: pagination.end - 10
            })
        }else if(page === 'next' && pagination.end !== data.length) {
            setPagination({
                start: pagination.start + 10,
                end: pagination.end + 10
            })
        }
    }

    const [items, setItems] = useState([]);
    const [navigation, setNavigation] = useState('')

    useEffect(() => {
        let n = Math.ceil(data.length / 10)
 
    }, [])

    return (
        <div className="d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example">
                <ul className="pagination">                
                    <li className="page-item"><span onClick={() => {handlePage('prev')}} className="page-link">Anterior</span></li>
                    <li className="page-item"><span onClick={() => {handlePag(1)}} className="page-link" href="#">1</span></li>
                    <li className="page-item"><span onClick={() => {handlePag(2)}} className="page-link" href="#">2</span></li>
                    <li className="page-item"><span onClick={() => {handlePag(3)}} className="page-link" href="#">3</span></li>
                    <li className="page-item"><span onClick={() => {handlePag(4)}} className="page-link" href="#">4</span></li>
                    <li className="page-item"><span onClick={() => {handlePage('next')}} className="page-link" href="#">Siguiente</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
