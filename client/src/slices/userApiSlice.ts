import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });
const USERS_API = "/api/v1/users";

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),
  }),
});

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // addUser: builder.mutation({
    //   query: (body) => ({
    //     url: "users",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["User"],
    // }),
    register: builder.mutation({
      query: (body) => ({
        url: `${USERS_API}`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `${USERS_API}/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_API}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: `${USERS_API}/profile`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: `${USERS_API}/profile`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
} = userApiSlice;
