import { useEffect, useState } from "react";
import axios from 'axios';

// building a custom hook which can return list of repos and a loading flag

// things to handle in this hook
// list down the paraments required
// api(required: string): to look for repositories in gitHub
// triggerOnMount (optional: boolean): decides whether to fire the effect on initial mount

export const useFetch = ({
    api = null,
    triggerOnMount = false
}) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('Enter a user name to fetch list of repositories');
    
    const fetchData = () => {
        
        //set the loader before intiating the fetch call
        setLoading(true);

        axios.get(api())
           .then((resp) => {
               console.log(resp);
               let { data } = resp;
               if(data){
                   setResponse(data);
                   setLoading(false);
                   data.length > 0 ? setMessage('') : setMessage('No repositories to display');
               }
           })
           .catch((error) => {
               setResponse([]);
               setLoading(false);
               setMessage('Unable to fetch');
            });
    };

    useEffect(() => {
        if(api !== null && triggerOnMount) fetchData();
    });

    return { 
        response,
        loading,
        message,
        fetchData
    };
};