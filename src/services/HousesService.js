import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { House } from "../models/House.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/Houses')
        logger.log('get houses', res.data)
        AppState.houses = res.data.map(h => new House(h))
    }

    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('api/Houses/' + houseId)
        logger.log('find house', res.data)
        AppState.house = new House(res.data)
    }
}
export const housesService = new HousesService()