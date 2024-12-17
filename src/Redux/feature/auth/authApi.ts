import { TUser } from "../../../type/userDatatype";
import BaseApi from "../../baseApi/BaseApi";

const AuthApi = BaseApi.injectEndpoints({
    endpoints: (builder)=>({
        LoginUser : builder.mutation({
            query: (userData : {email: string, password: string}) => ({
                url: "/auth/login",
                method: "POST",
                body: userData,
                credentials: "include"
            })
        }),
        RegisterUser : builder.mutation({
            query : (userData: TUser) => ({
                url:'/auth/create',
                method: "POST",
                body: userData
            })
        })
    })
})

export const {useLoginUserMutation, useRegisterUserMutation} = AuthApi