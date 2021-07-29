import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listSearch, listSearchStore } from '../redux/actions/Movies'

const InputSearch = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const handleSearchChange = ({target}) => {
        setSearch(target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(listSearchStore(search))
    }
    return (
        <form onSubmit={submitSearch}>
            <input 
            type="text" 
            placeholder='Buscar peliculas'
            name='search'
            value={search}
            onChange={handleSearchChange}
            />
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default InputSearch
