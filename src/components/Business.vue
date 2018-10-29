<template>
    <div class="ui centered grid content">
        <div class="ui card" v-if="getSelectedBusiness">
            <div class="content">
                <span class="header">{{getSelectedBusiness.name}}</span>
                <div class="meta">
                    <span>{{getSelectedBusiness.category}}</span>
                </div>
                <div class="description">
                    <GoogleMaps />
                </div>
                <div class="extra content">
                    <span>
                        <i class="bullhorn icon"></i>
                        {{getSelectedBusiness.numCampaigns}}
                         Campaign(s)
                    </span>
                </div>
            </div>
        </div>
        <div v-else class="ui negative message">
            <div class="header">
                We're sorry
            </div>
            <p>Please select a Business</p>
        </div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';

import GoogleMaps from './GoogleMap';

export default {
    name: 'Business',
    components: {
        GoogleMaps
    },
    computed: {
        ...mapGetters(['getSelectedBusiness'])
    }
}
</script>

<style scoped>
    .content {
        margin-top: 50px;
    }
</style>
