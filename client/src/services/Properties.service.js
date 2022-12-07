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

    getOneProperty(property_id) {
        return this.api.get(`/getOneProperty/${property_id}`)
    }

    saveProperty(propertyData) {
        return this.api.post('/saveProperty', propertyData)
    }

    edit(property_id) {
        return this.api.post(`/edit/${property_id}`)
    }

    delete(property_id) {
        return this.api.post(`/delete/${property_id}`)
    }

}

const propertiesService = new PropertiesService()

export default propertiesService