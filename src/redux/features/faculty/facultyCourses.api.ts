import { TQueryParam, TResponseRedux } from "../../../typs";
import { TMyEnrollCourses } from "../../../typs/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const facultyCourseApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getAllFacultyCourses: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/enrolled-courses",
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
     
         addMark: builder.mutation({
          query: (data)=>({
              url: "/enrolled-courses/update-enrolled-course-marks",
              method: "PATCH",
              body: data,
          }),
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

export const {useGetAllFacultyCoursesQuery,useAddMarkMutation}= facultyCourseApi;