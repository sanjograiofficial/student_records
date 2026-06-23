import React, { useMemo, useState } from "react";
import "./StudentRecord.css";

const stats = [
  {
    label: "Total Students",
    value: "12,482",
    icon: "groups",
    detail: "+2.4% from last semester",
    detailClass: "detail-positive",
  },
  {
    label: "Active Now",
    value: "842",
    icon: "bolt",
    detail: "Currently in campus classes",
    detailClass: "detail-muted",
  },
  {
    label: "Pending Fees",
    value: "156",
    icon: "payments",
    detail: "Requires immediate action",
    detailClass: "detail-error",
  },
  {
    label: "New Enrollments",
    value: "48",
    icon: "person_add",
    detail: "Joined in the last 30 days",
    detailClass: "detail-muted",
  },
];

const departments = [
  "All Departments",
  "Computer Science",
  "Business Admin",
  "Life Sciences",
  "Engineering",
];

const statuses = ["Active", "Inactive", "Graduated"];

const students = [
  {
    id: "#STU-2931",
    name: "Julian Casablancas",
    year: "Year 3, Semester 2",
    roll: "CS-2021-084",
    department: "Computer Science",
    email: "j.casablancas@edu.ac.in",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaVOlkGI9rSqivzetfYXwsrve-8SkG6Pe99anJlvM5KQj1Rher0ROVirn34nI_xoIQdHgQPfvE23CeqpaO8Km07rd1rXW-dal2-BJmeMTRG7QUNouRun74YZYEqFHcU2-AUAl2zFmtXMIF_Wkct-2hbVBKVcD-Vgh372rKQed-WgfVAyHS5qoVC9olckyys8S6-B_uZlhJFJATjnSLrUZyPLv7h2xuJkEmij6dNUWI2YMOCkc_ewUR9lG4VAtPK0Z6AJ3tv3s_WAjO",
  },
  {
    id: "#STU-3042",
    name: "Amara Diallo",
    year: "Year 1, Semester 1",
    roll: "BA-2023-112",
    department: "Business Admin",
    email: "a.diallo@edu.ac.in",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7azjq-A0zzXBsOREwit-3ampImlR_w_Ri4OmjVxHXgVPNzSpo8OXtYwYTnVr0nwgTUNJEfeLgCmnxDDrHXQ8gA6-b0Odv6SL7EkFwAHxC1qqV5GWFoLdIa6PcVUSaQ2B_SSJGDx_g5V8Mf_CPkd7236e0kxTGSZPdMQPjicP0C6poCl6Z4ErH6qheNk95XtIu6Ylbkp4mf-ky6bXGAS_uwspQ-1B7IEbQpLiovCaCTB94us9yPtPDeRKVMsxGAlZNmbBfk7fTpFDb",
  },
  {
    id: "#STU-4155",
    name: "Mei Lin Chen",
    year: "Year 4, Semester 2",
    roll: "ENG-2020-012",
    department: "Engineering",
    email: "m.chen@edu.ac.in",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYKaO9tPu9DzL1YP_5-2Q9ksTtIYJG-2oHm6ZrSDAq7E_M7grNxFzyTf1yfr51WHQLwd7GbS1mbZPEG5HVlwa4ou8x5aSz2OVMRNhFk6rcZJHQijE4f3qrc2B-_Snnb6zh2T3S40vHZZvPhWyeV76hgTZKGQ03BIyG5B1WAz_ZBt6vQAupQvJD2OxGg6ZTtF2AIIC0AO3mZpGVYIEQTAft7i53UNnY-SgbicU2ZhrpNfVi7SfWhe2cfNTOkoPMET1MDvFxbo4oPycc",
  },
  {
    id: "#STU-5201",
    name: "Omar Hassan",
    year: "Year 2, Semester 1",
    roll: "LS-2022-045",
    department: "Life Sciences",
    email: "o.hassan@edu.ac.in",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfFsseg25Lm5QVESdYm21vRK-oXvGMAdblWG2gtg7sOjNuYCt6E9yr8GM13WQQZHj5Q6vYvdz_b3qPnowL6e6GYvcGVW5SSO_UTpgbd1xhqt5jafgn3RJ9sPgVYyS5_wk09xCjXw5nf69N6Bfx8KVbNHMkRK4NNk7dL75jS_qylFo9Mv7cqyE4r475QSG3i8rewWM297L7TKcVZ4i-XYg06vuOfObRtHDs65-4pupeJLAmAOSGkr4UKwn8-9_8zIuuhUu_dPqTy0xw",
  },
];

