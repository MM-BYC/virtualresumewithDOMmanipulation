// Function to add a new work experience
function addJobExperience() {
  // Prompt the user for job details
  const jobCompany = prompt("Enter Job Title: | Company | Date Employed:");
  const jobRoles = prompt("Enter job Roles separated by commas:");

  if (jobCompany !== null && jobRoles !== null) {
    // Get the work experience section
    const workExperienceSection = document.querySelector(".workExperience");

    // Create a new table row for job experience
    const newRow = document.createElement("tr");

    // Create a cell for job details
    const jobDetailsCell = document.createElement("td");
    jobDetailsCell.textContent = jobCompany;

    // Create a new table row of jobRoles

    const jobRolesRow = document.createElement("tr");
    const jobRolesCell = document.createElement("td");
    const jobRolesList = document.createElement("ul");

    // Split jobRoles and add each as a list item
    jobRoles.split(",").forEach((responsibility) => {
      const responsibilityItem = document.createElement("li");
      responsibilityItem.textContent = responsibility.trim();
      jobRolesList.appendChild(responsibilityItem);
    });

    jobRolesCell.appendChild(jobRolesList);
    jobRolesRow.appendChild(jobRolesCell);

    // Append the cells to the new row
    newRow.appendChild(jobDetailsCell);

    // Append the new row and jobRoles row to the work experience section
    workExperienceSection.appendChild(newRow);
    workExperienceSection.appendChild(jobRolesRow);
  } else {
    alert("Job details and jobRoles are required.");
  }
}

// Create a button to add job experience
const addButton = document.createElement("button");
addButton.innerHTML = 'Click to Add Job Experience <br> "DOM Manipulation"';
// addJobExperience without () will run only when the button is clicked!
// using () will invoke the function immediately.
addButton.onclick = addJobExperience;
// set button style background color
// padding.
// option syntax: addButton.setAttribute("style", "background-color:lime; padding:2em");
addButton.style.backgroundColor = "lime";
addButton.style.padding = "1em";
addButton.style.borderRadius = "15px";
addButton.style.cursor = "pointer";
addButton.style.fontSize = "1.5em";
addButton.style.transition = "transform 0.2s ease-in-out"; // smooth effect
// Append the button to the work experience section
document.getElementById("section3").appendChild(addButton);

addButton.addEventListener("mouseover", () => {
  addButton.style.transform = "scale(1.2)";
});
addButton.addEventListener("mouseleave", () => {
  addButton.style.transform = "scale(1.0)";
});
