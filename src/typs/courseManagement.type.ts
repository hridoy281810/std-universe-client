import { TAcademicSemester, TFaculty } from "."
export type TSemester = {
    _id: string
    academicSemester: TAcademicSemester
    name: string
    status: string
    startDate: string
    endDate: string
    minCredit: number
    maxCredit: number
    createdAt: string
    updatedAt: string
    key?: string
    __vr: number
}
export type TOfferedCourses = {
    _id: string
    semesterRegistration: string
    academicSemester: string
    academicFaculty: string
    academicDepartment: string
    course: string
    faculty: string
    maxCapacity: number
    section: number
    days: string[]
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
}
export type TSingleFaculties = {
    course: string,
    __v: number
    _id: string
    faculties: TFaculty

}
export type TAllCourses = {
        _id: string
        title: string
        prefix: string
        code: number
        credits: number
        isDeleted: boolean
        preRequisiteCourses: PreRequisiteCourse[]
}
export type PreRequisiteCourse =  {
    isDeleted: boolean
  }
