import {FieldValues, SubmitHandler } from "react-hook-form";
import StdUniForm from "../../../../components/form/StdUniForm";
import StdUniInput from "../../../../components/form/StdUniInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import StdUniSelect from "../../../../components/form/StdUniSelect";
import { bloodGroupsOptions, gendersOption } from "../../../../components/constants/global";
import StdUniDatePicker from "../../../../components/form/StdUniDatePicker";
import { useGetAllDepartmentQuery, useGetAllSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../../redux/features/admin/userManagement.api";


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
      "bloodGroup": "A+",

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
const  studentDefaultValues = {

    "name": {
        "firstName": "I am ",
        "middleName": "Student",
        "lastName": "Number 1"
    },
    "gender": "male",

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

}

const CreateStudent = () => {
  const [addStudent, {data,error}] = useAddStudentMutation()
  console.log(data,error);
  
const {data: sData, isLoading:sIsLoading} = useGetAllSemesterQuery(undefined)
const semesterOptions =sData?.data?.map((item)=>({
  value: item._id,
  label: `${item.name} ${item.year}`
}))
const {data: dData, isLoading:dIsLoading} = useGetAllDepartmentQuery(undefined)
const departmentOptions =dData?.data?.map((item)=>({
  value: item._id,
  label: item.name
}))
  const onSubmit : SubmitHandler<FieldValues>=async(data)=>{
    console.log(data);
    const studentData = {
      password:'student123',
      student: data
    }
    const formData = new FormData()
 formData.append('data',JSON.stringify(studentData))
//  formData.append('file', data.profileImg)
 addStudent(formData)
 
  }
  return (
    
    <Row style={{display: "flex", justifyContent: 'center'}}>
      <Col>
      <StdUniForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
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
        <StdUniSelect options={gendersOption} name="gender" label="Gender" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniDatePicker name="dateOfBirth"  label="Date of Birth"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniSelect options={bloodGroupsOptions} name="bloogGroup" label="Blood Group" />
        </Col>
        {/* <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <Controller name="profileImg" render={({field: {onChange,value, ...field}})=> (
          <Form.Item label="Picture">
            <Input type="file"
            value={value?.fileName}  
            {...field} 
            onChange={(e)=> onChange(e.target.files?.[0])}
            />
          </Form.Item>

        )}/>
        </Col> */}
      </Row>
        <Divider>Contact Info</Divider>
      <Row gutter={8}>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="email" name="email"  label="Email"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="contactNo"  label="Contact Number"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="emergencyContactNo" label="Emergency Contact Number" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="presentAddress "  label="Present Address"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="permanentAddress "  label="permanent Address"/>
        </Col>
      </Row>
        <Divider>Guardian</Divider>
      <Row gutter={8}>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="guardian.fatherName"  label="Father Name"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="guardian.fatherOccupation"  label="Father Occupation"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="guardian.fatherContactNo " label="Father Contact Number" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="guardian.motherName "  label="Mother Name"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="guardian.motherOccupation "  label="Mother Occupation"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="guardian.motherContactNo "  label="Mother Contact Number"/>
        </Col>
      </Row>
        <Divider>Local Guardian</Divider>
      <Row gutter={8}>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="localGuardian.name"  label="Name"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="localGuardian.occupation"  label="Occupation"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="localGuardian.contactNo" label="Contact Number" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="localGuardian.address "  label="Address"/>
        </Col>
      </Row>
        <Divider>Academic Info</Divider>
      <Row gutter={8}>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniSelect disabled={sIsLoading} options={semesterOptions} name="admissionSemester" label="Admission Semester" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniSelect disabled={dIsLoading} options={departmentOptions} name="academicDepartment" label="Academic Department" />
        </Col>
      </Row>
        <Button htmlType="submit">Submit</Button>
      </StdUniForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;