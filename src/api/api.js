import axios from "axios";

export var api = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: "https://frontapi.3jz.ru/api/",
  responseType: "json",
});
