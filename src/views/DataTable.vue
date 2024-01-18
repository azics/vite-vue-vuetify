<template>
    <v-card>
        <v-card-actions>
            <!-- <v-switch
                v-model="group"
                hide-details
                true-value="yes"
                false-value="no"
                :label="`GroupBY: ${group}`"
            ></v-switch> -->
            Grouped by Region
        </v-card-actions>
        <v-card-text>
            <v-data-table-server
                v-model:items-per-page="itemsPerPage"
                :headers="headers"
                :items-length="totalItems"
                :items="serverItems"
                :loading="loading"
                item-value="name"
                @update:options="loadItems"
            ></v-data-table-server>
        </v-card-text>
    </v-card>
</template>
<script>
    import axiosInstance from '../api.js';
    import axios from 'axios';


    const desserts = [
        {
            // id: 1,
            region: 'TASHKENT',
            item: 175,
            units: 24,
            subscribers: 4,
        },
        {
            // id: 2,
            region: 'TASHKENT',
            item: 175,
            units: 24,
            subscribers: 4,
        },
        {
            // id: 3,
            region: 'TASHKENT',
            item: 175,
            units: 24,
            subscribers: 4,
        },
    ]

    const API = {
        async fetch({ page, itemsPerPage, sortBy }) {
            // await axios.get('https://localhost:3003/api/subscribersGrouped')
            // await axiosInstance.get('/subscribersGrouped')

            const start = (page - 1) * itemsPerPage
            const end = start + itemsPerPage
            const items = desserts.slice()

            if (sortBy.length) {
                const sortKey = sortBy[0].key
                const sortOrder = sortBy[0].order
                items.sort((a, b) => {
                    const aValue = a[sortKey]
                    const bValue = b[sortKey]
                    return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
                })
            }

            const paginated = items.slice(start, end)

            return { items: paginated, total: items.length }
        },
    }

    export default {
        data: () => ({
            group: 'yes',
            itemsPerPage: 25,
            headers: [
                // {
                //     title: 'ID',
                //     align: 'start',
                //     sortable: false,
                //     key: 'id',
                // },
                { title: 'REGION', key: 'region', align: 'start' },
                { title: 'ITEM', key: 'item', align: 'end' },
                { title: 'UNITS', key: 'units', align: 'end' },
                { title: 'SUBSCRIBERS', key: 'subscribers', align: 'end' },
            ],
            search: '',
            serverItems: [],
            loading: true,
            totalItems: 0,
        }),
        methods: {
            async loadItems({ page, itemsPerPage, sortBy }) {
                this.loading = true

                API.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
                    this.serverItems = items
                    this.totalItems = total
                    this.loading = false
                })
            },
        },
    }
</script>

<style scoped>
    /* Component styles go here */
</style>