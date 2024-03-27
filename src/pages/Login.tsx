import { Button, Row } from 'antd';
import { FieldValues} from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import StdUniForm from '../components/form/StdUniForm';
import StdUniInput from '../components/form/StdUniInput';

const Login = () => {
  const navigate = useNavigate()
 const dispatch = useAppDispatch()
  // const {register} = useForm()
    const [login] = useLoginMutation()
    const defaultValues = {
      id: "2025010001",
      password: "student123"
    }
  const onSubmit = async(data: FieldValues) => {
    console.log(data);
   const toastId = toast.loading('logging in')
  try{
    const userInfo = {
      id: data.id,
      password: data.password
     }
     const res =  await login(userInfo).unwrap()
     const user = verifyToken(res.data.accessToken) as TUser;
     console.log(user);
     dispatch(setUser({user: user, token: res.data.accessToken}))
     toast.success('logged in',{id:toastId,duration:2000})
     navigate(`/${user.role}/dashboard`)
  }catch(error){
toast.error('something went wrong',{id:toastId,duration:2000})
  }
  }
  return (
   <Row justify="center" align="middle" style={{height:'100vh'}}>
   <StdUniForm onSubmit={onSubmit} defaultValues={defaultValues} >
        <StdUniInput type='text'  name='id' label="ID:"/>
 <StdUniInput type='text'  name='password' label="Password:"/>
      <Button htmlType='submit'> submit</Button>
   </StdUniForm>
   </Row>
  
  );
};

export default Login;