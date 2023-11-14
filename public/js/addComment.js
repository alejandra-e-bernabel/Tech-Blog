window.onload = function() {
    //make sure comment form is hidden when the page loads
    //make sure add comment button is visible when page loads
    // make sure warning is hidden when page loads
    const addCommentButton = document.getElementById('addComment-button');
    const commentForm = document.getElementById('newComment-form');
    // const commentError = document.getElementById('noCommentBodyWarning');

    if (addCommentButton.classList.contains('hidden')) {
        commentForm.classList.remove('hidden');
    }

    if (!commentForm.classList.contains('hidden')) {
        commentForm.classList.add('hidden');
    }

    // if (!commentError.classList.contains('hidden')) {
    //     commentError.classList.add('hidden');
    // }
};

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
            // alert('comment was made');

        } else {
            alert('Failed to create new comment');
        }
    } else {
        const commentError = document.getElementById('noCommentBodyWarning');

        if(commentError.classList.contains('hidden')) {
            commentError.classList.remove("hidden");
            window.setTimeout(function () {
                if (!commentError.classList.contains('hidden')) {
                    commentError.classList.add("hidden");
                }
            }, 5000);
        }
    }
};

function displayCommentForm () {
    const commentForm = document.getElementById('newComment-form');
    const addCommentButton = document.getElementById('addComment-button');

    commentForm.classList.remove('hidden');
    addCommentButton.classList.add('hidden');

};

function hideCommentForm () {
    const commentForm = document.getElementById('newComment-form');
    const addCommentButton = document.getElementById('addComment-button');

    commentForm.classList.add('hidden');
    addCommentButton.classList.remove('hidden');
}

document.getElementById('newComment-submit').addEventListener('click', handleNewCommentCreation);

document.getElementById('addComment-button').addEventListener('click', displayCommentForm);

document.getElementById('newComment-cancel').addEventListener('click', hideCommentForm);