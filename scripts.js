
// Add event listeners to the tab buttons
document.getElementById('homeBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    toggleTab('tab-home'); // Toggle the visibility of the upload tab
});

document.getElementById('uploadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    toggleTab('tab-upload'); // Toggle the visibility of the upload tab
});

document.getElementById('analysisBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    toggleTab('tab-analysis'); // Toggle the visibility of the analysis tab
});

document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    toggleTab('tab-download'); // Toggle the visibility of the download tab
});

document.getElementById('settingsBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    toggleTab('tab-settings'); // Toggle the visibility of the settings tab
});


// Function to toggle the visibility of the tab
function toggleTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.add('hidden');
    });

    // Show the specified tab
    var tab = document.getElementById(tabId);
    tab.classList.remove('hidden');

    // Optionally, you can also remove the 'active' class from all tab buttons
    var tabButtons = document.querySelectorAll('.group');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Optionally, you can add the 'active' class to the clicked tab button
    var clickedButton = document.getElementById(tabId + 'Btn');
    clickedButton.classList.add('active');
}
