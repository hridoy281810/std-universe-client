import { FieldValues, SubmitHandler } from "react-hook-form";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniInput from "../../../components/form/StdUniInput";
import { Button, Col, Divider, Row } from "antd";

const studentDummyData = {
  "password": "student123",
  "student": {
      "name": {
          "firstName": "I am ",
          "middleName": "Student",
          "lastName": "Number 1"
      },
      "gender": "male",
      "dateOfBirth": "1990-01-01",
      "bloogGroup": "A+",

      "email": "student2@gmail.com",
      "contactNo": "1235678",
      "emergencyContactNo": "987-654-3210",
      "presentAddress": "123 Main St, Cityville",
      "permanentAddress": "456 Oak St, Townsville",
      "guardian": {
          "fatherName": "James Doe",
          "fatherOccupation": "Engineer",
          "fatherContactNo": "111-222-3333",
          "motherName": "Mary Doe",
          "motherOccupation": "Teacher",
          "motherContactNo": "444-555-6666"
      },
      "localGuardian": {
          "name": "Alice Johnson",
          "occupation": "Doctor",
          "contactNo": "777-888-9999",
          "address": "789 Pine St, Villageton"
      },
      "admissionSemester": "65b0104110b74fcbd7a25d92",
      "academicDepartment": "65b00fb010b74fcbd7a25d8e"
  }
}

const CreateStudent = () => {

  const onSubmit : SubmitHandler<FieldValues>=(data)=>{
    console.log(data);
    const formData = new FormData()
 formData.append('data',JSON.stringify(data))
 console.log(Object.fromEntries(formData));
 

    
  }
  return (
    
    <Row>
      <Col>
      <StdUniForm onSubmit={onSubmit}>
        <Divider>Personal Info</Divider>
      <Row gutter={8}>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="name.firstName"  label="First Name"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="name.middleName"  label="Middle Name"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="gender"  label="Gender"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="dateOfBirth"  label="Date of Birth"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="bloogGroup" label="Blood Group" />
        </Col>
      </Row>
        <Button htmlType="submit">Submit</Button>
      </StdUniForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;