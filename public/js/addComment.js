async function handleNewCommentCreation() {
    const commentBody = document.getElementById('newComment-body').value;

    //grab post id from URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log('new comment will be created');
    console.log(commentBody + " " + post_id + " ")

    if (commentBody) {
        const newComment = {
            body: commentBody,
            post_id: post_id
        }


        const response = await fetch('/api/comments/createComment', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
            alert('comment was made');

        } else {
            alert('Failed to create new comment')
        }
    }
}

document.getElementById('newComment-submit').addEventListener('click', handleNewCommentCreation);