import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "09c0e413b2msh7b11bc16ad6f014p1bc680jsn931d668846ce"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/get-top-songs-in_world_by_genre?genre=POP&limit=50",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get_details?id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        `/songs/list-recommendations?id=${songid}&limit=20`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artist/get-top-songs?id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
