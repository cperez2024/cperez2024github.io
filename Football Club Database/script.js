// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(clubData); // Pass the initialized data variable

// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" data-name="${club.name}" onclick="handleClubClick(this)">
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Extract the club name from the clicked element
    const clubName = element.querySelector('h2').innerText;
    
    // Find the club data based on the club name
    const selectedClub = clubData.find(club => club.name === clubName);

    // Check if the club is found to avoid errors
    if (selectedClub) {
        // Pass the found club details to displayClubDetails function
        displayClubDetails(selectedClub);
    } else {
        console.error('Club not found:', clubName);
    }
}

// Display club details
function displayClubDetails(club) {
    const clubDetailsHTML = `
        <h1>${club.name}</h1>
        <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:30vh;">
        <p><b>League: </b>${club.league}</p>
        <p><b>City: </b>${club.city}</p>
        <p><b>Stadium: </b>${club.stadium}</p>
        <p><b>Description: </b>${club.description}</p>
        <button onclick="window.location.href='index.html';" style="width:100%;">Back</button>
        <button onclick="viewClubPlayers('${club.name}');" style="width:100%;">View Players</button>
    `;
    
    // Set the club details HTML in the main container
    clubDetailsContainer.innerHTML = clubDetailsHTML;
}

// Function to view club players
function viewClubPlayers(clubName) {
    // Find the club object based on the club name
    const selectedClub = clubData.find(club => club.name === clubName);
    
    // Check if the club has players
    if (selectedClub && selectedClub.players && selectedClub.players.length > 0) {
        // Generate HTML for the list of players with their details
        const playersHTML = `
            <h2>Players of ${selectedClub.name}</h2>
            <ul>
                ${selectedClub.players.map(player => `
                    <li><b>${player.name}</b> - Position: ${player.position}, Number: ${player.number}, Goals: ${player.goals}, Assists: ${player.assists}</li>
                `).join('')}
            </ul>
            <button onclick="window.location.href='index.html';" style="width:100%;">Home</button>
        `;
        
        // Display the players list in the main container
        clubDetailsContainer.innerHTML = playersHTML;
    } else {
        clubDetailsContainer.innerHTML = `<p>No players available for ${clubName}.</p>`;
    }
}

// Handle search input
function handleSearchInput(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredClubs = clubData.filter(club => 
        club.name.toLowerCase().includes(searchTerm) ||
        club.city.toLowerCase().includes(searchTerm) ||
        club.league.toLowerCase().includes(searchTerm)
    );
    displayClubs(filteredClubs);
}
