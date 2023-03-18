import Formulario from "../components/Formulario";
import { fireEvent, render, screen } from "@testing-library/react";
import { useFormulario } from '../hooks/useFormulario'
import '@testing-library/jest-dom'

const mockuseForm = jest.fn()
const mockReset = jest.fn()
const mockHandleChange = jest.fn()
jest.mock('../hooks/useFormulario', ()=>{
    return {
        useFormulario: ()=>{
            return  mockuseForm()
        }
    }
})


describe('Formulario', () => {
    const userData = {
        inputs:{},
        reset:()=>{
            mockReset()
        },
        handleChange:()=>{
            mockHandleChange()
        }

    }
    beforeEach(()=>{
        mockuseForm.mockReturnValue(userData)
    })
    test('render component the form', () => {
        render(<Formulario />)
        const input = screen.getByPlaceholderText('ingrese el character');
        const btn = screen.getByText('Buscar');
        expect(input).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
    })

    test('deberia ejecutarse el handleSubmit', ()=>{
        const setNombre = jest.fn()
        mockuseForm.mockReturnValue({...userData, inputs:{name:'mariano'}})
        render(<Formulario setNombre={setNombre}/>)
        const btn = screen.getByText('Buscar');
        fireEvent.click(btn)
        expect(setNombre.mock.calls.length).toBe(1)
        expect(mockReset.mock.calls.length).toBe(1)
        
        
        
    })

    test('deberia ejecutar el alert si el input esta vacio', ()=>{
      const testAlert =  jest.spyOn(window, 'alert').mockImplementation(() => {});
      //mockuseForm.mockReturnValue({...userData, inputs:{name:''}})
        render(<Formulario />)
        const btn = screen.getByText('Buscar');
        fireEvent.click(btn)
        expect(testAlert.mock.calls.length).toBe(1)
    })
})