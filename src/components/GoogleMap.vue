<template> 
    <div>
        <gmap-map
            v-bind:center="getSelectedBusiness.location"
            v-bind:zoom="12"
            class="map"
        >
            <gmap-marker
                v-bind:position="getSelectedBusiness.location"
            >
            </gmap-marker>
        </gmap-map>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'GoogleMap',
    computed: {
        ...mapGetters(['getSelectedBusiness'])
    }
}
</script>
<style scoped>
    .map {
        height: 300px;
        width: 100%;
    }
</style>