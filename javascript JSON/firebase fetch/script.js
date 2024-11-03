// Fetch data from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('userContainer');
        
        // Iterate through each user object
        posts.forEach(post => {
            // Log user data to the console
            console.log(post);

            // Create a div for each user
            const userDiv = document.createElement('div');
            
            // Create HTML for user data
            userDiv.innerHTML = `
                <h2>${post.userId} (${post.id})</h2>
                <p>Title: ${post.title}</p>
                <p>Phone: ${post.body}</p>
               
            `;
            
            // Append userDiv to the container
            container.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error fetching user data:', error));
