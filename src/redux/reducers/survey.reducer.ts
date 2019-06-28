import {
    // First import action types used by the new reducer
    SURVEY_SET_QUESTIONS,
    SURVEY_SET_SUBMITION_STATUS,
} from '../actions/survey.actions'
import {
    // To keep things tight and structured, import Action Interfaces separately
    SurveyAction
} from '../actions/survey.actions'
import { SurveyState } from '../store/store-types'

const initialState: SurveyState = {
    questionsStatus: 'IDLE',
    questions: [],
    surveySubmitionStatus: 'IDLE',
}

export default (state = initialState, action: SurveyAction) => {
    switch(action.type) {
        case SURVEY_SET_QUESTIONS : {
            let newState: SurveyState = {
                questions: action.questions || state.questions,
                questionsStatus: action.questionsStatus!,
                surveySubmitionStatus: state.surveySubmitionStatus,
            }
            return {...state, ...newState}
        }
        case SURVEY_SET_SUBMITION_STATUS : {
            let newState: SurveyState = {
                questions: state.questions,
                questionsStatus: state.questionsStatus,
                surveySubmitionStatus: action.surveySubmitionStatus!,
            }
            return {...state, ...newState}
        }
        default : {
            return {...state}
        }
    }
}