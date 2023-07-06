import { useEffect, useState } from "react";


function useLocalState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);

        return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;
    });

    useEffect(()=> {
        localStorage.setItem( JSON.stringfy(value), key)
    },[key, value]);

}

export  {useLocalState} 
