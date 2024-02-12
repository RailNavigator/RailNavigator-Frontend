import axios from "axios";
import { createContext, useEffect, useState } from "react";

const JourneyContext = createContext()

function JourneyProviderWrapper(props) {

    const url = import.meta.env.VITE_API_URL

    const [journeys, setJourneys] = useState([])

    const getJourneys = () => {
        axios
            .get(`${url}/api/journeys`)
            .then((response) => {
                // console.log(response.data)
                setJourneys(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getJourneys()
    }, [])

    return (
        <JourneyContext.Provider value={{journeys, getJourneys}}>
            {props.children}
        </JourneyContext.Provider>
    )
}

export { JourneyContext, JourneyProviderWrapper }