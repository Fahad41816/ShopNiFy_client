import BaseApi from "../../baseApi/BaseApi";

const ReviewsApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProductReview :  builder.mutation({
            query: (Data) => ({
                url: `/reviews`,
                method: "POST",
                credentials: "include",
                body: Data
            })
        })
    })
})

export const {useCreateProductReviewMutation} = ReviewsApi