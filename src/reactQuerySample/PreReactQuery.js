// fetching data from the server the traditional way 

import react,{useEffect, useState} from "react"

const PreReactQuery = () => {
    const[preFetching, setPreFetching] = useState(); 

    // useEffect((
    //     cosnt response  = fetch().then(
    //         const data = response.json(); 
    //         setPreFetching(data)
    //         console.log(data))

    // ), [response])
  
    return (
        <> 
        {preFetching}
        </> 
    )
}
export default PreReactQuery; 