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
      }) ,
})

export const {useAddStudentMutation ,useGetAllStudentQuery,useGetSingleStudentQuery} = userManagementApi;