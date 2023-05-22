import React from "react";

const Course = (props) => {
  const {
    year,
    courseName,
    courseDetails,
    GitHub,
    certificate,
    multicertificates,
  } = props.courseData;
  return (
    // <div>
    //   <h4>
    //     {props.courseName} - {props.year}
    //   </h4>
    //   <h5>{props.courseDetails}</h5>
    //   <p>{props.Github}</p>
    // </div>
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{courseName}</h5>
        <h6 className="mi-resume-company">{courseDetails}</h6>
        <p>{GitHub && GitHub}</p>

        {certificate && (
          <a href={certificate} target="_blank">
            click here for the certificate
          </a>
        )}
        <p>
          {multicertificates &&
            multicertificates.map((certificate) => (
              <li key={certificate.id}>
                <a href={certificate.url} target="_blank">
                  {certificate.name}
                </a>
              </li>
            ))}
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Course;
