import { Container } from "react-bootstrap"
import Calendar from "../../components/Calendar/Calendar"


const BookingPage = () => {


    return (
        <Container>
            <>
                <h1 className="mb-4 text-center mt-5">Reservar</h1>
                <Calendar />
            </>

        </Container >
    )
}
export default BookingPage