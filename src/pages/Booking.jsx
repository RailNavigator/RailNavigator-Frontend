import { useContext, useEffect, useState } from "react"
import { JourneyContext } from "../context/journey.context"
import { Navigate, useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/auth.context"

function Booking() {

    const url = import.meta.env.VITE_API_URL;
    const { journeys } = useContext(JourneyContext)
    const [journey, setJourney] = useState({})
    const { id } = useParams()
    const { user, isLoggedIn } = useContext(AuthContext)


    const [travelClass, setTravelClass] = useState('')
    const [fareType, setFareType] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')


    const getJourney = () => {

        const filteredJourney = journeys.filter(elm => {
            return elm._id === id
        })

        setJourney(filteredJourney[0])
    }

    useEffect(() => {
        getJourney()
    }, [journeys])


    const createTicket = async (e) => {
        e.preventDefault()

        // if(!isLoggedIn) {
        //     Navigate('/login')
        //     return 
        // }  

        const requestBody = {
            user: user._id,
            journey: journey._id,
            travelClass,
            fareType,
            passengers: [{
                firstName,
                lastName,
                age
            }]
        }
        try  {
            const storedToken = localStorage.getItem("authToken");

            const response = await axios.post(`${url}/api/tickets`, requestBody, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            console.log('Ticket created succesfully', response.data)

            setTravelClass('')
            setFareType('')
            setFirstName('')
            setLastName('')
            setAge('')

        } catch (error) {
            console.log('Error creating ticket: ', error);
        } 
    }


    return (
        <>
            <h1>Your Booking</h1>
            {journey &&
                <div>
                    <h2>{journey.trainNumber}</h2>
                    <div>Departure station: <strong>{journey.departureStation}</strong></div>
                    <div>Departure time: <strong>{journey.departureTime}</strong></div>
                    <div>Arrival station: <strong>{journey.arrivalStation}</strong></div>
                    <div>Arrival time: <strong>{journey.arrivalTime}</strong></div>
                    <div>Duration: <strong>{journey.duration}</strong></div>
                    <div>Seats available: <strong>{journey.numberOfSeats}</strong></div>
                    <div>Price: <strong>{journey.price}</strong></div>
                    <div>Train type: <strong>{journey.trainType}</strong></div>
                    <br /><br /><br />

                    <form onSubmit={createTicket}>
                        <label>
                            Travel class: 
                            <select onChange={ e => { setTravelClass(e.target.value) } } >
                                    <option value="2nd Class">2nd Class</option>
                                    <option value="1st Class">1st Class</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Fare type: 
                            <select onChange={ e => { setFareType(e.target.value) } } >
                                    <option value="Super Saver">Super Saver</option>
                                    <option value="Saver">Saver</option>
                                    <option value="Full Flex">Full Flex</option>
                            </select>
                        </label>
                        <label>
                            Passenger first name:
                            <input 
                                type="text"
                                name="setFirstName"
                                value={firstName}
                                onChange={ e => { setFirstName(e.target.value) } }
                            />
                        </label>
                        <label>
                            Passenger last name:
                            <input 
                                type="text"
                                name="setLastName"
                                value={lastName}
                                onChange={ e => { setLastName(e.target.value) } }
                            />
                        </label>
                        <label>
                            Age:
                            <input 
                                type="text"
                                name="age"
                                value={age}
                                onChange={ e => { setAge(e.target.value) } }
                            />
                        </label>

                        <button type="submit">
                            Book ticket
                        </button>
                    </form>
                </div>
            }
        </>
    )
}

export default Booking