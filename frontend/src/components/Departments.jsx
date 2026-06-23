import React, { useState } from "react";
import "./Departments.css";

const departmentsData = [
  {
    id: "cs",
    name: "Computer Science",
    icon: "terminal",
    description:
      "Focusing on artificial intelligence, software engineering, and data structures.",
    students: 1240,
    teachers: 42,
    tag: "High Growth",
  },
  {
    id: "eng",
    name: "Engineering",
    icon: "precision_manufacturing",
    description:
      "Mechanical, electrical, and civil engineering disciplines with lab focus.",
    students: 850,
    teachers: 31,
    tag: "Stable",
  },
  {
    id: "bus",
    name: "Business School",
    icon: "query_stats",
    description:
      "Management, marketing, and finance departments with executive tracks.",
    students: 2100,
    teachers: 58,
    tag: "High Revenue",
  },
  {
    id: "math",
    name: "Mathematics",
    icon: "calculate",
    description:
      "Pure and applied mathematics covering theoretical research and analytics.",
    students: 420,
    teachers: 18,
    tag: "Stable",
  },
];

const sampleRoster = [
  {
    name: "Dr. Julianne Mercer",
    email: "j.mercer@eduadmin.edu",
    dept: "Computer Science",
    courses: ["CS101", "AI_ADV"],
    status: "Active",
  },
  {
    name: "Marcus Sterling",
    email: "m.sterling@eduadmin.edu",
    dept: "Engineering",
    courses: ["ENG_302", "ROBO_2"],
    status: "Active",
  },
  {
    name: "Sarah Chen",
    email: "s.chen@eduadmin.edu",
    dept: "Business School",
    courses: ["MGT_500", "ECON_A"],
    status: "On Leave",
  },
];

export default function Departments() {
  const [tab, setTab] = useState("departments");

  return (
    <div className="dept-page">
      <aside className="dept-sidebar">
        <div className="brand">
          <h1>EduAdmin</h1>
          <div className="sub">Management Portal</div>
        </div>
        <nav className="nav">
          <a className="nav-item">Dashboard</a>
          <a className="nav-item">Students</a>
          <a className="nav-item active">Departments</a>
          <a className="nav-item">Teachers</a>
          <a className="nav-item">Courses</a>
        </nav>
        <div className="footer">
          <a className="nav-item">Settings</a>
          <a className="nav-item">Logout</a>
        </div>
      </aside>

      <header className="dept-topbar">
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input placeholder="Search departments, teachers, or courses..." />
        </div>
        <div className="profile">
          <div className="profile-text">
            <div className="name">Admin User</div>
            <div className="role">Super Administrator</div>
          </div>
          <div className="avatar">
            <img src={departmentsData[0].avatar} alt="avatar" />
          </div>
        </div>
      </header>

      <main className="dept-main">
        <div className="page-header">
          <div>
            <h2>Institution Directory</h2>
            <p>
              Manage organizational structure and academic faculty profiles.
            </p>
          </div>
          <div className="actions">
            <button className="ghost">
              <span className="material-symbols-outlined">download</span>
              EXPORT DATA
            </button>
            <button className="primary">
              <span className="material-symbols-outlined">add</span>
              NEW ENTRY
            </button>
          </div>
        </div>

        <div className="tabs">
          <button
            className={tab === "departments" ? "tab active" : "tab"}
            onClick={() => setTab("departments")}
          >
            DEPARTMENTS
          </button>
          <button
            className={tab === "teachers" ? "tab active" : "tab"}
            onClick={() => setTab("teachers")}
          >
            TEACHERS
          </button>
        </div>

        {tab === "departments" && (
          <section className="cards-grid">
            {departmentsData.map((d) => (
              <article key={d.id} className="dept-card">
                <div className="card-head">
                  <div className="icon-box">
                    <span className="material-symbols-outlined">{d.icon}</span>
                  </div>
                  <button className="more">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <h3>{d.name}</h3>
                <p className="desc">{d.description}</p>
                <div className="stats">
                  <div>
                    <div className="label">STUDENTS</div>
                    <div className="num">{d.students}</div>
                  </div>
                  <div>
                    <div className="label">TEACHERS</div>
                    <div className="num">{d.teachers}</div>
                  </div>
                </div>
                <div className="card-footer">
                  <span className="tag">{d.tag}</span>
                  <a className="link">View Details</a>
                </div>
              </article>
            ))}
          </section>
        )}

        {tab === "teachers" && (
          <section className="roster">
            <div className="roster-card">
              <div className="roster-head">
                <h3>Faculty Roster</h3>
                <select>
                  <option>All Departments</option>
                  <option>Computer Science</option>
                  <option>Engineering</option>
                  <option>Business School</option>
                </select>
              </div>

              <div className="table-wrap">
                <table className="roster-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Courses</th>
                      <th>Status</th>
                      <th className="right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleRoster.map((r, i) => (
                      <tr key={i}>
                        <td>
                          <div className="tcell">
                            <div className="avatar-sm" />
                            <div>
                              <div className="tname">{r.name}</div>
                              <div className="tsub">{r.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="muted">{r.email}</td>
                        <td>{r.dept}</td>
                        <td>
                          <div className="course-list">
                            {r.courses.map((c) => (
                              <span key={c} className="course">
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span
                            className={
                              r.status === "Active"
                                ? "status active"
                                : "status muted"
                            }
                          >
                            {r.status}
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

              <div className="roster-footer">
                <div className="pager">Showing 1-3 of 149 faculty members</div>
                <div className="pager-actions">
                  <button disabled className="btn">
                    ‹
                  </button>
                  <button className="btn">›</button>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="secondary-grid">
          <div className="card">
            <div className="card-head">
              <span className="material-symbols-outlined">event_available</span>
              <h4>Upcoming Staff Reviews</h4>
            </div>
            <div className="card-list">
              <div className="card-row">
                <div>
                  <div className="row-title">Dr. Sarah Jenkins</div>
                  <div className="row-sub">
                    Annual Academic Review • Tomorrow, 10:00 AM
                  </div>
                </div>
                <button className="link">Prepare</button>
              </div>

              <div className="card-row">
                <div>
                  <div className="row-title">Prof. David Miller</div>
                  <div className="row-sub">
                    Tenure Track Milestone • Oct 24, 2:30 PM
                  </div>
                </div>
                <button className="link">Prepare</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <span className="material-symbols-outlined">bolt</span>
              <h4>Faculty Utilization Insight</h4>
            </div>
            <p className="muted">
              Average course load per teacher has increased by 12% in the
              Mathematics department this semester.
            </p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "82%" }} />
              </div>
              <div className="progress-meta">
                <span>Standard Capacity</span>
                <span className="accent">82% Assigned</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
