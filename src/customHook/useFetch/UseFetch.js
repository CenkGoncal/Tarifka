import React,{ useEffect, useState } from "react";
import { View, Text } from 'react-native';
import axios from "axios";

const UseFetch= (url) => {

    const [data,setData] = useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);

    
    const fetchData = async () => {

        try {

            var {data: responseData} = await axios.get(url);
            setData(responseData);

            setError(false);
            setLoading(false);
        } 
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);


    return { data, error, loading };
}

export default UseFetch;