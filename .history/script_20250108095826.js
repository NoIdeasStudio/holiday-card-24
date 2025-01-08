function calculateDayOfYear() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1); // January 1st of the current year
    const diff = today - startOfYear; // Difference in milliseconds
    const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in one day
  
    return Math.floor(diff / oneDay) + 1; // Day number, add 1 to start from Day 1
  }
  
  // Function to check for leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Get the current year and set the total days (365 or 366 based on leap year)
  const today = new Date();
  const totalDays = isLeapYear(today.getFullYear()) ? 366 : 365;
  
  setTimeout(() => {
    document.getElementById('gif').style.display = 'none';
  }, 19500); // Stop displaying after 20 seconds
  

  document.querySelector("#movement-name").addEventListener("click", function(){
    document.getElementById('gif').style.display = "block";

    setTimeout(() => {
    document.getElementById('gif').style.display = 'none';
  }, 19500);
  })

  document.querySelector("body").addEventListener("click", function(){
    document.getElementById('gif').style.display = "block";

    setTimeout(() => {
    document.getElementById('gif').style.display = 'none';
  }, 19500);
  })

  
  // Check if the screen width is greater than or equal to 900px
  if (window.matchMedia("(min-width: 900px)").matches) {
    // Set timeout to hide the GIF after 20 seconds
    document.getElementById('gif').style.display = "block";

    setTimeout(() => {
    document.getElementById('gif').style.display = 'block';
  }, 2000);
  }