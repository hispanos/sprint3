import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageMovie, Container } from './administrator-styles/AdministratorStyles';
import DataTables from './DataTables';
import Swal from 'sweetalert2'
import {Delete} from '../redux/actions/Movies'


const Administrator = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    const handleDelete = (movie) => {
        Swal.fire({
            title: `Estás seguro de eliminar ${movie.title} ?`,
            text: "Esta acción no es reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí Eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(Delete(movie.id)).then((response) => {
                    if (response) {
                        Swal.fire(
                            'Eliminado!',
                            'Tu archivo ha sido eliminado.',
                            'success'
                          )
                    }else{
                        Swal.fire(
                            'Oops!',
                            'Ha ocurrido un error al eliminar.',
                            'error'
                        )
                    }
                })
            }
        })
    }

    const columns = [
        {
            dataField: 'title',
            text: 'Nombre',
            sort: true
        },
        {
            dataField: 'release_date',
            text: 'Fecha de lanzamiento'
        },
        {
            dataField: 'poster_path',
            text: 'Póster',
            isDummyField: true,
            formatter: (cellContent, row) => {
                return (
                  <ImageMovie src={row?.image ? row?.image :`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt="Imagen" />
                );
            }
        },
        {
            dataField: 'edit',
            text: 'Acciones',
            isDummyField: true,
            formatter: (cellContent, row) => {
                return (
                    <>
                        <button className="btn btn-primary me-2">Editar</button>
                        <button onClick={() => {handleDelete(row)}} className="btn btn-danger m2-2">Eliminar</button>
                    </>
                );
            }
        }
    ]

    return (
        <Container>
            <DataTables columns={columns} data={movies} />
        </Container>
    )
}

export default Administrator
