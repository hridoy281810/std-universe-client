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
    fullName:string
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
  