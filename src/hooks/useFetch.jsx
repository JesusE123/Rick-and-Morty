import React, { useEffect, useState } from 'react'


const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        const controller = new AbortController();
        const request = async () => {
            try {
                const res = await fetch(url, { signal: controller.signal })
                
                if (!res.ok) {
                    return setError(true)

                }
                
                const response = await res.json()
                
                setLoading(false)
                setData([...response.results])
                
            }catch(error){
                
                if (error === 'AbortError') {
                    
                  }

                  setError(true)
            }

         
        }
       
        if(url){
        setError(false)
        setLoading(true)
        request()
        }
        return () => {
            controller.abort();
          };




    }, [url])

    
    return {error, loading, data }
        
  
}

export default useFetch
