export default (state = [], { type, payload }) => {
    switch (type) {

    case 'SET_LEGEND':
        return payload

    default:
        return state
    }
}
