import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
       
        //  getAllFaculty: builder.query({
        //   query: ()=>{
        //      return { url: "/academic-faculties",
        //       method: "GET",
        //     }
        //   },
        //   transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) =>  {
        //        return {
        //         data: response.data,
        //         meta: response.meta
        //        }
        //   },
        //  }),
        addStudent: builder.mutation({
          query: (data)=>({
              url: "/users/create-student",
              method: "POST",
              body:data,
          }),
         }),
      }) ,
})

export const {useAddStudentMutation } = userManagementApi;