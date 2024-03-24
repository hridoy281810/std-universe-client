import { SubmitErrorHandler } from "react-hook-form";
import { TAdmin, TQueryParam, TResponseRedux, TStudent  } from "../../../typs";
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
         getAllAdmin: builder.query({
          query: (args)=>{
            const params = new URLSearchParams()
            if(args){
                args.forEach((item: TQueryParam)=>{
                    params.append(item.name,item.value as string);
                })
            }
             return { 
              url: "/admins",
              method: "GET",
              params:params
            }
          },
          transformResponse: (response: TResponseRedux<TAdmin[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         getSingleAdmin: builder.query({
          query: (_id)=>{
           
             return { url: `/admins/${_id}`,
              method: "GET",
              id:_id
            }
          },
          transformResponse: (response: TResponseRedux<TAdmin []>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         updateAdmin: builder.mutation({
         
          query: ({ id, data }) => ({
           
            url: `/admins/${id}`,
            method: "PATCH",
            body: data
          }),
        }),
        addFaculty: builder.mutation({
          query: (formData)=>({
              url: "/users/create-faculty",
              method: "POST",
              body:formData,
          }),
         }),
         getAllFaculty: builder.query({
          query: (args)=>{
            const params = new URLSearchParams()
            if(args){
                args.forEach((item: TQueryParam)=>{
                    params.append(item.name,item.value as string);
                })
            }
             return { 
              url: "/faculties",
              method: "GET",
              params:params
            }
          },
          transformResponse: (response: TResponseRedux<TAdmin[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         getSingleFaculty: builder.query({
          query: (_id)=>{
           
             return { url: `/faculties/${_id}`,
              method: "GET",
              id:_id
            }
          },
          transformResponse: (response: TResponseRedux<TAdmin []>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         updateFaculty: builder.mutation({
         
          query: ({ id, data }) => ({
           
            url: `/faculties/${id}`,
            method: "PATCH",
            body: data
          }),
        }),
      }) ,
})

export const {useAddStudentMutation ,useGetAllStudentQuery,useGetSingleStudentQuery,useUpdateStudentMutation,useAddAdminMutation,useGetAllAdminQuery,useGetSingleAdminQuery,useUpdateAdminMutation,useGetAllFacultyQuery,useGetSingleFacultyQuery,useUpdateFacultyMutation,useAddFacultyMutation} = userManagementApi;