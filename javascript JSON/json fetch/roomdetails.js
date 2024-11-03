// Fetch the JSON data
fetch('roomdetails.json')
    .then(response => response.json())
    .then(data => {
        const pgListings = document.getElementById('pg-listings');
        
        // Loop through each object and create a div for each
        data.forEach(pg => {
            const pgDiv = document.createElement('div');
            pgDiv.className = 'pg-item';
            pgDiv.innerHTML = `
                <h2>${pg.name}</h2>
                <p>Location: ${pg.location}</p>
                <p>Price: ${pg.price}</p>
            `;
            pgListings.appendChild(pgDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// // Function to add new PG data dynamically
// function addNewPG(newPG) {
//     const pgListings = document.getElementById('pg-listings');
    
//     const pgDiv = document.createElement('div');
//     pgDiv.className = 'pg-item';
//     pgDiv.innerHTML = `
//         <h2>${newPG.name}</h2>
//         <p>Location: ${newPG.location}</p>
//         <p>Price: ${newPG.price}</p>
//     `;
    
//     pgListings.appendChild(pgDiv);
// }

// // Example of adding new PG data dynamically
// const newPGData = {
//     id: 3,
//     name: "PG C",
//     location: "Area 3",
//     price: "7000"
// };

// // Call the function to add new data
// addNewPG(newPGData);
