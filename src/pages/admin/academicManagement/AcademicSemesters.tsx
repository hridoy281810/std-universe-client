import { useGetAllSemesterQuery } from "../../../redux/features/academicsemester/academicSemesterApi";

const AcademicSemesters = () => {
  const {data} =  useGetAllSemesterQuery('')
  console.log(data);
  
  return (
    <div>
      AcademicSemesters
    </div>
  );
};

export default AcademicSemesters;