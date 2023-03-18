import React, { useEffect, useState, memo } from 'react'
import Character from './Character'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'

const ShowCharacters = memo(function ShowCaracters({ nombre }) {
    const [contentUrl, setContentUrl] = useState('')
    const {error, loading, data, } = useFetch(contentUrl)
       console.log(data)
      useEffect(()=>{
       
            setContentUrl(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
        
      },[nombre])
       

    return (
        <div className='row mt-2'>
            
             {error && 'Error!'}
             {loading && <Loading />}

             
             

           {data.map((item) => (
            <Character key={item.id} character={item}/>
           ))}
            
        </div>
    )
})


export default ShowCharacters
