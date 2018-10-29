<template>
    <div class="ui grid container stackable">
        <div class="ui search right floated four wide column">
            <div class="ui icon input">
                <input 
                    type="text" 
                    placeholder="Search for..."
                    v-on:input="searchFor">
                <i class="search icon"></i>
            </div>
        </div>
        <table class="ui blue celled table">
            <thead>
                <tr>
                    <th v-on:click="sortByAscendingOrder('name')" 
                        class="select">
                        Name
                    </th>
                    <th v-on:click="sortByAscendingOrder('category')" 
                        class="select">
                        Category
                    </th>
                    <th v-on:click="sortByAscendingOrder('numCampaigns')" 
                        class="select">
                        Num of Campaigns
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="business in getBusinessList"
                    v-bind:key="business.name"
                >
                    <td 
                        v-on:click="selectBusiness(business)"
                        class="select">
                        {{business.name}}
                    </td>
                    <td>{{business.category}}</td>
                    <td>{{business.numCampaigns}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import businessList from '../business-list.json';

export default {
    name: 'BusinessList',
    methods: {
        ...mapActions([
            'loadBusinessList', 
            'sortByAscendingOrder', 
            'selectBusiness', 
            'filterBusiness']),
        searchFor(e) {
            this.filterBusiness(e.target.value);
        }
    },
    computed: {
        ...mapGetters(['getBusinessList'])
    },
    created() {
        this.loadBusinessList(businessList);
    }
}
</script>

<style scoped>
    .select{
        cursor: pointer !important;
    }
    .select:hover {
        background-color: #eee;
    }
    table {
        padding: 0 !important;
    }
</style>
