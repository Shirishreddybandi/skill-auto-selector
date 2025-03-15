// Function to find the search input element using data-automation-id
function findSearchBox() {
    return document.querySelector('input[data-automation-id="searchBox"]'); // Adjust the selector as needed
}
  
  const skills = ["Java", "JavaScript", "SQL", "C", "C++", "HTML", "CSS", "XML", "AJAX", "JSON", "Bootstrap", "Servlets", "Node.js", "Express.js", "Spring MVC", "Spring Boot", "Hibernate", "JPA", "JUnit", "Selenium", "Angular", "MySQL", "Postgres", "MongoDB", "Docker", "AWS", "Git", "GitHub", "Data Structures", "OOP", "DBMS", "Operating Systems", "SDLC"]; // Example skills
  const data = {
    skillsAdded: [],
    errors: [],
  };
  
  async function typeSkill(skill) {
    const searchBox = findSearchBox();
    if (!searchBox) {
      console.error("Search box not found.");
      return;
    }
  
    return new Promise((resolve) => {
      // Set the skill into the search box
      searchBox.value = skill;
  
      // Dispatch input and change events to trigger any dropdowns
      searchBox.dispatchEvent(new Event('input', { bubbles: true }));
      searchBox.dispatchEvent(new Event('change', { bubbles: true }));
  
      // Simulate pressing the Enter key (keydown and keyup)
      const enterKeyDownEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 0,
        bubbles: true,
      });
      const enterKeyUpEvent = new KeyboardEvent('keyup', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 0,
        bubbles: true,
      });
  
      // Dispatch the keydown event
      searchBox.dispatchEvent(enterKeyDownEvent);
      // Dispatch the keyup event
      searchBox.dispatchEvent(enterKeyUpEvent);
  
      // Log the action
      console.log(`Skill "${skill}" typed and Enter key pressed.`);
  
      // Wait for dropdown to appear and select the first option
      const checkForDropdown = setInterval(() => {
        const firstOption = document.querySelector('div[data-automation-id="promptOption"]');
        if (firstOption) {
          firstOption.click(); // Simulate clicking the first option
          console.log(`First option selected: ${firstOption.textContent}`);
          clearInterval(checkForDropdown); // Stop checking once the option is selected
          data.skillsAdded.push(skill);
          resolve();
        }
      }, 100); // Check every 100ms
  
      // Timeout to stop checking after a certain period (e.g., 5 seconds)
      setTimeout(() => {
        clearInterval(checkForDropdown);
        console.log("No dropdown options found after waiting.");
        resolve(); // Resolve even if no option is found
      }, 1000); // 5000ms timeout
    });
  }
  
  async function addAllSkills() {
    for (const skill of skills) {
      try {
        await typeSkill(skill);
        // Wait a bit before typing the next skill
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms gap between skills
      } catch (error) {
        data.errors.push({ skill, error: error.message });
        console.error(`Error adding skill "${skill}": ${error.message}`);
      }
    }
  
    // Log the results
    console.log("Skills added:", data.skillsAdded);
    if (data.errors.length > 0) {
      console.log("Errors encountered:", data.errors);
    }
  }
  
  // Start the process
  addAllSkills();