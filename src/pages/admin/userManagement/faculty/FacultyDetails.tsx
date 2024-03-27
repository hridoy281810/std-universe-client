import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import {  useGetSingleFacultyQuery } from "../../../../redux/features/admin/userManagement.api";
import {  TFaculty} from '../../../../typs';
const FacultyDetails = () => {
const {facultyId} = useParams()
    const {data: facultyData,isLoading} = useGetSingleFacultyQuery<TFaculty >(facultyId)
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
 <>
    <Row  gutter={16} >
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Personal Info" bordered={false}>
      <p>Name: {  facultyData?.data.fullName}</p>
      <p>Date of Birth: {  facultyData?.data.dateOfBirth}</p>
      <p>Blood Group: {  facultyData?.data.bloogGroup}</p>
      <p>Gender: {  facultyData?.data.gender}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 12}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Contact Info" bordered={false}>
       <p>Email: {  facultyData?.data.email}</p>
       <p>Contact Number: {  facultyData?.data.contactNo}</p>
       <p>Emergency Contact Number: {  facultyData?.data.emergencyContactNo}</p>
       <p>Present Address: {  facultyData?.data.presentAddress}</p>
       <p>permanent Address: {  facultyData?.data.permanentAddress}</p>
      </Card>
    </Col>
  </Row>
 </>
);
};

export default FacultyDetails;
