import { TQueryParam, TResponseRedux } from "../../../typs";
import { TMyEnrollCourses, TMyOfferedCourse } from "../../../typs/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getAllMyOfferCourses: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/offered-courses/my-offered-courses",
              method: "GET",
              params: params
            }
          },
          providesTags: ['my-offer-course'],
          transformResponse: (response: TResponseRedux<TMyOfferedCourse[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        getAllMyEnrollCourses: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/enrolled-courses/my-enrolled-courses",
              method: "GET",
              params: params
            }
          },
          providesTags: ['my-offer-course'],
          transformResponse: (response: TResponseRedux<TMyEnrollCourses[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),

         addEnrolledOfferCourse: builder.mutation({
          query: (data)=>({
              url: "/enrolled-courses/create-enrolled-course",
              method: "POST",
              body: data,
          }),
          invalidatesTags:['my-offer-course']
         }),
         updateOfferCourse: builder.mutation({
          query: (args)=>({
              url: `/offered-courses/${args.id}`,
              method: "PATCH",
              body: args.data,
          }),
          invalidatesTags:['my-offer-course']
         }),
      }) ,
})

export const {useGetAllMyOfferCoursesQuery,useAddEnrolledOfferCourseMutation,useGetAllMyEnrollCoursesQuery} = studentCourseApi