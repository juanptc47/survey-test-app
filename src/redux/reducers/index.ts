// Redux imports
import { combineReducers } from 'redux';

// Reducers
import SurveyReducer from './survey.reducer'

export default combineReducers({
    surveyState: SurveyReducer,
});