import { Button, Row } from 'antd';
import StdUniForm from '../components/form/StdUniForm';
import StdUniInput from '../components/form/StdUniInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { useChangePasswordMutation } from '../redux/features/admin/userManagement.api';

import { TResponse } from '../typs';
import {  useNavigate } from 'react-router-dom';
import { logout } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
       console.log(data);
       const toastId = toast.loading("Changing...")
       
        const res =  (await changePassword(data)) as TResponse<any>;
         console.log(res);
         if(res?.data?.success === true){
             toast.success(res.data.message,{id:toastId}) 
             dispatch(logout())
            // return <Navigate to='/login' replace={true} />
            navigate('/login')
         }
         if(res?.data?.success === false){
            toast.success(res.data.message,{id:toastId}) 
         }
        
    }
   
  return (
    <Row justify="center" align="middle" style={{height:'100vh'}}>
    <StdUniForm onSubmit={onSubmit}  >
  <StdUniInput type='text'  name='oldPassword' label="Old Password:"/>
  <StdUniInput type='text'  name='newPassword' label="New Password:"/>
       <Button htmlType='submit'> submit</Button>
    </StdUniForm>
    </Row>
  );
};

export default ChangePassword;