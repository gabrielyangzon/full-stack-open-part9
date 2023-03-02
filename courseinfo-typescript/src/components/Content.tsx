import React from "react";
import { Course } from "../models/Course";

interface Props {
  courses: Array<Course>;
}

const Content = (props: Props) => {
  const { courses } = props;

  const comp = courses.map((course) => {
    const { name, exerciseCount, kind, ...rest } = course;

    return (
      <div key={name} style={styles.child}>
        <p style={styles.head}>
          {name} {exerciseCount}
        </p>

        {Object.values(rest).map((val) => {
          if (Array.isArray(val)) {
            return (
              <ul key={new Date().getTime()}>
                {val.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            );
          }

          return <p key={val}>{val}</p>;
        })}
      </div>
    );
  });

  return <div style={styles.container}>{comp}</div>;
};

const styles = {
  container: {},
  child: {
    border: "1px solid",
    width: "500px",
    padding: "10px",
    marginBottom: "10px",
  },
  head: {
    fontWeight: "bold",
  },
  body: {},
};

export default Content;
