
 export type TMyOfferedCourse = {
    _id: string;
    semesterRegistration: string;
    academicSemester: string;
    academicFaculty: string;
    academicDepartment: string;
    course: TCourse1;
    faculty: string;
    maxCapacity: number;
    section: number;
    days: string[];
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    enrolledCourses: any[];
    completedCourses: any[];
    completedCourseIds: any[];
    isPreRequisitesFulFilled: boolean;
    isAlreadyEnrolled: boolean;
  };
  
 export type TCourse1 = {
    _id: string;
    title: string;
    prefix: string;
    code: number;
    credits: number;
    preRequisiteCourses: any[];
    isDeleted: boolean;
    __v: number;
  };

 export type TMyEnrollCourses = {
    _id: string;
    semesterRegistration: TSemesterRegistration;
    academicSemester: TAcademicSemester;
    academicFaculty: TAcademicFaculty;
    academicDepartment: TAcademicDepartment;
    offeredCourse: TOfferedCourse;
    course: TCourse;
    student: TStudent;
    faculty: TFaculty;
    isEnrolled: boolean;
    courseMarks: TCourseMarks;
    grade: string;
    gradePoints: number;
    isCompleted: boolean;
  } | undefined
  
  type TSemesterRegistration = {
    _id: string;
    academicSemester: string;
    status: string;
    startDate: string;
    endDate: string;
    minCredit: number;
    maxCredit: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  type TAcademicSemester = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  type TAcademicFaculty = {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  type TAcademicDepartment = {
    _id: string;
    name: string;
    academicFaculty: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  type TOfferedCourse = {
    _id: string;
    semesterRegistration: string;
    academicSemester: string;
    academicFaculty: string;
    academicDepartment: string;
    course: string;
    faculty: string;
    maxCapacity: number;
    section: number;
    days: string[];
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  type TCourse = {
    _id: string;
    title: string;
    prefix: string;
    code: number;
    credits: number;
    preRequisiteCourses: any[];
    isDeleted: boolean;
    __v: number;
  };
  
  type TStudent = {
    _id: string;
    id: string;
    user: string;
    name: TName;
    gender: string;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloogGroup: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg: string;
    admissionSemester: string;
    isDeleted: boolean;
    academicDepartment: string;
    academicFaculty: string;
    __v: number;
    fullName: string;
  };
  
  type TName = {
    firstName: string;
    middleName: string;
    lastName: string;
    _id: string;
  };
  
  type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    _id: string;
  };
  
  type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
    _id: string;
  };
  
  type TFaculty = {
    _id: string;
    id: string;
    user: string;
    designation: string;
    name: TName2;
    gender: string;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: string;
    presentAddress: string;
    permanentAddress: string;
    profileImg: string;
    academicDepartment: string;
    academicFaculty: string;
    isDeleted: boolean;
    __v: number;
    fullName: string;
  };
  
  type TName2 = {
    firstName: string;
    middleName: string;
    lastName: string;
    _id: string;
  };
  
  type TCourseMarks = {
    classTest1: number;
    midTerm: number;
    classTest2: number;
    finalTerm: number;
  };
  
  