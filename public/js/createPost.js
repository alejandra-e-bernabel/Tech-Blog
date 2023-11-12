//this might access the userID:

async function handleNewPostCreation(event) {

    const postTitle = document.getElementById('newPost-title').value;
    const postBody = document.getElementById('newPost-body').value;
    

    // event.preventDefault();

    console.log('new post will be created');
    console.log(postBody + " " + postTitle + " ")

    if (postTitle && postBody) {
        const newPost = {
            title: postTitle,
            body: postBody,
        }

        const response = await fetch('/api/posts/createPost', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace('/home');
            alert('post was made');
        } else {
            alert('Failed to create new post')
        }
    }

}

document.getElementById('newPost-submit').addEventListener('click', handleNewPostCreation);