import BaseApi from "../../baseApi/BaseApi";

const ProductCategory = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetProductCategory : builder.query({
            query: () => ({
                url: "/category",
                method:"GET"
            })
        })
    })
})

export const {useGetProductCategoryQuery} = ProductCategory