import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../styles/table.css'
import AddFilm from './AddFilm';

const DataTables = ({data, columns}) => {

    const { SearchBar } = Search;

    return (
        <ToolkitProvider 
            bootstrap4 
            keyField="id" 
            data={ data }
            columns={ columns }
            search
        >
            {
                props => 
                <>
                <SearchBar 
                    { ...props.searchProps }
                    placeholder="Buscar algo"
                />
                <AddFilm />
                <BootstrapTable
                    { ...props.baseProps }
                    pagination={ paginationFactory() }
                    cellSpacing="0"
                    wrapperClasses="table-responsive"
                    classes="table-striped table-hover"
                />
                </>
            }
            
        </ToolkitProvider>
    )
}

export default DataTables
