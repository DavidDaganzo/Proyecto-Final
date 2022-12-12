import Map2 from "../../components/Map/Map2";
import PlacesAutocomplete from "../../components/SeachBar/SearchBar";
import { Container } from "react-bootstrap";
import { useState } from "react";

const LocationPage = () => {

    // defines location state
    //     pasas por props a cada uno

    const [location, setLocation] = useState()
    const [propertiesLocation, setPropertiesLocation] = useState()
    console.log(location)

    return (
        <Container>
            <>
                <PlacesAutocomplete setLocation={setLocation} setPropertiesLocation={setPropertiesLocation} />
                <br />
                <Map2 location={location} propertiesLocation={propertiesLocation} />
                <br />
            </>

        </Container >
    )
}
export default LocationPage