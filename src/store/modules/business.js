import _ from 'lodash';
import { router } from '../../main';

const state = {
    businessList: null,
    selected: null,
    filterList: null
};

const getters = {
    getBusinessList: (state) => state.filterList,
    getSelectedBusiness: (state) => state.selected
};

const mutations = {
    setBusinessList: (state, businessList) => {
        state.businessList = businessList
        state.filterList = businessList
    },
    sortAscendingOrder: (state, by) => {
        const sorted = _.sortBy(state.filterList, by)
        state.filterList = sorted;
    },
    setSelectedBusiness: (state, selected) => {
        state.selected = selected
    },
    searchByName: (state, word) => {
        state.filterList = _.filter(state.businessList, (item) => {
            return item.name.toLowerCase().startsWith(word.toLowerCase())
        })
    }
}

const actions = {
    loadBusinessList: ({commit}, businessList) => {
        commit('setBusinessList', businessList)
    }, 
    sortByAscendingOrder: ({commit}, sortBy) => {
        commit('sortAscendingOrder', sortBy)
    },
    selectBusiness: ({commit}, select) => {
        commit('setSelectedBusiness', select)
        router.push('/business')
    },
    filterBusiness: ({commit}, word) => {
        commit('searchByName', word);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}