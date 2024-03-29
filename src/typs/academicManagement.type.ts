
export type TAcademicSemester = {
    _id: string
    name: string
    year: string
    code: string
    startMonth: string
    endMonth: string
    updatedAt: string
    createdAt: string
    __v: number
    data:TAcademicDepartment
  }
  export type TAcademicFaculty ={ 
    _id: string,
    name: string,
    createdAt: string,
    updatedAt:string,
    __v:number,
      } 

export type TAcademicDepartment = {
  _id: string,
  name: string,
  academicFaculty:string,
  createdAt: string,
  updatedAt:string,
  __v:number,
}