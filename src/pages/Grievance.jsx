import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StudentData from '../components/Grievance/StudentData'
import FacultyData from '../components/Grievance/FacultyData'

const Grievance = () => {
    const param = useParams().id.toLowerCase()
  return (
    <div>
        {
            param==="student"? <StudentData/> : <FacultyData/>
        }
    </div>
  )
}

export default Grievance