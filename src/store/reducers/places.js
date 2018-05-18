import { DELETE_PLACE, ADD_PLACE } from "../actions/actionTypes";
import placeImage from '../../../src/assets/beautiful-place.jpg';

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName,
                    key : `${Math.random()}`,
                    image: placeImage,
                    location: action.location
                  })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey;
                  })
            }
        
        default:
            return state;
        
    }
}

export default reducer;