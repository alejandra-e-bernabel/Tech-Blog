async function handlePostEdit () {
    const postTitle = document.getElementById('editPost-title').value;
    const postBody = document.getElementById('editPost-body').value;

    console.log('post will be updated');
    console.log(postBody + " " + postTitle + " ");

    //grab post ID from URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (postBody && postTitle) {
        const updatedPost = {
            title: postTitle,
            body: postBody
        }

        const response = await fetch(`/api/posts/updatePost/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedPost),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to update post');
        };
    } else {
        //handle user not inputting anything for title of content
    }
};

async function handlePostDelete() {

    //grab post id from URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete post');
    };
};

async function handleCancelEdit () {
    document.location.replace('/home');
}

document.getElementById('editPost-submit').addEventListener('click', handlePostEdit);
document.getElementById('editPost-delete').addEventListener('click', handlePostDelete);
document.getElementById('editPost-cancel').addEventListener('click', handleCancelEdit);
