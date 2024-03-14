import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";
// import { setUser } from "../features/auth/authSlice";


const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' ,
credentials: 'include',
prepareHeaders: (headers,{getState})=>{
const token = (getState() as RootState).auth.token
if (token) {
    headers.set('authorization', ` ${token}`)
  }
  return headers
},
})

const baseQueryWithRefreshToken = async ( args, api, extraOptions) => {
    try {
       let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            console.log('Sending refresh token');
            const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
                method: 'POST',
                credentials: 'include',
            });
            const data = await res.json();
            // Update Redux state with the new token
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            );
            // Retry the original request with the new token
    
            result = await baseQuery(args, api, extraOptions);
        }
    } catch (error) {
        // Handle other types of errors
        console.error('Error:', error);
        throw error;
    }
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: ()=>({}) ,
})