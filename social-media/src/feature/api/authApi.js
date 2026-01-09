import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth",
        method: "POST",
        body,
      }),
    }),
    loggedInUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body,
      }),
    }),
    verifiedUser: builder.mutation({
      query: (token, userToken) => ({
        url: "/api/v1/auth/activate",
        method: "POST",
        body: { token },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }),
    }),
    reVerification: builder.mutation({
      query: (token) => ({
        url: "/api/v1/auth/reverification",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    matchUser: builder.mutation({
      query: (email) => ({
        url: "/api/v1/auth/resetpassword",
        method: "POST",
        body: { email },
      }),
    }),
    sendCode: builder.mutation({
      query: (email) => ({
        url: "/api/v1/auth/resetcode",
        method: "POST",
        body: { email },
      }),
    }),
    verifyCode: builder.mutation({
      query: (email, code) => ({
        url: "/api/v1/auth/verifyresetcode",
        method: "POST",
        body: { email, code },
      }),
    }),
    changePassword: builder.mutation({
      query: (email, password) => ({
        url: "/api/v1/auth/changepassword",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoggedInUserMutation,
  useVerifiedUserMutation,
  useReVerificationMutation,
  useMatchUserMutation,
  useSendCodeMutation,
  useVerifyCodeMutation,
  useChangePasswordMutation,
} = authApi;
