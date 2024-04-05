import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core7.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '67911fa980msh544688ef29cacf6p1c8014jsna38dc06bb1a0');
            headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com')

            // console.log(headers )
            return headers
        }
    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({query: () => 'charts/get-top-songs-in_world_by_genre?genre=POP&limit=50'}),
        getSongDetails: builder.query({query: ({songid}) => `/songs/get_details?id=${songid}`}),
        getSongRelated: builder.query({query: ({songid}) => `/songs/list-recommendations?id=${songid}`})

    })
    
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } = shazamCoreApi;