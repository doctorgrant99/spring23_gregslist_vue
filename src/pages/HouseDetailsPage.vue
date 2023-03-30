<template>
<div class="container-fluid">
    <div class="row mt-3">
        <div v-if="house" class="col-10 m-auto">
            <HouseCard :house="house" />
        </div>
    </div>
</div>
<ModalComponent v-if="house">
    <HouseForm :house="house" />
</ModalComponent>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import HouseCard from '../components/HouseCard.vue';
import HouseForm from '../components/HouseForm.vue';
import { housesService } from '../services/HousesService.js';
import ModalComponent from '../components/ModalComponent.vue';

export default {
    setup() {
        const route = useRoute();
        async function getHouseById() {
            try {
                await housesService.getHouseById(route.params.houseId);
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getHouseById();
        });
        return {
            house: computed(() => AppState.house)
        };
    },
    components: { HouseCard, HouseForm, ModalComponent }
}
</script>

<style>

</style>