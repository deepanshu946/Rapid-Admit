// const geoapifyApiKey = '139f02debfcf47589fb74e3724c25938';
// const bingSearchApiKey = '8bd47e17b6264a4496765f513f3ff9af'; // Bing API Key

// function addMarkersToMap(map, hospitals) {
//     const hospitalList = document.getElementById('hospital-list');
//     hospitalList.innerHTML = ''; // Clear existing list

//     hospitals.forEach(hospital => {
//         const hospitalLat = hospital.geometry.coordinates[1];
//         const hospitalLon = hospital.geometry.coordinates[0];
//         const marker = L.marker([hospitalLat, hospitalLon]).addTo(map);

//         const hospitalName = hospital.properties.name || 'Unnamed Hospital';
//         const hospitalAddress = hospital.properties.address_line1 || 'Address not available';
//         const hospitalPhone = hospital.properties.phone || 'Contact number not available';

//         marker.bindPopup(`
//             <b>${hospitalName}</b><br>
//             <img src="https://via.placeholder.com/100" alt="${hospitalName}" style="width:100px;height:auto;"><br>
//             ${hospitalAddress}<br>
//             ${hospitalPhone}
//         `);

//         // Add hospital to list
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <img src="https://via.placeholder.com/100" alt="${hospitalName}">
//             <div>
//                 <strong>${hospitalName}</strong>
//                 <p>${hospitalAddress}</p>
//                 <p>${hospitalPhone}</p>
//             </div>
//         `;
//         hospitalList.appendChild(listItem);

//         // Fetch hospital image
//         fetch(`https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(hospitalName)} hospital&count=1`, {
//             headers: {
//                 'Ocp-Apim-Subscription-Key': bingSearchApiKey
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.value[0]?.contentUrl || 'https://via.placeholder.com/100';
//             listItem.querySelector('img').src = imageUrl;
//         })
//         .catch(error => console.error('Error fetching image:', error));
//     });
// }

// function findHospitals() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             document.getElementById('user-location').innerText = `Your location: Latitude ${lat}, Longitude ${lon}`;

//             const map = L.map('map').setView([lat, lon], 13);

//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 maxZoom: 19,
//             }).addTo(map);

//             const radius = 5000; // Search within a 5km radius

//             fetch(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},${radius}&bias=proximity:${lon},${lat}&limit=10&apiKey=${geoapifyApiKey}`)
//                 .then(response => response.json())
//                 .then(result => {
//                     console.log('Hospitals Data:', result);
//                     const hospitals = result.features;
//                     if (hospitals.length === 0) {
//                         document.getElementById('hospital-list').innerHTML = '<li>No nearby hospitals found.</li>';
//                     } else {
//                         addMarkersToMap(map, hospitals);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching hospitals:', error);
//                 });
//         }, () => {
//             document.getElementById('user-location').innerText = 'Unable to retrieve your location';
//         });
//     } else {
//         document.getElementById('user-location').innerText = 'Geolocation is not supported by this browser.';
//     }
// }

// function openModal(type) {
//     const modal = document.getElementById('modal');
//     const modalTitle = document.getElementById('modal-title');
//     const form = document.getElementById('booking-form');

//     if (type === 'opd') {
//         modalTitle.innerText = 'Book OPD Appointment';
//     } else if (type === 'bed') {
//         modalTitle.innerText = 'Book Bed';
//     }

//     modal.style.display = 'block';

//     form.onsubmit = function(event) {
//         event.preventDefault();
//         const disease = document.getElementById('disease').value;
//         const time = document.getElementById('time').value;
        
//         alert(`Booking Confirmed!\nDisease: ${disease}\nTime: ${time}`);
//         closeModal();
//     };
// }

// function closeModal() {
//     document.getElementById('modal').style.display = 'none';
// }

// window.onclick = function(event) {
//     const modal = document.getElementById('modal');
//     if (event.target === modal) {
//         closeModal();
//     }
// };

// // Call the function to find hospitals when the page loads
// document.addEventListener('DOMContentLoaded', findHospitals);

// function addMarkersToMap(map, hospitals) {
//     const hospitalList = document.getElementById('hospital-list');
//     hospitalList.innerHTML = ''; // Clear existing list

//     hospitals.forEach(hospital => {
//         const hospitalLat = hospital.geometry.coordinates[1];
//         const hospitalLon = hospital.geometry.coordinates[0];
//         const marker = L.marker([hospitalLat, hospitalLon]).addTo(map);

