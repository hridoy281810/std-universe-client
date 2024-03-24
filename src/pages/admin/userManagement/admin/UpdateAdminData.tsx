import { FieldValues, SubmitHandler } from "react-hook-form";
import StdUniForm from "../../../../components/form/StdUniForm";
import StdUniInput from "../../../../components/form/StdUniInput";
import { Button, Col, Row } from "antd";

import { useGetSingleAdminQuery,  useUpdateAdminMutation } from "../../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../../typs";
import { useParams } from "react-router-dom";


const UpdateAdminData = () => {
  const [updateAdmin, {data,error}] = useUpdateAdminMutation()
  console.log(data,error);
  const {studentId} = useParams()
  const {data:stdData,isLoading} = useGetSingleAdminQuery<TStudent >(studentId)
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


const id = stdData?.data?.id
console.log(id,'id');
  const onSubmit : SubmitHandler<FieldValues>=async(data)=>{
    console.log(data);
    
    try {
      const updatedAdminData = {
        student: data
      };
      if (!id) {
        console.error('Failed to update student: Missing ID');
        return;
      }
      await updateAdmin({id, data: updatedAdminData} );
      
    } catch (error) {
      console.error('Failed to update student:', error);
    }
  }
  return (
    
    <Row style={{display: "flex", justifyContent: 'center'}}>
      <Col>
      <StdUniForm onSubmit={onSubmit} >
      <Row gutter={8} >
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput type="text" name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={{span: 12}} lg={{span: 8}}>
        <StdUniInput  type="text"  name="contactNo"  label="Contact Number"/>
        </Col>
       
      </Row >
        <Button htmlType="submit">Submit</Button>
      </StdUniForm>
      </Col>
    </Row>
  );
};


export default UpdateAdminData;