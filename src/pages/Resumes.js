import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import Course from "../components/Course";
function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [relevantProjects, setRelevantProjects] = useState([]);
  const [relevantCourses, setRelevantCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
      setRelevantCourses(response.data.relevantCourses);
      setRelevantProjects(response.data.relevantProjects);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>NaveenDK </title>
        <meta name="description" content="NaveenDK - Full Stack Developer" />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        {/*<div className="mi-skills-area mi-section mi-padding-top">
         <div className="container">
            <Sectiontitle title="My Skills" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {skills.map((skill) => (
                  <TrackVisibility
                    once
                    className="col-lg-6 mt-30"
                    key={skill.title}
                  >
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Resume" />
            <div className="mt-30"></div>
       
            <Smalltitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            <Smalltitle title="Relevant Courses" icon="book" />

            
{/* <div className="mi-resume-wrapper">
  {educationExperience.map((educatonExp) => (
    <Resume key={educatonExp.id} resumeData={educatonExp} />
  ))}
</div> */}
<div className="mi-resume-wrapper">
  {relevantCourses.map((course) => (
    <Course key={course.id} courseData={course} />
  ))}
</div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Resumes;
