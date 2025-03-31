// Job listings for demo purposes
const jobListings = [
  {
    title: "Software Developer",
    company: "TechCorp",
    location: "Remote",
    description: "We are looking for a passionate software developer...",
    salary: "$80,000 - $100,000",
    id: 1
  },
  {
    title: "UI/UX Designer",
    company: "DesignInc",
    location: "San Francisco",
    description: "Join our design team to create amazing user experiences...",
    salary: "$70,000 - $90,000",
    id: 2
  }
];

// Display job listings
function displayJobListings() {
  const listingsContainer = document.getElementById("jobListings");
  listingsContainer.innerHTML = '';

  jobListings.forEach(job => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job");
    jobElement.innerHTML = `
      <h3>${job.title} at ${job.company}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <a href="job-detail.html?id=${job.id}" class="btn">View Details</a>
    `;
    listingsContainer.appendChild(jobElement);
  });
}

// Filter jobs by search input
function filterJobs() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchInput) || job.company.toLowerCase().includes(searchInput)
  );
  displayFilteredJobs(filteredJobs);
}

// Display filtered jobs
function displayFilteredJobs(jobs) {
  const listingsContainer = document.getElementById("jobListings");
  listingsContainer.innerHTML = '';

  jobs.forEach(job => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job");
    jobElement.innerHTML = `
      <h3>${job.title} at ${job.company}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <a href="job-detail.html?id=${job.id}" class="btn">View Details</a>
    `;
    listingsContainer.appendChild(jobElement);
  });
}

// Apply for job function (for demo purposes)
function applyForJob() {
  alert("You have successfully applied for this job!");
}

// Initialize job listings on the job listings page
if (document.getElementById("jobListings")) {
  displayJobListings();
}
