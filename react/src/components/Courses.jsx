import React, { useState } from "react";
import "./Courses.css";

const sampleCourses = [
  {
    code: "CS-101",
    title: "Intro to Computer Science",
    credits: "4.0",
    instructor: "Dr. Alan Turing",
    dept: "Engineering",
  },
  {
    code: "HIST-205",
    title: "Modern World History",
    credits: "3.0",
    instructor: "Prof. Barbara Tuchman",
    dept: "Humanities",
  },
  {
    code: "MATH-302",
    title: "Advanced Calculus II",
    credits: "4.0",
    instructor: "Dr. Emmy Noether",
    dept: "Mathematics",
  },
  {
    code: "BIO-110",
    title: "Cellular Biology",
    credits: "3.5",
    instructor: "Dr. Rosalind Franklin",
    dept: "Sciences",
  },
];

const sampleEnrollments = [
  {
    student: "Marcus Rivera",
    course: "Intro to Computer Science",
    date: "Aug 24, 2023",
    status: "Active",
  },
  {
    student: "Sophia Chen",
    course: "Cellular Biology",
    date: "Sep 01, 2023",
    status: "Completed",
  },
  {
    student: "Jordan Walker",
    course: "Advanced Calculus II",
    date: "Aug 15, 2023",
    status: "Active",
  },
  {
    student: "Elena Rodriguez",
    course: "Modern World History",
    date: "Sep 10, 2023",
    status: "Withdrawn",
  },
];

export default function Courses() {
  const [view, setView] = useState("courses");

  return (
    <div className="courses-page">
      <aside className="c-sidebar">
        <div className="brand">
          <h1>EduAdmin</h1>
          <div className="sub">Management Portal</div>
        </div>
        <nav className="c-nav">
          <a className="c-item">Dashboard</a>
          <a className="c-item">Students</a>
          <a className="c-item">Departments</a>
          <a className="c-item">Teachers</a>
          <a className="c-item active">Courses</a>
        </nav>
        <div className="c-footer">
          <a className="c-item">Settings</a>
          <a className="c-item">Logout</a>
        </div>
      </aside>

      <header className="c-topbar">
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input placeholder="Search resources..." />
        </div>
        <div className="profile">
          <div className="profile-text">
            <div className="name">Admin User</div>
            <div className="role">Super Admin</div>
          </div>
          <img
            className="avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDExm-rCO1-e4bbObdIPEUo26BLBSXLc7AE9AlgjnaXwU42pdpRoL25kD9BgwxvO_5uLs4W0Izq97YP0N-UdO4W5U_srrnuL1TdrsT12pVYsyT85rPFUbuGJqcoTCDyKLcJLgKUMYuUk4ZytaLLKI5HlalSYi0Zmk4Xf6QqUqCltCWTZgbSJrVkLT4JGOsxQLFkUzSKdB0rg66XcUmDpgDTQkVSGOFX4GYNPR0akVqdcS2eKZbWI7V3aR_Owj21vRWu5-vbwVYtaE-6"
            alt="avatar"
          />
        </div>
      </header>

      <main className="c-main">
        <div className="page-head">
          <div>
            <h2>Academic Catalog</h2>
            <p>
              Manage core offerings and monitor student enrollment lifecycle.
            </p>
          </div>
          <div className="view-toggle">
            <button
              className={view === "courses" ? "btn active" : "btn"}
              onClick={() => setView("courses")}
            >
              Courses
            </button>
            <button
              className={view === "enrollments" ? "btn active" : "btn"}
              onClick={() => setView("enrollments")}
            >
              Enrollments
            </button>
          </div>
        </div>

        {view === "courses" && (
          <section className="courses-view">
            <div className="list-head">
              <h3>
                <span className="material-symbols-outlined">menu_book</span>{" "}
                Active Course List
              </h3>
              <button className="primary">
                <span className="material-symbols-outlined">add</span> Add New
                Course
              </button>
            </div>
            <div className="card-table">
              <table>
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Assigned Teacher</th>
                    <th>Department</th>
                    <th className="right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCourses.map((c) => (
                    <tr key={c.code}>
                      <td>
                        <div className="course-cell">
                          <div className="icon-box">
                            <span className="material-symbols-outlined">
                              terminal
                            </span>
                          </div>
                          <div>
                            <div className="ctitle">{c.title}</div>
                            <div className="ccode">{c.code}</div>
                          </div>
                        </div>
                      </td>
                      <td>{c.credits} Credits</td>
                      <td>{c.instructor}</td>
                      <td>
                        <span className="dept-pill">{c.dept}</span>
                      </td>
                      <td className="right">
                        <button className="icon">more_vert</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {view === "enrollments" && (
          <section className="enrollments-view">
            <div className="list-head">
              <h3>
                <span className="material-symbols-outlined">
                  assignment_turned_in
                </span>{" "}
                Active Student Enrollments
              </h3>
              <div className="controls">
                <button className="ghost">
                  <span className="material-symbols-outlined">filter_alt</span>{" "}
                  Filter
                </button>
                <button className="primary">
                  <span className="material-symbols-outlined">
                    assignment_add
                  </span>{" "}
                  New Enrollment
                </button>
              </div>
            </div>
            <div className="card-table">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Enrollment Date</th>
                    <th>Status</th>
                    <th className="right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleEnrollments.map((e, i) => (
                    <tr key={i}>
                      <td>
                        <div className="student-cell">
                          <img
                            className="s-avatar"
                            src="https://via.placeholder.com/40"
                            alt=""
                          />
                          <div>
                            <div className="s-name">{e.student}</div>
                            <div className="s-id">ID: --</div>
                          </div>
                        </div>
                      </td>
                      <td>{e.course}</td>
                      <td>{e.date}</td>
                      <td>
                        <span
                          className={
                            "status " +
                            (e.status === "Active"
                              ? "active"
                              : e.status === "Completed"
                                ? "completed"
                                : "muted")
                          }
                        >
                          {e.status}
                        </span>
                      </td>
                      <td className="right">
                        <button className="icon">edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <div className="stats-grid">
          <div className="stat">
            <div>
              <div className="label">Total Courses</div>
              <div className="num">124</div>
            </div>
            <div className="note">
              <span className="material-symbols-outlined">trending_up</span> +8
              from last term
            </div>
          </div>

          <div className="stat">
            <div>
              <div className="label">Total Enrollments</div>
              <div className="num">3,842</div>
            </div>
            <div className="note">
              <span className="material-symbols-outlined">group</span> High
              capacity (92%)
            </div>
          </div>

          <div className="stat wide">
            <div>
              <div className="label">Growth Analytics</div>
              <div className="num">12% Enrollment Increase</div>
              <div className="muted">
                Strategic expansion in STEM departments
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="fab" aria-label="Add">
        {" "}
        <span className="material-symbols-outlined">add</span>{" "}
      </button>
    </div>
  );
}
