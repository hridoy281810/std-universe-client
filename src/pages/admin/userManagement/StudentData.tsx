import{ useState } from 'react';
import { Button, Pagination, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TQueryParam, TStudent } from "../../../typs";
import { useGetAllStudentQuery, useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";
export type TTableData =Pick<TStudent,  "fullName" | "id">
type TFilter = {
  name:string,
  value:string
}
const StudentData = () => {
  const [params,setParams] = useState<TQueryParam[]>([])
  const [page,setPage] = useState(1)
  const {data: studentData,isLoading,isFetching} =  useGetAllStudentQuery([
    {name:'limit',value:4},
    {name: 'page', value:page},
    {name: 'sort', value:'id'},
    ...params,
  ])
  const {getSingleStudent} = useGetSingleStudentQuery(undefined)
const metaData = studentData?.meta;
console.log(metaData);

  const tableData = studentData?.data?.map(({_id,fullName,id,email,contactNo})=> ({
    key: _id,fullName,id,email,contactNo
  }))

const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    key: "fullName",
    dataIndex: 'fullName',
  },
  {
    title: 'Roll No',
    key: "id",
    dataIndex: 'id',
  },
  {
    title: 'Email',
    key: "email",
    dataIndex: 'email',
  },
  {
    title: 'Contact No',
    key: "contactNo",
    dataIndex: 'contactNo',
  },

  {
    title: 'Action',
    key: "X",
   render:()=>{
    return(
      <Space>
        <Button onClick={()=>getSingleStudent(tableData?.data._id)}>Details</Button>
        <Button>Update</Button>
        <Button>Block</Button>
      </Space>
    )
   },
   width: "1%"
  },
];


const onChange: TableProps<TTableData>['onChange'] = (_pagination,filters,_sorter,  extra) => {
if(extra.action === "filter"){
    const queryParams:TQueryParam[] = [];
    filters.name?.forEach((item) => (
      queryParams.push({name: "name",value: item})
    ));
    filters.year?.forEach((item) => (
      queryParams.push({name: "year",value: item})
    ));
    setParams(queryParams)
}
};
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <>
    <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} pagination={false} />
<Pagination current={page}  onChange={(value)=> setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
    </>
  );
};

export default StudentData;