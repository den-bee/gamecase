import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TRoot} from "../../../types/TGame";

const key = process.env.EXPO_PUBLIC_API_KEY;

export const rawgApi = createApi({
  reducerPath: "rawgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api/",
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<TRoot, void>({
      query: () => `games?key=${key}`,
    }),
  }),
});

export const {useGetAllGamesQuery} = rawgApi;
