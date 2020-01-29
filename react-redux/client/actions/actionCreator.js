// Increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,
    }
}
//Add comments
export function addComments(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}

//Remove comments
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i,
    }
}