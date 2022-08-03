import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const bsuirApi = createApi({
    reducerPath: "bsuir/api",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://iis.bsuir.by/api/v1/employees/schedule"
    }),
    endpoints: build => ({
        searchPrepod: build.query<any, string>({
            query:(search: string)=>({
                url:'prepod',
                params:{
                    q:search
                }
            })
        })
    })
})

export const {useSearchPrepodQuery} = bsuirApi