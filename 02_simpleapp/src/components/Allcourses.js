import React,{useState} from 'react';


import Course from './Course';

const Allcourse = () => {

    const [cources, setCourses] = useState([
        {title: "Java Course", description: "This is demo"},

        {title: "Django Course", description: "This is demo"},

        {title: "React js Course", description: "This is demo"}
    ])

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>

            {
                cources.length > 0 ? cources.map((item)=> (
                    <Course cource = {item} />
                )) : "No Courses"
            }

        </div>
    )
}

export default Allcourse;