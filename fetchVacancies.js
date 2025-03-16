document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from the backend
    fetch('http://localhost:5001/api/bed-vacancies')
        .then(response => response.json())
        .then(data => {
            // Get the container element
            const vacanciesContainer = document.getElementById('vacancies-container');
            vacanciesContainer.innerHTML = ''; // Clear any existing content

            // Iterate over the data and create HTML for each item
            data.forEach(vacancy => {
                const vacancyElement = document.createElement('div');
                vacancyElement.classList.add('vacancy');
                vacancyElement.innerHTML = `
                    <h2>${vacancy.hospitalName}</h2>
                    <p>Bed Count: ${vacancy.bedCount}</p>
                    <p>Location: ${vacancy.location}</p>
                `;
                vacanciesContainer.appendChild(vacancyElement);
            });
        })
        .catch(error => console.error('Error fetching vacancies:', error));
});
