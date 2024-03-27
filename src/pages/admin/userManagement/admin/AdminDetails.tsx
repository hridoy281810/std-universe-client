import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { useGetSingleAdminQuery } from "../../../../redux/features/admin/userManagement.api";
import {  TAdmin} from '../../../../typs';
const AdminDetails = () => {
    const {adminId} = useParams()
    const {data: adminData,isLoading} = useGetSingleAdminQuery<TAdmin>(adminId)
    console.log(adminData);
    
  if(isLoading){
    return <p>Loading...</p>
  }

  return (
 <>
    <Row  gutter={16} >
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Personal Info" bordered={false}>
      <p>Name: {adminData?.data?.fullName}</p>
      <p>Date of Birth: {adminData?.data?.dateOfBirth}</p>
      <p>Blood Group: {adminData?.data?.bloogGroup}</p>
      <p>Gender: {adminData?.data?.gender}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Contact Info" bordered={false}>
       <p>Email: {adminData?.data?.email}</p>
       <p>Contact Number: {adminData?.data?.contactNo}</p>
       <p>Emergency Contact Number: {adminData?.data?.emergencyContactNo}</p>
       <p>Present Address: {adminData?.data?.presentAddress}</p>
       <p>permanent Address: {adminData?.data?.permanentAddress}</p>
      </Card>
    </Col>
  </Row>
 </>
);
};


export default AdminDetails;