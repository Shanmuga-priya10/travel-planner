document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('travelForm');
  const summary = document.getElementById('tripSummary');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('travelDate').value;
    const days = document.getElementById('days').value;

    summary.style.display = 'block';
    summary.innerHTML = `
      <h3>📋 Trip Summary</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Travel Date:</strong> ${date}</p>
      <p><strong>Duration:</strong> ${days} days</p>
    `;

    form.reset();
  });
});
