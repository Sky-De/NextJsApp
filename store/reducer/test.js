export default (posts=[],action) => {

    switch (action.type) {
        case 'GET_POSTS':
            console.log('GET_POSTS');
            console.log(action.payload);
            return action.payload;
        default:
            return posts;
    }
}