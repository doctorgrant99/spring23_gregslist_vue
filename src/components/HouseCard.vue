<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
    <div class="elevation-3 rounded bg-light border border-1 border-dark">
        <img :src="house.imgUrl" :alt="house.year" class="img-fluid rounded-top">
        <div class="text-center p-3">
            <h1 class="fs-2">{{ house.year + ' ' + '|' + ' $' + house.price }}</h1>
        </div>
        <div v-if="route.name == 'HouseDetails'" class="p-4">
            <div class="d-flex justify-content-between">
                <h3>{{ house.year }}</h3>
                <h3>{{ house.price }}</h3>
            </div>
            <p class="fw-bold fs-5">{{ house.description }}</p>
        </div>
    </div>
    </router-link>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    props: {
        house: {
            type: House,
            required: true
        }
    },
    setup(props) {
        const route = useRoute()
        return {
            route,
            account: computed(() => AppState.account),
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
}
</style>