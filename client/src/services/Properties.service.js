import axios from 'axios'

class PropertiesService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/properties`
        })
    }


    getProperties() {
        return this.api.get('/getAllProperties')
    }

    getLocationProperties(location) {
        console.log(location)
        return this.api.get(`/getLocationProperties?lat=${location.lat}&lng=${location.lng}`)
    }

    getOneProperty(property_id) {
        return this.api.get(`/getOneProperty/${property_id}`)
    }

    saveProperty(propertyData) {
        return this.api.post('/saveProperty', propertyData)
    }

    editProperty(property_id, propertyData) {
        return this.api.post(`/edit/${property_id}`, propertyData)
    }

    delete(property_id) {
        return this.api.post(`/delete/${property_id}`)
    }

}

const propertiesService = new PropertiesService()

export default propertiesService