import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./SkillDashboard.css";

const navigationLinks = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Students", icon: "person" },
  { label: "Departments", icon: "domain" },
  { label: "Teachers", icon: "school" },
  { label: "Courses", icon: "book" },
];

const stats = [
  { label: "Total Students", value: "12,482", delta: "+4.2%", icon: "groups" },
  {
    label: "Total Teachers",
    value: "843",
    delta: "+1.8%",
    icon: "supervisor_account",
  },
  { label: "Departments", value: "24", delta: "Stable", icon: "hub" },
  {
    label: "Active Enrollments",
    value: "8,192",
    delta: "+12%",
    icon: "how_to_reg",
  },
];

const recentEnrollments = [
  {
    initials: "JD",
    name: "Jane Doe",
    department: "Computer Science",
    date: "Oct 24, 2024",
  },
  {
    initials: "MS",
    name: "Mark Smith",
    department: "Engineering",
    date: "Oct 23, 2024",
  },
  {
    initials: "AL",
    name: "Alice Lee",
    department: "Architecture",
    date: "Oct 22, 2024",
  },
  {
    initials: "RB",
    name: "Robert Brown",
    department: "Business",
    date: "Oct 22, 2024",
  },
];

const departmentLabels = [
  "Comp Sci",
  "Engineer",
  "Business",
  "Arts",
  "Law",
  "Med",
];
const departmentValues = [2400, 1900, 1600, 1100, 950, 1400];
const trendLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
];
const trendValues = [420, 380, 560, 710, 890, 840, 620, 950, 1100, 1240];

function SkillDashboard() {
  const trendCanvas = useRef(null);
  const statusCanvas = useRef(null);
  const departmentCanvas = useRef(null);

  useEffect(() => {
    const primaryColor = "#091426";
    const secondaryColor = "#4edea3";
    const gridColor = "#e2e8f0";

    const trendChart = new Chart(trendCanvas.current, {
      type: "line",
      data: {
        labels: trendLabels,
        datasets: [
          {
            label: "Enrollments 2024",
            data: trendValues,
            borderColor: primaryColor,
            backgroundColor: "rgba(9, 20, 38, 0.08)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: primaryColor,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            grid: { color: gridColor, borderDash: [5, 5] },
            ticks: { font: { size: 11 } },
          },
          x: { grid: { display: false }, ticks: { font: { size: 11 } } },
        },
      },
    });

    const statusChart = new Chart(statusCanvas.current, {
      type: "doughnut",
      data: {
        labels: ["Active", "Completed"],
        datasets: [
          {
            data: [8192, 4290],
            backgroundColor: [primaryColor, secondaryColor],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        plugins: { legend: { display: false } },
      },
    });

    const departmentChart = new Chart(departmentCanvas.current, {
      type: "bar",
      data: {
        labels: departmentLabels,
        datasets: [
          {
            label: "Students",
            data: departmentValues,
            backgroundColor: primaryColor,
            borderRadius: 8,
            barThickness: 24,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            grid: { color: gridColor, borderDash: [5, 5] },
            ticks: { font: { size: 11 } },
          },
          x: { grid: { display: false }, ticks: { font: { size: 11 } } },
        },
      },
    });

    return () => {
      trendChart.destroy();
      statusChart.destroy();
      departmentChart.destroy();
    };
  }, []);

  return (
    <div className="skill-dashboard">
      <aside className="dashboard-sidebar">
        <div className="brand">
          <span className="brand-title">EduAdmin</span>
          <span className="brand-subtitle">Management Portal</span>
        </div>
        <nav className="sidebar-nav">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href="#"
              className={item.active ? "nav-item active" : "nav-item"}
            >
              <span className="material-symbols-outlined nav-icon">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined nav-icon">settings</span>
            <span>Settings</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined nav-icon">logout</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      <header className="dashboard-topbar">
        <div className="topbar-search">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="Search records, students, or reports..."
          />
        </div>
        <div className="topbar-actions">
          <button type="button" className="icon-button">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button type="button" className="icon-button">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="divider" />
          <div className="profile-card">
            <div className="profile-text">
              <p className="profile-name">Admin User</p>
              <p className="profile-role">System Registrar</p>
            </div>
            <div className="profile-avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9CFJhKMdpkX-2HzY1XHWk--x0dUy5_AzHmQpWuXLBdVa6L4HNsmv0xE40wnqKnsejz5k1lS1G-xgrdyh2zKGVhY95DPOMWCvWyYEkakEeXHgqNcjxSmq8fqLpYJApJ2_A-Kn2TyZRF3j-IVtiXILhKH4YTqdc1gGh8cy6EEFzFbkzq3pR_qG20esFEuaW-vIYsgcso3AQYZejgW3aXdQXIhpdta3Q080z2i52zY1uFw-b3ZqUDqv7SlBsk9ipfpwyOSffnOeRx3bk"
                alt="Admin avatar"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-hero">
          <div>
            <h1>System Overview</h1>
            <p>Real-time metrics for institutional performance.</p>
          </div>
          <div className="hero-actions">
            <button type="button" className="ghost-button">
              <span className="material-symbols-outlined">download</span>
              Export Report
            </button>
            <button type="button" className="primary-button">
              <span className="material-symbols-outlined">add</span>
              Enroll Student
            </button>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <div className="stat-card-head">
                <div className="stat-icon">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <span className="stat-delta">{stat.delta}</span>
              </div>
              <div>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="dashboard-grid">
          <article className="panel panel--wide">
            <div className="panel-header">
              <div>
                <h2>Enrollment Trends</h2>
                <p>Annual growth comparison for current academic year</p>
              </div>
              <select className="year-select">
                <option>Year 2024</option>
                <option>Year 2023</option>
              </select>
            </div>
            <div className="chart-frame">
              <canvas ref={trendCanvas} />
            </div>
          </article>

          <article className="panel panel--narrow">
            <div className="panel-header">
              <div>
                <h2>Enrollment Status</h2>
                <p>Current student lifecycle</p>
              </div>
            </div>
            <div className="status-chart-frame">
              <canvas ref={statusCanvas} />
            </div>
            <div className="status-legend">
              <div>
                <span className="legend-dot legend-dot--primary" />
                Active
              </div>
              <span>8,192</span>
            </div>
            <div className="status-legend">
              <div>
                <span className="legend-dot legend-dot--secondary" />
                Completed
              </div>
              <span>4,290</span>
            </div>
          </article>

          <article className="panel panel--wide">
            <div className="panel-header panel-header--stacked">
              <div>
                <h2>Students per Department</h2>
                <p>Top performing administrative units</p>
              </div>
            </div>
            <div className="chart-frame chart-frame--short">
              <canvas ref={departmentCanvas} />
            </div>
          </article>

          <article className="panel panel--tall">
            <div className="recent-header">
              <div>
                <h2>Recent Enrollments</h2>
                <p>Latest student additions</p>
              </div>
            </div>
            <div className="recent-list">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Department</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEnrollments.map((item) => (
                    <tr key={item.name}>
                      <td>
                        <div className="student-cell">
                          <div className="student-avatar">{item.initials}</div>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>{item.department}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="recent-footer">
              <button type="button" className="link-button">
                View All Students
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default SkillDashboard;
