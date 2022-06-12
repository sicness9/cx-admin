import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mileiqApi = createApi({
  reducerPath: "mileiqApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (parseId, email) =>
        `users/parse_id=${parseId}&email=${email}&x-retool-api-key=30a5668-2b68-4fdf-852c-723594c9e69c`,
    }),
  }),
});

export const { useGetUserQuery } = mileiqApi;
