import { SubmitErrorHandler } from "react-hook-form";
import { TQueryParam, TResponseRedux, TStudent  } from "../../../typs";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
       
         getAllStudent: builder.query({
          query: (args)=>{
            const params = new URLSearchParams()
            if(args){
                args.forEach((item: TQueryParam)=>{
                    params.append(item.name,item.value as string);
                })
            }
             return { url: "/students",
              method: "GET",
              params:params
            }
          },
          transformResponse: (response: TResponseRedux<TStudent[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         getSingleStudent: builder.query({
          query: (_id)=>{
           
             return { url: `/students/${_id}`,
              method: "GET",
              id:_id
            }
          },
          transformResponse: (response: TResponseRedux<TStudent[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        addStudent: builder.mutation({
          query: (data)=>({
              url: "/users/create-student",
              method: "POST",
              body:data,
          }),
         }),
         updateStudent: builder.mutation({
         
          query: ({ id, data }) => ({
           
            url: `/students/${id}`,
            method: "PATCH",
            body: data
          }),
        }),
        addAdmin: builder.mutation({
          query: (formData)=>({
              url: "/users/create-admin",
              method: "POST",
              body:formData,
          }),
         }),
        
      }) ,
})

export const {useAddStudentMutation ,useGetAllStudentQuery,useGetSingleStudentQuery,useUpdateStudentMutation,useAddAdminMutation} = userManagementApi;