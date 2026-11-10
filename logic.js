// ================================
// AUTOMATIC AGE CALCULATOR
// Date of Birth: 1 July 2011
// ================================

function calculateAge() {
  const birthDate = new Date(2011, 6, 1);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference =
    today.getMonth() - birthDate.getMonth();

  const dayDifference =
    today.getDate() - birthDate.getDate();

  // If this year's birthday hasn't happened yet,
  // subtract one year.
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && dayDifference < 0)
  ) {
    age--;
  }

  document.getElementById("age").textContent = age;
}


// ================================
// AUTOMATIC COPYRIGHT YEAR
// ================================

function updateYear() {
  document.getElementById("year").textContent =
    new Date().getFullYear();
}


// Run everything when the page loads
document.addEventListener("DOMContentLoaded", () => {
  calculateAge();
  updateYear();
});