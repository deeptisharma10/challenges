// Function to calculate age
function calculateAge() {
    const day = document.getElementById('dayInput').value;
    const month = document.getElementById('monthInput').value;
    const year = document.getElementById('yearInput').value;
  
    // Check if any of the input fields are empty
    if (!day || !month || !year) {
      alert('Please fill in all date fields.');
      return;
    }
  
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
  
    // Calculate the difference in years, months, and days
    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; // Approximate average days per month
  
    const fullYears = Math.floor(ageInDays / 365.25);
    const remainingMonths = Math.floor(ageInMonths - (fullYears * 12));
    const remainingDays = Math.floor(ageInDays - (fullYears * 365.25));
  
    // Display the age in the HTML result elements
    document.querySelector('#years').innerHTML = fullYears;
    document.querySelector('#month').innerHTML = remainingMonths;
    document.querySelector('#days').innerHTML = remainingDays;
  }
  
  // Add an event listener to the button
  const calculateButton = document.querySelector('.arrow_btn');
  calculateButton.addEventListener('click', calculateAge);
  