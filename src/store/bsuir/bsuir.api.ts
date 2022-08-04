import { IPrepod } from './../../models/prepod';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const bsuirApi = createApi({
    reducerPath: "bsuir/api",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://iis.bsuir.by/api/v1/employees/"
    }),
    endpoints: build => ({
        searchPrepod: build.query<IPrepod[], string>({
            query:(search: string)=>({
                url:'all',
                params:{
                    q:search,
                }
            })
        })
    })
})

export const {useSearchPrepodQuery} = bsuirApi