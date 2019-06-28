// Redux Types
import { Dispatch, Action } from 'redux';

// APIs
import SurveyAPI from '../apis/survey.api';

// State Types
import {  SurveyQuestion } from '../store/store-types';

/*
* Action Types
*/
export const SURVEY_SET_QUESTIONS = 'SURVEY_SET_QUESTIONS';
export const SURVEY_SET_SUBMITION_STATUS = 'SURVEY_SET_SUBMITION_STATUS'

/*
* Actions Interfaces
*/
export interface SurveyAction extends Action {
    questionsStatus?: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS';
    questions?: Array<SurveyQuestion>;
    surveySubmitionStatus?: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS';
}

/*
* Asynchronous Action Creators (with redux-thunks)
* Verbs should be the same as the http request
*/
export const getSurveyQuestions = () => {
    return (dispatch: Dispatch, getState: Function) => {
        dispatch(setSurveyQuestions('PENDING'));
        const surveyAPI = new SurveyAPI();
        
        surveyAPI.fetchSurveyQuestions((res:Array<SurveyQuestion>, err: any) => {
            if(!err) {
                dispatch(setSurveyQuestions('SUCCESS', res));
            } else {
                dispatch(setSurveyQuestions('FAILED'));
            }
        })
    }
}

export const postSurveyAnswers = (answers: {[key: string]: string}) => {
    return (dispatch: Dispatch, getState: Function) => {
        dispatch(setSurveySubmitionStatus('PENDING'));
        const surveyAPI = new SurveyAPI();

        surveyAPI.submitSurveyAnswers(answers, (res, err) => {
            if(!err) {
                dispatch(setSurveySubmitionStatus('SUCCESS'));
            } else {
                dispatch(setSurveySubmitionStatus('FAILED'));
            }
        })
    }
}


/*
* Synchronous Action Creators
*/
export const setSurveyQuestions = (questionsStatus: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS', questions?: Array<SurveyQuestion>):SurveyAction  => {
    return {
        type: SURVEY_SET_QUESTIONS,
        questions: questions,
        questionsStatus: questionsStatus,
    }
}

export const setSurveySubmitionStatus  = (surveySubmitionStatus: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS'):SurveyAction  => {
    return {
        type: SURVEY_SET_SUBMITION_STATUS,
        surveySubmitionStatus: surveySubmitionStatus,
    }
}
