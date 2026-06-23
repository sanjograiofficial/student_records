import React, { useState, useMemo } from "react";
import "./Teachers.css";

const initialTeachers = [
  {
    name: "Dr. Sarah Jenkins",
    email: "s.jenkins@eduadmin.edu",
    id: "#TEA-2024-081",
    department: "Computer Science",
    courses: ["CS", "AI", "DS", "+1"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsDTUNhWZ2EI7XjpDiNCqIglq84wBIRyENtOjz3lZ26VhmaItwS04bJse8CWlZ8lWp31fr7FyIFBq9-PLN1b9th1NAjVVqx2TYXtuc8gEEqoamkrNpJ95-1HGg_GWmZ_jJ8vNDACsW7PctaNr0cpwoTvqBfjnARUATM0wANa_pG7WDEI7qrrt-7TdAE5ViNTp46plNnLCW41nOVp9LUjM3fC9WOJWh5fxdexhXuPAOqlufgy1tXj1O31YZ3vs3eKLpT1KrAafPziDR",
  },
  {
    name: "Prof. David Miller",
    email: "d.miller@eduadmin.edu",
    id: "#TEA-2024-112",
    department: "Applied Physics",
    courses: ["PH", "QM"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBk1f_-OizI705a_K2TMLD5-A0PQpGWsE52DSkHwMIUM1RjVZqqssC_gzKxGVqtb2FKF686o54sm9FyH3-RI59P3OsfpBLy1LH1dHkhS-oCyNsS2wSWEy5YObSoaoL5akZY34PiaFZHj9d_UDtXJuqSjSUSkScTMcqwJVIXxU1X7mx4RRajmuKjjL3T3PYAif9gQDuqt5ReXsVaos8EukqHAtqyDd6m9FZ_qyUxtVftWu8VmuWM8MwEhklcVtVWqYKXGBpyS_Zj01oh",
  },
  {
    name: "Dr. Maria Garcia",
    email: "m.garcia@eduadmin.edu",
    id: "#TEA-2024-045",
    department: "Liberal Arts",
    courses: ["HS", "LT", "PH"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz6ybqUr2fpdV0dvXoxTuNUjZF6KXSWhONsfZ1kG8Wvt00n7Thjfwvoa7JSuvpxfmXCJwEaWaaRGAOUVE-y5CroA7p_hToewxYd95Hwe3WrILQbpFFgoLQh_SQ8-b67BCcejecLadEEYkea-NosDzwnGQ7014rmyWFMJRnaDqCfKMf4-WcaUoiZE9KSCTs9i7DgkyzF644ZHPK5xxe8QglKyUU9xCFwRzVDzsznl_4529VmNWrtyRvALBGN32ABlSYP5WxvTHOC57i",
  },
  {
    name: "Robert Chen, PhD",
    email: "r.chen@eduadmin.edu",
    id: "#TEA-2024-203",
    department: "Mathematics",
    courses: ["MA", "ST"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeyCuqVBgR2u-aeGXt5QIa7IMPnA2xYapAjKBZQuLHRGsL4qbqDKIaMD737nm0HVBv3SNZKjK2zzrF3P-rLcWrvrRNjFhjmeTnXD_FWFBwy7k7YqJ9JA6AlQhv3AxE9w0pVff6hTFUxstcUDYlg8tnqGc2OShizBE_R-FwP4M98lnnvzHv4OnU4gIve5m8dUSMwYyEWsENZn_vNyGfYPNVZvgy-qUy2wdaBsrwaQ5QtcTaSlRt_vivnJQnhTBwVuD8BOzoz0yilJuj",
  },
];

export default function Teachers() {
  const [query, setQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [statusFilter] = useState("All");

  const departments = useMemo(() => {
    const set = new Set(initialTeachers.map((t) => t.department));
    return ["All Departments", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return initialTeachers.filter((t) => {
      const text = `${t.name} ${t.email} ${t.department} ${t.id}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesDept =
        departmentFilter === "All Departments" ||
        t.department === departmentFilter;
      return matchesQuery && matchesDept;
    });
  }, [query, departmentFilter]);

  return (
    <div className="teachers-dashboard">
      <aside className="td-sidebar">
        <div className="td-brand">
          <h1>EduAdmin</h1>
          <div className="td-sub">Management Portal</div>
        </div>
        <nav className="td-nav">
          <a className="td-nav-item">Dashboard</a>
          <a className="td-nav-item">Students</a>
          <a className="td-nav-item">Departments</a>
          <a className="td-nav-item active">Teachers</a>
          <a className="td-nav-item">Courses</a>
        </nav>
        <div className="td-footer">
          <a className="td-nav-item">Settings</a>
          <a className="td-nav-item">Logout</a>
        </div>
      </aside>

      <header className="td-topbar">
        <div className="td-search">
          <span className="material-symbols-outlined">search</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick search teachers, courses..."
          />
        </div>
        <div className="td-actions">
          <button className="icon">notifications</button>
          <button className="icon">help</button>
          <div className="profile">
            <div className="profile-text">
              <div className="name">Admin User</div>
              <div className="role">Administrator</div>
            </div>
            <div className="avatar">
              <img src={initialTeachers[0].avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </header>

      <main className="td-main">
        <div className="td-header">
          <div>
            <h2>Faculty Management</h2>
            <p>
              Manage institutional staffing, department assignments, and course
              loads.
            </p>
          </div>
          <button className="primary">Add New Teacher</button>
        </div>

        <div className="metrics-grid">
          <div className="metric">
            <div className="m-head">
              <span className="material-symbols-outlined">groups</span>
              <div className="m-note">+4% this month</div>
            </div>
            <div className="m-body">
              <div className="m-label">Total Teachers</div>
              <div className="m-value">428</div>
            </div>
          </div>
          <div className="metric">
            <div className="m-head">
              <span className="material-symbols-outlined">verified</span>
              <div className="m-note">98% uptime</div>
            </div>
            <div className="m-body">
              <div className="m-label">Active Staff</div>
              <div className="m-value">412</div>
            </div>
          </div>
          <div className="metric">
            <div className="m-head">
              <span className="material-symbols-outlined">analytics</span>
              <div className="m-note">Optimal: 1:15</div>
            </div>
            <div className="m-body">
              <div className="m-label">Teacher-to-Student Ratio</div>
              <div className="m-value">1:18.4</div>
            </div>
          </div>
        </div>

        <div className="table-card">
          <div className="table-actions">
            <div className="filters">
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select>
                <option>Status: All</option>
                <option>Active</option>
                <option>On Sabbatical</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="results">Displaying {filtered.length} results</div>
          </div>

          <div className="table-wrap">
            <table className="teachers-table">
              <thead>
                <tr>
                  <th>Teacher</th>
                  <th>Teacher ID</th>
                  <th>Department</th>
                  <th>Assigned Courses</th>
                  <th className="right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id}>
                    <td>
                      <div className="teacher-cell">
                        <div className="avatar-sm">
                          <img src={t.avatar} alt="" />
                        </div>
                        <div>
                          <div className="t-name">{t.name}</div>
                          <div className="t-email">{t.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="muted">{t.id}</td>
                    <td>
                      <span className="dept-pill">{t.department}</span>
                    </td>
                    <td>
                      <div className="course-stack">
                        {t.courses.map((c, i) => (
                          <div key={i} className="course-pill">
                            {c}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="right">
                      <div className="actions">
                        <button title="View Profile" className="icon">
                          visibility
                        </button>
                        <button title="Edit" className="icon muted">
                          edit
                        </button>
                        <button title="Delete" className="icon danger">
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <div className="pager">Page 1 of 18</div>
            <div className="pager-actions">
              <button disabled className="btn">
                Previous
              </button>
              <button className="btn primary">Next</button>
            </div>
          </div>
        </div>

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
                <div style={{ width: "82%" }} className="progress-fill" />
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
