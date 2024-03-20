import { useContext } from "react"; // <== ADD
import { JourneyContext } from "./../context/journey.context"; // <== ADD

function HomePage() {

const { journeys, getJourneys } = useContext(JourneyContext)
console.log(journeys)

const dateString = journeys[0].departureTime
console.log(dateString)

    return(
        <>
            <h1>Homepage</h1>

            {journeys.length !== 0 ? (
                journeys.map(journey => (
                    <div key={journey._id}>
                        <h2>{journey.trainNumber}</h2>
                        <h3>{journey.departureTime}</h3>
                        <h3>{journey.departureStation}</h3>
                        <h3>{journey.arrivalStation}</h3>
                        <h3>{journey.duration}</h3>
                        <h3>{journey.trainType}</h3>
                        <h3>{journey.numberOfSeats}</h3>
                        <h3>{journey.price}</h3>
                    </div>
                ))
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export default HomePage