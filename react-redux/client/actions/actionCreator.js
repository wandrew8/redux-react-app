// increment likes
export function increment(index) {
    return {
        type: 'LIKE_COUNTER',
        index,
    }
}

// add comments
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}

// remove comments
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index,
    }
}