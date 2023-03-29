<template>
  <div class="container-fluid">
    <div v-if="account.id" class="row my-3">
      <div class="col-12 g-5">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-success fs-2">Find House 🏚️</button>
      </div>
    </div>
    <div v-for="houseFromVFor in houses" :key="houseFromVFor.id" class="col-md-4 mb-3">
      <HouseCard :house="houseFromVFor" />
    </div>
  </div>
  <HouseForm />
</template>


<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import HouseCard from '../components/HouseCard.vue';
import HouseForm from '../components/CarForm.vue'

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
          houses: computed(() => AppState.houses),
          account: computed(() => AppState.account)
        };
    },
    components: { HouseCard, HouseForm }
}
</script>


<style lang="scss" scoped></style>