
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
  }, 5000); // Stop displaying after 5 seconds