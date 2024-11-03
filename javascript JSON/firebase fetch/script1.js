// Fetch data from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('userContainer');
        
        // Get the first post (index 0)
        const post = posts[0]; // This fetches the first post directly

        // Log the post data to the console
        console.log(post);

        // Create a div for the post
        const postDiv = document.createElement('div');
        
        // Create HTML for the post data
        postDiv.innerHTML = `
            <h2>User ID: ${post.userId} (Post ID: ${post.id})</h2>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `;
        
        // Append postDiv to the container
        container.appendChild(postDiv);
    })
    .catch(error => console.error('Error fetching post data:', error));
