import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { useGetAllAdminQuery } from "../../../../redux/features/admin/userManagement.api";
import {  TAdmin} from '../../../../typs';
const AdminDetails = () => {
    const {studentId} = useParams()
    const {data: studentData,isLoading} = useGetAllAdminQuery<TAdmin>(studentId)
    console.log(studentData);
    
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
 <>
{ studentData?.data?.map((item:TAdmin)=> (
    <Row  gutter={16} >
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Personal Info" bordered={false}>
      <p>Name: {item?.fullName}</p>
      <p>Date of Birth: {item?.dateOfBirth}</p>
      <p>Blood Group: {item?.bloogGroup}</p>
      <p>Gender: {item?.gender}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Contact Info" bordered={false}>
       <p>Email: {item?.email}</p>
       <p>Contact Number: {item?.contactNo}</p>
       <p>Emergency Contact Number: {item?.emergencyContactNo}</p>
       <p>Present Address: {item?.presentAddress}</p>
       <p>permanent Address: {item?.permanentAddress}</p>
      </Card>
    </Col>
   
   
  </Row>
))   }
 </>
);
};


export default AdminDetails;