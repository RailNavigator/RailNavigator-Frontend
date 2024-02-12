import { useContext } from "react"; // <== ADD
import { JourneyContext } from "./../context/journey.context"; // <== ADD

function HomePage() {

const { journeys, getJourneys } = useContext(JourneyContext)
console.log(journeys)

    return(
        <>
            <h1>Homepage</h1>

            {journeys.map(journey => (
                <div key={journey._id}>
                    <h2>{journey.trainNumber}</h2>
                </div>
            ))}
        </>
    )
}

export default HomePage