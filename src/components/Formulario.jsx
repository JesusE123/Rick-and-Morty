import React, {memo} from 'react'
import { useFormulario } from '../hooks/useFormulario'


const Formulario = memo(({setNombre}) => {

    const {inputs, handleChange, reset} = useFormulario({
        name: "",
    });

    
    const { name } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name?.trim()){
           return alert('el nombre esta vacio')
        }

        setNombre(name.trim())

        reset()

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Ingrese el Personaje'
                value={name}
                onChange={handleChange}
                name="name"
            />
            <button type="submit" className='btn btn-primary mx-2'>Buscar</button>

        </form>
    )
})

export default Formulario