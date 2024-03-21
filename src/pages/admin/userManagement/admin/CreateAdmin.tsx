import { Button, Col, Divider, Row } from "antd";
import StdUniInput from "../../../../components/form/StdUniInput";
import StdUniSelect from "../../../../components/form/StdUniSelect";
import StdUniForm from "../../../../components/form/StdUniForm";
import StdUniDatePicker from "../../../../components/form/StdUniDatePicker";
import { bloodGroupsOptions, gendersOption } from "../../../../components/constants/global";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAdminMutation } from "../../../../redux/features/admin/userManagement.api";


// "password": "admin123",
const admin = {
   "password":"134",
      "admin": {
        "designation": "Admin",
      "name": {
          "firstName": "Mr. Mezbaul",
          "middleName": "Abedin",
          "lastName": "Forhan"
      },
      "gender": "male",
      "dateOfBirth": "1998-04-24",
      "bloogGroup": "O+",
      
      "email": "mezbaul2@programming-hero.com",
      "contactNo": "12356789",
      "emergencyContactNo": "12356789",
      "presentAddress": "123 Main St, Cityville",
      "permanentAddress": "456 Oak St, Townsville"
      }
  }


const CreateAdmin = () => {
  const [addAdmin,{data,error}] = useAddAdminMutation()
  console.log(data,error);
  
  const onSubmit:SubmitHandler<FieldValues> =(data)=>{
  console.log(data);
  const adminData = {
    password:"admin123",
    admin :{
      designation: "Admin",
    ...data
    }
  }
  console.log(adminData);
  
  const formData = new FormData()
  formData.append("data", JSON.stringify(adminData))
  addAdmin(formData)

  
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
        <Button htmlType="submit">Submit</Button>
      </StdUniForm>
      </Col>
    </Row>
  );
};

export default CreateAdmin;