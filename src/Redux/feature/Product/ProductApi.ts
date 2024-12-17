import BaseApi from "../../baseApi/BaseApi";

const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetProducts: builder.query({
      query: ({ category, searchTerm, priceRange, sortBy, Availability, page }) => {
        // Build query parameters dynamically
        const params = new URLSearchParams();
        console.log(priceRange);
        if (category) params.append("category", category);
        if (searchTerm) params.append("searchTerm", searchTerm);
        
        if (priceRange?.minPrice !== undefined) {
          params.append("minPrice", priceRange.minPrice);
        }
        if (priceRange?.maxPrice !== undefined) {
          params.append("maxPrice", priceRange.maxPrice);
        }
        if (Availability) params.append("Availability", Availability);
        if (sortBy.sort) params.append("sortBy", sortBy.sort);
        if (sortBy.sortOrder) params.append("sortOrder", sortBy.sortOrder);
        if (page) params.append("page", page);

        return {
          url: `/product?${params.toString()}`, // Append the query string
          method: "GET",
        };
      },
    }),
    GetHomePageProduct: builder.query({
      query: () => ({
        url: `/product/Home`,
        method: "GET",
      }),
    }),
    GetProduct: builder.query({
      query: ({ shopName, productName }) => ({
        url: `/product/${shopName}/${productName}`,
        method: "GET",
      }),
    }),
    AddProduct: builder.mutation({
      query: (ProductData) => ({
        url: "/product",
        method: "POST",
        body: ProductData,
        credentials: "include",
      }),
      invalidatesTags: ["VendorShop"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, shopid, updateData }) => ({
        url: `/product/${id}/${shopid}`,
        method: "PATCH",
        body: updateData,
        credentials: "include",
      }),
      invalidatesTags: ["VendorShop"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["VendorShop"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useGetHomePageProductQuery
} = ProductApi;
