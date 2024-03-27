import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { logout, selectCurrentToken, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
type TProtectedRoute={
  children:ReactNode
  role:string | undefined
}
const ProtectedRoute = ({children,role}:TProtectedRoute) => {
  console.log(role);
   const user = useSelector(selectCurrentUser)
   console.log(user);
   const dispatch = useAppDispatch()
    const token = useAppSelector(selectCurrentToken)
    // console.log(token);
    if(role !== undefined && role !== user?.role){
             dispatch(logout())
     return <Navigate to='/login' replace={true}/>
    }
    if(!token){
        return <Navigate to='/login' replace={true}/>
    }
  return children;
};

export default ProtectedRoute;