//         const hospitalName = hospital.properties.name || 'Unnamed Hospital';
//         const hospitalAddress = hospital.properties.address_line1 || 'Address not available';
//         const hospitalPhone = hospital.properties.phone || 'Contact number not available';

//         marker.bindPopup(`
//             <b>${hospitalName}</b><br>
//             <img src="https://via.placeholder.com/100" alt="${hospitalName}" style="width:100px;height:auto;"><br>
//             ${hospitalAddress}<br>
//             ${hospitalPhone}
//         `);

//         // Add hospital to list with buttons
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <img src="https://via.placeholder.com/100" alt="${hospitalName}">
//             <div>
//                 <strong>${hospitalName}</strong>
//                 <p>${hospitalAddress}</p>
//                 <p>${hospitalPhone}</p>
//                 <button class="custom-button" onclick="window.location.href='doctors.html?hospital=${encodeURIComponent(hospitalName)}'">Book OPD</button>
//                 <button class="custom-button" onclick="openModal('bed')">Book Bed</button>
//             </div>
//         `;
//         hospitalList.appendChild(listItem);

//         // Fetch hospital image
//         fetch(`https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(hospitalName)} hospital&count=1`, {
//             headers: {
//                 'Ocp-Apim-Subscription-Key': bingSearchApiKey
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.value[0]?.contentUrl || 'https://via.placeholder.com/100';
//             listItem.querySelector('img').src = imageUrl;
//         })
//         .catch(error => console.error('Error fetching image:', error));
//     });
// }
const geoapifyApiKey = '139f02debfcf47589fb74e3724c25938';
const bingSearchApiKey = '8bd47e17b6264a4496765f513f3ff9af'; // Bing API Key

function addMarkersToMap(map, hospitals) {
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = ''; // Clear existing list

    hospitals.forEach(hospital => {
        const hospitalLat = hospital.geometry.coordinates[1];
        const hospitalLon = hospital.geometry.coordinates[0];
        const marker = L.marker([hospitalLat, hospitalLon]).addTo(map);

        const hospitalName = hospital.properties.name || 'Unnamed Hospital';
        const hospitalAddress = hospital.properties.address_line1 || 'Address not available';
        const hospitalPhone = hospital.properties.phone || 'Contact number not available';

        marker.bindPopup(`
            <b>${hospitalName}</b><br>
            <img src="https://via.placeholder.com/100" alt="${hospitalName}" style="width:100px;height:auto;"><br>
            ${hospitalAddress}<br>
            ${hospitalPhone}
        `);

        // Add hospital to list with buttons
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="https://via.placeholder.com/100" alt="${hospitalName}">
            <div>
                <strong>${hospitalName}</strong>
                <p>${hospitalAddress}</p>
                <p>${hospitalPhone}</p>
                <button class="custom-button" onclick="window.location.href='doctors.html?hospital=${encodeURIComponent(hospitalName)}'">Book OPD</button>
                <button class="custom-button" onclick="window.location.href='vacancies.html?hospital=${encodeURIComponent(hospitalName)}'">Book Bed</button>
            </div>
        `;
        hospitalList.appendChild(listItem);

        // Fetch hospital image
        fetch(`https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(hospitalName)} hospital&count=1`, {
            headers: {
                'Ocp-Apim-Subscription-Key': bingSearchApiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.value[0]?.contentUrl || 'https://via.placeholder.com/100';
            listItem.querySelector('img').src = imageUrl;
        })
        .catch(error => console.error('Error fetching image:', error));
    });
}

function findHospitals() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('user-location').innerText = `Your location: Latitude ${lat}, Longitude ${lon}`;

            const map = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            const radius = 5000; // Search within a 5km radius

            fetch(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},${radius}&bias=proximity:${lon},${lat}&limit=10&apiKey=${geoapifyApiKey}`)
                .then(response => response.json())
                .then(result => {
                    console.log('Hospitals Data:', result);
                    const hospitals = result.features;
                    if (hospitals.length === 0) {
                        document.getElementById('hospital-list').innerHTML = '<li>No nearby hospitals found.</li>';
                    } else {
                        addMarkersToMap(map, hospitals);
                    }
                })
                .catch(error => {
                    console.error('Error fetching hospitals:', error);
                });
        }, () => {
            document.getElementById('user-location').innerText = 'Unable to retrieve your location';
        });
    } else {
        document.getElementById('user-location').innerText = 'Geolocation is not supported by this browser.';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Call the function to find hospitals when the page loads
document.addEventListener('DOMContentLoaded', findHospitals);

