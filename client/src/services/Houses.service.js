import axios from 'axios'

class HouseService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/Houses`
        })
    }


    getHouses() {
        return this.api.get('/getAllHouses')
    }

    getOneHouse(coaster_id) {
        return this.api.get(`/getOneHouse/${coaster_id}`)
    }

    saveHouse(coasterData) {
        return this.api.post('/saveHouse', coasterData)
    }
}

const coastersService = new CoasterService()

export default HouseService