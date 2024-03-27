import { TAcademicDepartment, TAcademicSemester } from "."


  export type TStudent= {
    _id: string
    id:string
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    admissionSemester: TAcademicSemester
    academicDepartment: TAcademicDepartment
    isDeleted: boolean
    fullName:string,
    isLoading: boolean,
    data: TStudent
  }
  
  export type TName= {
    firstName: string
    middleName: string
    lastName: string
  }
  
  export type TGuardian= {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherOccupation: string
    motherContactNo: string
  }
  
  export type TLocalGuardian= {
    name: string
    occupation: string
    contactNo: string
    address: string
  }
  

  export type TAdmin =  {
    _id: string
    id:string
    user:string
    password: string
    designation: string
    name: TName
    gender: string
    dateOfBirth: string
    bloogGroup: string
    email: string
    contactNo: string
    emergencyContactNo: string
    presentAddress: string
    permanentAddress: string,
    fullName:string,
    isDeleted:boolean
    isLoading:boolean
    data:TAdmin
    map:any
__v:number
  }

  export type TFaculty = {
    password: string
    _id: string
    id:string
    user:string
    designation: string
    name: TName
    gender: string
    email: string
    dateOfBirth: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    academicDepartment: TAcademicDepartment
    fullName:string,
    isDeleted:boolean
    isLoading:boolean
    data:TFaculty
    map:any
__v:number
  }
