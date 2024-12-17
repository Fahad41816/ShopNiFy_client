import BaseApi from "../../baseApi/BaseApi";

const followApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        followShop: builder.mutation({
            query: (data) => ({
                url:`/Follow`,
                method:"POST",
                credentials:"include",
                body: data
            }),
            invalidatesTags:["singleShops", "AllShops"]
        }),
        unFollowShop : builder.mutation({
            query : (id) => ({
                url : `/Follow/upfollow/${id}`,
                method: "DELETE",
                credentials:"include", 
            }),
            invalidatesTags:["singleShops", "AllShops"]
        })
    })
})

export const {useFollowShopMutation, useUnFollowShopMutation} = followApi