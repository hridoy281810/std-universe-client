import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import StdUniForm from "../../../../components/form/StdUniForm";
import StdUniInput from "../../../../components/form/StdUniInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import StdUniSelect from "../../../../components/form/StdUniSelect";
import { bloodGroupsOptions, gendersOption } from "../../../../components/constants/global";
import StdUniDatePicker from "../../../../components/form/StdUniDatePicker";
import { useGetAllDepartmentQuery, useGetAllSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation, useGetSingleStudentQuery, useUpdateStudentMutation } from "../../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../../typs";
import { useParams } from "react-router-dom";


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

const UpdateStudentData = () => {
  const [updateStudent, {data,error}] = useUpdateStudentMutation()
  console.log(data,error);
  const {studentId} = useParams()
  const {data:stdData,isLoading} = useGetSingleStudentQuery<TStudent >(studentId)
  console.log(stdData);
  
  // console.log(stdData?.data);
  // const { name } = stdData?.data ;
  // const uData = stdData?.data
  // const defaultValues = {
  //   name:{
  //     firstName: name.firstName,
  //     middleName: name.middleName,
  //     lastName: name.lastName,
  //   }
  // }

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
const id = stdData?.data?.id
console.log(id,'id');
  const onSubmit : SubmitHandler<FieldValues>=async(data)=>{
    console.log(data);
    
    try {
      const updatedStudentData = {
        student: data
      };
      if (!id) {
        console.error('Failed to update student: Missing ID');
        return;
      }
      await updateStudent({id, data: updatedStudentData} );
      
    } catch (error) {
      console.error('Failed to update student:', error);
    }
  }
  return (
    
    <Row style={{display: "flex", justifyContent: 'center'}}>
      <Col>
      <StdUniForm onSubmit={onSubmit} defaultValues={departmentOptions}>
      <Row gutter={8} >
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="contactNo"  label="Contact Number"/>
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="guardian.fatherOccupation"  label="Father Occupation"/>
        </Col>
      </Row >
        <Button htmlType="submit">Submit</Button>
      </StdUniForm>
      </Col>
    </Row>
  );
};

export default UpdateStudentData;