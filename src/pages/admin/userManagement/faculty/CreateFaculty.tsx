import { Button, Col, Divider, Input, Row,Form } from "antd";
import StdUniInput from "../../../../components/form/StdUniInput";
import StdUniSelect from "../../../../components/form/StdUniSelect";
import StdUniForm from "../../../../components/form/StdUniForm";
import StdUniDatePicker from "../../../../components/form/StdUniDatePicker";
import { bloodGroupsOptions, gendersOption } from "../../../../components/constants/global";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import {  useAddFacultyMutation } from "../../../../redux/features/admin/userManagement.api";
import { useGetAllDepartmentQuery } from "../../../../redux/features/admin/academicManagement.api";



// "password": "admin123",
const faculty= {
  "password": "faculty123",
  "faculty": {
      "designation":"Lecturer",
      "name": {
          "firstName": "Mridul ",
          "middleName": "Das",
          "lastName": "Rahman"
      },
      "gender":"male",
      "email":"faculty3@gmail.com",
      "dateOfBirth": "1990-01-01",
      "contactNo": "123",
      "emergencyContactNo": "123",
      "bloogGroup": "A+",
      "presentAddress": "123 Main St, Cityville",
      "permanentAddress": "456 Oak St, Townsville",
      "academicDepartment":"65b00fb010b74fcbd7a25d8e"
  }
}

const CreateFaculty = () => {
  const [addFaculty,{data,error}] = useAddFacultyMutation()
  console.log(data,error);
  const {data: dData, isLoading:dIsLoading} = useGetAllDepartmentQuery(undefined)
const departmentOptions =dData?.data?.map((item)=>({
  value: item._id,
  label: item.name
}))
  const onSubmit:SubmitHandler<FieldValues> =(data)=>{
  console.log(data);
  const facultyData = {
    password:"faculty123",
    admin :{
      designation: "Lecturer",
    ...data
    }
  }
  console.log(facultyData);
  
  const formData = new FormData()
  
  formData.append("data", JSON.stringify(facultyData))
   formData.append('file', data.profileImg)
   addFaculty(formData)

   }
    
  return (
    <Row style={{display:"flex", justifyContent:"center"}}>
        <Col>
      <StdUniForm onSubmit={onSubmit}  >
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
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <Controller name="profileImg" render={({field: {onChange,value, ...field}})=> (
          <Form.Item label="Picture">
            <Input type="file"
            value={value?.fileName}  
            {...field} 
            onChange={(e)=> onChange(e.target.files?.[0])}
            />
          </Form.Item>

        )}/>
        </Col>
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
export default CreateFaculty;