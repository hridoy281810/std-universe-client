
import { useGetAllMyEnrollCoursesQuery } from '../../redux/features/student/studentCourseManagement.api';
import { Descriptions, DescriptionsProps } from 'antd';

const MySchedule = () => {
    const {data: enrollCourseData,isFetching,isLoading} = useGetAllMyEnrollCoursesQuery(undefined)
    console.log(enrollCourseData?.data);

  if(isFetching||isFetching){
    return <p>Loading...</p>
  }
    const items: DescriptionsProps['items'] = [
        {
            label: 'Name',
            children: <p>{enrollCourseData?.data?.[0]?.student?.fullName ?? 'Name Not Available'}</p>,
        },
        {
            label: 'Roll',
            children: <p>{enrollCourseData?.data?.[0]?.student?.id ?? 'Roll Not Available'}</p>,
        },
        {
            label: 'Department',
            children: <p>{enrollCourseData?.data?.[0]?.academicDepartment?.name ?? 'Department Name Not Available'}</p>,
        },
        {
            label: 'Section',
            children: <p>{enrollCourseData?.data?.[0]?.offeredCourse?.section ?? 'Section Not Available'}</p>,
        },
        {
          label: 'Semester Info',
          span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
          children: (
            <>
             {
enrollCourseData?.data?.map((item)=>(
    <div  key={item!._id}>
        <p>Semester Name: {item?.academicSemester?.name}</p>
        <p>Year: {item?.academicSemester?.year}</p>
        <p>Start Month: {item?.academicSemester?.startMonth}</p>
        <p>End Month: {item?.academicSemester?.endMonth}</p>
    </div>
))
             }
            </>
          ),
        },
        {
          label: 'Course Info',
          span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
          children: (
            <>
             {
enrollCourseData!.data?.map((item)=>(
    <div  key={item!._id}>
        <p>Course Title: {item?.course?.title}</p>
        <p>Prefix: {item?.course?.prefix}</p>
        <p>Course Code: {item?.course?.code}</p>
        <p>Credits: {item?.course?.credits}</p>
    </div>
))
             }
            </>
          ),
        },
        {
          label: 'Class Info',
          span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
          children: (
            <>
             {
enrollCourseData!.data?.map((item)=>(
    <div  key={item!._id}>
        <p>Section: {item?.offeredCourse?.section}</p>
        <p>Class Days: {item!.offeredCourse.days.map((day,i)=>(
            <span key={i}>{day}, {' '}</span>
            ))}
        </p>
            <p>Start Time: {item?.offeredCourse?.startTime}</p>
            <p>End Time: {item?.offeredCourse?.endTime}</p>

    </div>
))
             }
            </>
          ),
        },
        {
            label: 'Faculty Info',
            span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
            children: (
              <>
               {
enrollCourseData!.data?.map((item)=>(
      <div  key={item!._id}>
          <p>Faculty Name: {item?.faculty?.fullName}</p>
          <p>Designation: {item?.faculty?.designation}</p>
          <p>Gender: {item?.faculty?.gender}</p>
          <p>Email: {item?.faculty?.email}</p>
          <p>Contact No: {item?.faculty?.contactNo}</p>
      </div>
  ))
               }
              </>
            ),
          },
        {
            label: 'Course Marks',
            span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
            children: (
              <>
               {
enrollCourseData!.data?.map((item)=>(
      <div  key={item!._id}>
          <p>Class Test1: {item?.courseMarks?.classTest1}</p>
          <p>Class Test2: {item?.courseMarks?.classTest2}</p>
          <p>Mid Term: {item?.courseMarks?.midTerm}</p>
          <p>Final Term: {item?.courseMarks?.finalTerm}</p>
          <p>Grade Points: {item?.gradePoints}</p>
          <p>Grade: {item?.grade}</p>
      </div>
  )) 
               }
              </>
            ),
          },
        {
            label: 'Student Info',
            span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
            children: (
              <>
               {
enrollCourseData!.data?.map((item)=>(
      <div key={item!._id}>
          <p>name: {item?.student?.fullName}</p>
          <p>Email: {item?.student?.email}</p>
          <p>Student Contact No: {item?.student?.contactNo}</p>
          <p>Blood Group: {item?.student?.bloogGroup}</p>
          <p>Permanent Address: {item?.student?.permanentAddress}</p>
          <p>Present Address: {item?.student?.presentAddress}</p>
          <p>Father Name: {item?.student?.guardian?.fatherName}</p>
          <p>Mother Name: {item?.student?.guardian?.motherName}</p>
          <p>Father ContactNo: {item?.student?.guardian?.fatherContactNo}</p>
      </div>
  ))
               }
              </>
            ),
          },
      
      ];
  
  return (
    <Descriptions
    bordered
    column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
    items={items}
  />
  );
};

export default MySchedule;