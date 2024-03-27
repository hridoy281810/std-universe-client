import{ useState } from 'react';
import { Button, Pagination, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TFaculty, TQueryParam } from "../../../../typs";
import {useGetAllFacultyQuery} from "../../../../redux/features/admin/userManagement.api";
import { Link } from 'react-router-dom';
export type TTableData =Pick<TFaculty,  "fullName" | "id">
type TFilter = {
  name:string,
  value:string
}
const FacultyData = () => {
  const [params,setParams] = useState<TQueryParam[]>([])
  const [page,setPage] = useState(1)
  const {data: studentData,isLoading,isFetching} =  useGetAllFacultyQuery([
    {name:'limit',value:4},
    {name: 'page', value:page},
    {name: 'sort', value:'id'},
    ...params,
  ])

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
    title: 'Faculty Id',
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
   render:(item)=>{
    return(
      <Space>
        <Link to={`/admin/faculty-data/${item.key}`}><Button >Details</Button></Link>
        <Link to={`/admin/update-faculty-data/${item.key}`}><Button >Update</Button></Link>
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

export default FacultyData;