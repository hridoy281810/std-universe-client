
import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType } from 'antd';
import {  TResponse, TSemester } from "../../../typs";
import { useGetAllRegisterSemesterQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { useState } from 'react';
import { toast } from 'sonner';
export type TTableData =Pick<TSemester,  "academicSemester" | "startDate" |"endDate" | "status" > 

const items = [
    {label: 'Upcoming', key: 'UPCOMING'},
    {label: 'Ongoing', key: 'ONGOING'},
    {label: 'Ended', key: 'ENDED'},
]
const RegisteredSemesters = () => {
  const {data: semesterData,isLoading,isFetching} =  useGetAllRegisterSemesterQuery(undefined)
  const [semesterId,setSemesterId] = useState('')
  console.log(semesterId,'new');
  const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation()
  const tableData = semesterData?.data?.map(({_id,academicSemester,startDate,endDate,status})=> ({
    key: _id,name:`${academicSemester.name} ${academicSemester.year}`,
    startDate: moment(new Date(startDate)).format("MMMM - YYYY"),
    endDate: moment(new Date(endDate)).format("MMMM - YYYY"),
    status
  }))
const handleStatusUpdate = async(data:TSemester)=>{
    console.log("semester",semesterId);
    console.log("newStatus",data.key);
    const updateData = {
      id:semesterId,
      data: {
        status: data.key 
      }
    }
    const toastId = toast.loading("Creating...")
    try{
      console.log(semesterData);
      const res =  (await updateRegisteredSemester(updateData) )as TResponse<TSemester>
      console.log(res);
      if(res.error){
        toast.error(`${res.error.data.message}`,{id:toastId})
      }else{
        toast.success("Semester Created!",{id:toastId})
      }
      
    }catch(err){
 toast.error("something went wrong",{id:toastId})
  
    }
  
}
  const menuProps= {
    items,
    onClick: handleStatusUpdate  
  }
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    key: "name",
    dataIndex: 'name',
   
   
  },
  {
    title: 'Status',
    key: "status",
    dataIndex: 'status',
    render:(item)=> {
        let color;
        if(item==='UPCOMING'){
            color='blue'
        }
        if(item==='ONGOING'){
            color='green'
        }
        if(item==='ENDED'){
            color='red'
        }
        return <Tag color={color}>{item}</Tag>
    },
  },
  {
    title: 'Start Date',
    key: "startDate",
    dataIndex: 'startDate',
   
  },
  {
    title: 'End Month',
    key: "endDate",
    dataIndex: 'endDate',
   
  },
  {
    title: 'Action',
    key: "X",
   render:(item)=>{
    return(
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button onClick={()=> setSemesterId(item.key)
        }>Update</Button>
      </Dropdown>
    )
   },
   
  },
];


// const onChange: TableProps<TTableData>['onChange'] = (_pagination,filters,_sorter,  extra) => {
// if(extra.action === "filter"){
//     const queryParams:TQueryParam[] = [];
//     filters.name?.forEach((item) => (
//       queryParams.push({name: "name",value: item})
//     ));
//     filters.year?.forEach((item) => (
//       queryParams.push({name: "year",value: item})
//     ));
//     setParams(queryParams)
// }
// };
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <Table  scroll={{ x: 10}}loading={isFetching} columns={columns} dataSource={tableData}  />
  );
};


export default RegisteredSemesters;