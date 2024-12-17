import BaseApi from "../../baseApi/BaseApi";

const OrdersApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserOrders : builder.query({
            query: (userId) => ({
                url: `/orders/${userId}`,
                method: "GET",
                credentials: "include"
            })
        })
    })
})

export const  {useGetUserOrdersQuery} = OrdersApi