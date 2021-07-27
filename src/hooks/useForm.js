import { useState } from "react"

const useForm = (initialState = {}) => {

    const [dataForm, setDataForm] = useState(initialState)

    const handleChangeInput = ({target}) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setDataForm(initialState)
    }

    const handleChangeForm = (data) => {
        setDataForm({
            ...dataForm,
            ...data
        })
    }

    return [dataForm, handleChangeInput, handleChangeForm, reset]
}

export default useForm
