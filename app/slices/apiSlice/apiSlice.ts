import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import TGame from "../../../types/TGame";

export const rawgApi = createApi({
  reducerPath: "rawgApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
  endpoints: (builder) => ({
    getGameByReleaseDate: builder.query<TGame, Date>({
      query: (released) => `game/${released}`,
    }),
  }),
});

export const {useGetGameByReleaseDateQuery} = rawgApi;
