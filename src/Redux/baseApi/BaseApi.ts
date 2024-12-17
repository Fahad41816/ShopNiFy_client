/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
  reducerPath: "api",
  tagTypes:["VendorShop", "AllShops", "singleShops"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1",
  }),
  endpoints: (builder : any) => ({}),
});

export default BaseApi;