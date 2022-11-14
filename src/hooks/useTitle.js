import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} | Portraits Tourer`;
    },[title])
}

export default useTitle;