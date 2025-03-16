// // document.addEventListener('DOMContentLoaded', function() {
// //     // Get buttons from the overlay
// //     const continuePatientBtn = document.getElementById('continue-patient');
// //     const continueHospitalBtn = document.getElementById('continue-hospital');
    
// //     // Get chatbot elements
// //     const chatbotToggleBtn = document.getElementById('open-chatbot');
// //     const chatbotContainer = document.querySelector('.chatbot-container');
    
// //     console.log("Chatbot Toggle Button:", chatbotToggleBtn); // Debugging
// //     console.log("Chatbot Container:", chatbotContainer); // Debugging
    
// //     // Button click handlers for overlay
// //     continuePatientBtn.addEventListener('click', () => {
// //         // Hide overlay and show the home content
// //         document.getElementById('overlay').style.display = 'none';
// //     });

// //     continueHospitalBtn.addEventListener('click', () => {
// //         // Redirect to the hospitals.html page
// //         window.location.href = 'hospitals.html';
// //     });

// //     // Button click handler for chatbot toggle
// //     chatbotToggleBtn.addEventListener('click', () => {
// //         console.log("Chatbot Toggle Clicked"); // Debugging
        
// //         if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
// //             chatbotContainer.style.display = 'flex'; // Show chatbot
// //             console.log("Chatbot Shown"); // Debugging
// //         } else {
// //             chatbotContainer.style.display = 'none'; // Hide chatbot
// //             console.log("Chatbot Hidden"); // Debugging
// //         }
// //     });
// // });
// document.addEventListener('DOMContentLoaded', function() {
//     // Get buttons from the overlay
//     const continuePatientBtn = document.getElementById('continue-patient');
//     const continueHospitalBtn = document.getElementById('continue-hospital');
    
//     // Get chatbot elements
//     const chatbotToggleBtn = document.getElementById('open-chatbot');
//     const chatbotContainer = document.querySelector('.chatbot-container');
    
//     // Button click handlers for overlay
//     continuePatientBtn.addEventListener('click', () => {
//         // Hide overlay and show the home content
//         document.getElementById('overlay').style.display = 'none';
//     });

//     continueHospitalBtn.addEventListener('click', () => {
//         // Redirect to the hospitals.html page
//         window.location.href = 'hospitals.html';
//     });

//     // Button click handler for chatbot toggle
//     chatbotToggleBtn.addEventListener('click', () => {
//         if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
//             chatbotContainer.style.display = 'flex'; // Show chatbot
//         } else {
//             chatbotContainer.style.display = 'none'; // Hide chatbot
//         }
//     });

//     // Initially show the overlay when the page loads
//     document.getElementById('overlay').style.display = 'flex';

//     // Set chatbot initially hidden
//     chatbotContainer.style.display = 'none';
// });
document.addEventListener('DOMContentLoaded', function() {
    // Get buttons from the overlay
    const continuePatientBtn = document.getElementById('continue-patient');
    const continueHospitalBtn = document.getElementById('continue-hospital');
    
    // Get chatbot elements
    const chatbotToggleBtn = document.getElementById('open-chatbot');
    const chatbotContainer = document.querySelector('.chatbot-container');
    
    // Initially show the overlay when the page loads
    document.getElementById('overlay').style.display = 'flex';

    // Set chatbot initially hidden
    chatbotContainer.style.display = 'none';
    
    // Button click handlers for overlay
    continuePatientBtn.addEventListener('click', () => {
        // Hide overlay and show the home content
        document.getElementById('overlay').style.display = 'none';
    });

    continueHospitalBtn.addEventListener('click', () => {
        // Redirect to the hospitals.html page
        window.location.href = 'hospitals.html';
    });

    // Button click handler for chatbot toggle
    chatbotToggleBtn.addEventListener('click', () => {
        if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
            chatbotContainer.style.display = 'flex'; // Show chatbot
        } else {
            chatbotContainer.style.display = 'none'; // Hide chatbot
        }
    });
});


