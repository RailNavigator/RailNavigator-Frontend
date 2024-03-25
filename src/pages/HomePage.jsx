import { useContext } from "react"; // <== ADD
import { JourneyContext } from "./../context/journey.context"; // <== ADD
import { Link } from "react-router-dom";

function HomePage() {

const { journeys } = useContext(JourneyContext)
console.log(journeys)

    return(
        <>
            <h1>Homepage</h1>

            {journeys.length !== 0 ? (
                journeys.map(journey => {
                    const departureDate = new Date(journey.departureTime)
                    const departureMonth = departureDate.getMonth() + 1
                    const departureDay = departureDate.getDate()
                    const departureYear = departureDate.getFullYear()
                    const departureHour = departureDate.getHours()
                    const departureMinutes = departureDate.getMinutes()

                    const arrivalDate = new Date(journey.arrivalTime)
                    const arrivalMonth = arrivalDate.getMonth() + 1
                    const arrivalDay = arrivalDate.getDate()
                    const arrivalYear = arrivalDate.getFullYear()
                    const arrivalHour = arrivalDate.getHours()
                    const arrivalMinutes = arrivalDate.getMinutes()
               
                
                    return (
                        <div className="card" key={journey._id}>
                            <h2>{journey.trainNumber}</h2>
                            <h3>Departure Date: {departureMonth}/{departureDay}/{departureYear}</h3>
                            <h3>Time: {departureHour}:{departureMinutes}</h3>
                            <h3>Arrival Date: {arrivalMonth}/{arrivalDay}/{arrivalYear}</h3>
                            <h3>Time: {arrivalHour}:{arrivalMinutes}</h3>
                            <h3>City: {journey.departureStation}</h3>
                            <h3>City: {journey.arrivalStation}</h3>
                            <h3>Duration: {journey.duration} minutes</h3>
                            <h3>Train type: {journey.trainType}</h3>
                            <h3>Number of seats available: {journey.numberOfSeats}</h3>
                            <h3>Price: {journey.price}</h3>

                            <Link to={`/journey/${journey._id}/booking`} >Book now</Link>
                        </div>
                    )
                }  
                )
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export default HomePage