import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl ="https://hp-api.onrender.com/api/"
export const baseApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl}),
        endpoints:()=>({})

});