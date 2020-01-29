//A reducer takes in two things: An action, and a copy of current state
function posts(state = [], action) {
    console.log(state, action) 
    return state;
}

export default posts;