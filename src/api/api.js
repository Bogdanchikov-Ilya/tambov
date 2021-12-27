import axios from "axios";

export var api = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://frontapi.3jz.ru/api/',
  responseType: 'json',
})
