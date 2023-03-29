<template>
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Find House</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>

<form>
    <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="bedrooms" class="form-label">Bedrooms</label>
            <input type="number" required class="form-control" id="bedrooms">
          </div>
          <div class="mb-3">
            <label for="bathrooms" class="form-label">Bathrooms</label>
            <input type="number" required class="form-control" id="bathrooms">
          </div>
          <div class="mb-3">
            <label for="levels" class="form-label">Levels</label>
            <input type="number" required class="form-control" id="levels">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
</form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { House } from '../models/House.js';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    props: {
        house: {
            type: House,
            default: {}
        }
    },
    setup(props) {
        
        return {
            
        }
    }
}
</script>

<style>

</style>