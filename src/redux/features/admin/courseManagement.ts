import {  TAllCourses, TOfferedCourses, TQueryParam, TResponseRedux, TSemester, TSingleFaculties } from "../../../typs";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getAllRegisterSemester: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/semester-registrations",
              method: "GET",
              params: params
            }
          },
          providesTags: ['semester'],
          transformResponse: (response: TResponseRedux<TSemester[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        addRegisterSemester: builder.mutation({
          query: (data)=>({
              url: "/semester-registrations/create-semester-registration",
              method: "POST",
              body: data,
          }),
          invalidatesTags:['semester']
         }),
        updateRegisteredSemester: builder.mutation({
          query: (args)=>({
              url: `/semester-registrations/${args.id}`,
              method: "PATCH",
              body: args.data,
          }),
          invalidatesTags:['semester']
         }),
         getAllCourses: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/courses",
              method: "GET",
              params: params
            }
          },
          providesTags: ['course'],
          transformResponse: (response: TResponseRedux<TAllCourses[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          }, 
         }),
         addCourse: builder.mutation({
          query: (data)=>({
              url: "/courses/create-course",
              method: "POST",
              body: data,
          }),
          invalidatesTags:['course']
         }),
         addCourseFaculties: builder.mutation({
          query: (args)=>({
              url: `/courses/${args.courseId}/assign-faculties`,
              method: "PUT",
              body: args.data,
          }),
          invalidatesTags:['course']
         }),

         getAllFaculties: builder.query({
          query: (id)=>{
             return { url: `/courses/${id}/get-faculties`,
              method: "GET",
            }
          },
          providesTags: ['course'],
          transformResponse: (response: TResponseRedux<TSingleFaculties>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          }, 
         }),
         getAllOfferedCourses: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/offered-courses",
              method: "GET",
              params: params
            }
          },
          providesTags: ['offer-course'],
          transformResponse: (response: TResponseRedux<TOfferedCourses[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
         addOfferCourse: builder.mutation({
          query: (data)=>({
              url: "/offered-courses/create-offered-course",
              method: "POST",
              body: data,
          }),
          invalidatesTags:['offer-course']
         }),
         updateOfferCourse: builder.mutation({
          query: (args)=>({
              url: `/offered-courses/${args.id}`,
              method: "PATCH",
              body: args.data,
          }),
          invalidatesTags:['offer-course']
         }),
      }) ,
})

export const {useAddRegisterSemesterMutation, useGetAllRegisterSemesterQuery,useUpdateRegisteredSemesterMutation,useGetAllCoursesQuery,useAddCourseMutation,useAddCourseFacultiesMutation,useGetAllFacultiesQuery,useAddOfferCourseMutation,useGetAllOfferedCoursesQuery,useUpdateOfferCourseMutation} = courseManagementApi