/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseApi from "../../baseApi/BaseApi";

const ShopApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetVendorShop: builder.query({
      query: (id) => ({
        url: `/shop/vendor/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["VendorShop"],
    }),
    GetSigleShop : builder.query({
      query: (shopName) => ({
        url: `/shop/${shopName}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags:["singleShops"]
    }),
    getShops : builder.query({
      query : () => ({
        url : '/shop',
        method: "GET",
        credentials: "include",
      }),
      providesTags:["AllShops"]
    }),
    updateShop: builder.mutation({
      query: ({ id, ShopData }) => ({
        url: `/shop/${id}`,
        method: "PATCH",
        credentials: "include",
        body: ShopData,
      }),
      invalidatesTags: ["VendorShop"],
    }),
  }),
});

export const { useGetVendorShopQuery, useUpdateShopMutation, useGetShopsQuery, useGetSigleShopQuery } = ShopApi;
