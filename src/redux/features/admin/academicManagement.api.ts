
import { TQueryParam, TResponseRedux } from "../../../typs";
import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../typs/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getAllSemester: builder.query({
          query: (args)=>{
          const params = new URLSearchParams();
          if(args){
            args.forEach((item:TQueryParam) => {
                params.append(item.name,item.value as string)
            });
          }
         
             return { url: "/academic-semesters",
              method: "GET",
              params: params
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicSemester[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        addAcademicSemester: builder.mutation({
          query: (data)=>({
              url: "/academic-semesters/create-academic-semester",
              method: "POST",
              body: data,
          }),
         }),
         getAllFaculty: builder.query({
          query: ()=>{
             return { url: "/academic-faculties",
              method: "GET",
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        addAcademicFaculty: builder.mutation({
          query: (data)=>({
              url: "/academic-faculties/create-academic-faculty",
              method: "POST",
              body: data,
          }),
         }),
         getAllDepartment: builder.query({
          query: ()=>{
             return { url: "/academic-departments",
              method: "GET",
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) =>  {
               return {
                data: response.data,
                meta: response.meta
               }
          },
         }),
        addAcademicDepartment: builder.mutation({
          query: (data)=>({
              url: "/academic-departments/create-academic-department",
              method: "POST",
              body: data,
          }),
         }),
      }) ,
})
export const {useGetAllSemesterQuery,useAddAcademicSemesterMutation,useAddAcademicFacultyMutation,useGetAllFacultyQuery,useGetAllDepartmentQuery,useAddAcademicDepartmentMutation} = academicManagementApi;