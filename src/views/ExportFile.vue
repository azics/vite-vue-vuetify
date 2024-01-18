<template>
    <v-container>
        <v-card :loading="loading">
            <v-card-actions>
                <v-file-input
                    id="excelFileInput"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    label="File input"
                    :loading="loading"
                ></v-file-input>

                <v-btn @click="sendItems">
                    Send
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import axiosInstance from '../api.js';
    import axios from 'axios';

    const API = {
        async fetch({ page, itemsPerPage, sortBy }) {
            // await axios.get('https://localhost:3003/api/subscribersGrouped')
            // await axiosInstance.get('https://localhost:3003/api/subscribersGrouped')

            const start = (page - 1) * itemsPerPage
            const end = start + itemsPerPage
            // const items = desserts.slice()

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

    import * as XLSX from 'xlsx';

    function convertExcelToJson() {
        const fileInput = document.getElementById('excelFileInput');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please select an Excel file.');
            return;
        }

        const reader = new FileReader();

        const data = reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming there is only one sheet in the Excel file
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert the sheet to JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Log the JSON data (you can do further processing here)
            return jsonData;
        };

        console.log(data);
        reader.readAsArrayBuffer(file);

    }

    export default {

        data: () => ({
            headers: [
                // {
                //     title: 'ID',
                //     align: 'start',
                //     sortable: false,
                //     key: 'id',
                // },
                { title: 'REGION', key: 'region', align: 'end' },
                { title: 'ITEM', key: 'item', align: 'end' },
                { title: 'UNITS', key: 'units', align: 'end' },
                { title: 'SUBSCRIBERS', key: 'subscribers', align: 'end' },
            ],
            items: [],
            loading: false,
            totalItems: 0,
        }),
        methods: {
            async sendItems({ page, itemsPerPage, sortBy }) {
                this.loading = true

                convertExcelToJson()

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