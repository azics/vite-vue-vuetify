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
        async fetch(data) {
            // await axios.post('https://localhost:3003/api/subscriberBulk', JSON.stringify(data))
            console.log(data)
            try {
                const response = await axiosInstance.post('/subscriberBulk', JSON.stringify(data))
            } catch (error) {
                throw error
            }


            // return response
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

        reader.onload = async function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming there is only one sheet in the Excel file
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert the sheet to JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Log the JSON data (you can do further processing here)
            console.log(jsonData);
            await API.fetch(jsonData);
        };

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

                await convertExcelToJson()

                this.loading = true
            },
        },
    }
</script>

<style scoped>
    /* Component styles go here */
</style>