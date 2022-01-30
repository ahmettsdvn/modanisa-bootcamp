//This page is global definition page for axios
//I created this page for using axios instance in everywhere

import axios from 'axios'

const API_URL = "https://my-json-server.typicode.com/modanisa/bootcamp-video-db"

const ModanisaAxiosExample = axios.create({baseURL: API_URL})

export default {ModanisaAxiosExample}