export default function StudentRecord() {
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [statusFilter, setStatusFilter] = useState("Active");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        student.name.toLowerCase().includes(query) ||
        student.roll.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query);
      const matchesDept =
        departmentFilter === "All Departments" ||
        student.department === departmentFilter;
      const matchesStatus = statusFilter === "Active" ? true : true; // placeholder for actual status filtering
      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [departmentFilter, searchQuery, statusFilter]);

  return (
    <div className="student-page">
      <aside className="sr-sidebar">
        <div className="brand-panel">
          <div className="brand-icon">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h1>EduAdmin</h1>
            <p>Management Portal</p>
          </div>
        </div>
        <nav className="sr-nav">
          <a className="nav-link">Dashboard</a>
          <a className="nav-link active">Students</a>
          <a className="nav-link">Departments</a>
          <a className="nav-link">Teachers</a>
          <a className="nav-link">Courses</a>
        </nav>
        <div className="sr-footer">
          <a className="nav-link">Settings</a>
          <a className="nav-link">Logout</a>
        </div>
      </aside>

      <div className="sr-main-content">
        <header className="sr-topbar">
          <div className="search-wrapper">
            <button className="menu-button" type="button">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="search-box">
              <span className="material-symbols-outlined">search</span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students, roll numbers..."
                type="text"
              />
            </div>
          </div>
          <div className="topbar-actions">
            <button type="button" className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button type="button" className="icon-btn">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="user-profile">
              <div className="user-text">
                <span>Admin User</span>
                <span>Principal Office</span>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyinRIRE7MxmJHVNZENi1fw8OgW4c-3SrjcAFJRnnxGH3L7Mqob49JO2Cspu3wljfCalMCLB1d2i5LqU8LvTyBYZQu0jkg9AYdqKxIsY1UlVVhNEFGDZ5XEn2OboxM2Bkr5A8CowEkH2dvaZYBLQbSm7F0BVxtj-GI1m48TfaTtNkE0DKvHn00WpvFLDzn8jA_1dIQMNV46J_SYNmzICbcL7t3fpsKxT24q2HJjLCU3odtz6DFzQkjmciJZpK8YovpYV3psgOsqivM"
                alt="Admin avatar"
              />
            </div>
          </div>
        </header>

        <main className="sr-content">
          <section className="sr-page-header">
            <div>
              <h2>Student Directory</h2>
              <p>
                Manage and organize all enrolled students across your
                institution.
              </p>
            </div>
            <button
              type="button"
              className="primary-btn"
              onClick={() => setModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              Add New Student
            </button>
          </section>

          <section className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <div className="stat-header">
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined icon">
                    {item.icon}
                  </span>
                </div>
                <div className="stat-value">{item.value}</div>
                <div className={`stat-detail ${item.detailClass}`}>
                  {item.detail}
                </div>
              </article>
            ))}
          </section>

          <section className="table-card">
            <div className="table-filters">
              <div className="filter-group">
                <div className="select-box">
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
                <div className="select-box">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        Status: {status}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
              <div className="filter-actions">
                <button type="button" className="outline-btn">
                  <span className="material-symbols-outlined">filter_list</span>
                  More Filters
                </button>
                <button type="button" className="outline-btn">
                  <span className="material-symbols-outlined">download</span>
                  Export
                </button>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="student-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th className="action-col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>
                        <div className="student-name-cell">
                          <img
                            className="student-avatar"
                            src={student.avatar}
                            alt={student.name}
                          />
                          <div>
                            <div className="student-name">{student.name}</div>
                            <div className="student-year">{student.year}</div>
                          </div>
                        </div>
                      </td>
                      <td>{student.roll}</td>
                      <td>
                        <span className="dept-badge">{student.department}</span>
                      </td>
                      <td className="student-email">{student.email}</td>
                      <td className="action-col">
                        <div className="action-group">
                          <button
                            type="button"
                            className="icon-action"
                            title="View Enrollment"
                          >
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                          </button>
                          <button
                            type="button"
                            className="icon-action"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined">
                              edit
                            </span>
                          </button>
                          <button
                            type="button"
                            className="icon-action danger"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination-row">
              <span>
                Showing 1 to {filteredStudents.length} of {students.length}{" "}
                entries
              </span>
              <div className="pagination-buttons">
                <button type="button" className="page-btn" disabled>
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button type="button" className="page-btn active">
                  1
                </button>
                <button type="button" className="page-btn">
                  2
                </button>
                <button type="button" className="page-btn">
                  3
                </button>
                <span className="page-gap">...</span>
                <button type="button" className="page-btn">
                  1248
                </button>
                <button type="button" className="page-btn">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {modalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-panel">
            <div className="modal-header">
              <h3>Add New Student</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-grid">
                <div className="form-field">
                  <label>Full Name</label>
                  <input placeholder="e.g. John Doe" type="text" />
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input placeholder="e.g. john@university.edu" type="email" />
                </div>
                <div className="form-field">
                  <label>Roll Number</label>
                  <input placeholder="e.g. CS-2024-001" type="text" />
                </div>
                <div className="form-field">
                  <label>Department</label>
                  <select>
                    {departments.slice(1).map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field full-width">
                  <label>Residential Address</label>
                  <textarea placeholder="Street, City, State, ZIP" rows={3} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="outline-btn"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button type="button" className="primary-btn">
                Save Student Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
