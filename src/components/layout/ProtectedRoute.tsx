import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { TUser, logout, selectCurrentToken,  } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
type TProtectedRoute={
  children:ReactNode
  role: string | undefined | null
}
const ProtectedRoute = ({children,role}:TProtectedRoute) => {
  console.log(role);
  const token = useAppSelector(selectCurrentToken)
let user;
console.log(user);

if(token){
  user = verifyToken(token)
}
   const dispatch = useAppDispatch()
    if(role !== undefined && role !== (user as TUser)?.role){
             dispatch(logout())
     return <Navigate to='/login' replace={true}/>
    }
    if(!token){
        return <Navigate to='/login' replace={true}/>
    }
  return children;
};
export default ProtectedRoute;