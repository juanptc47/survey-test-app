// survey .reducer
export type SurveyQuestion = {
    questionText: string;
    placeholder:string;
    inputType: string;
    id: string;
}
export type SurveyState = {
    questionsStatus: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS';
    questions: Array<SurveyQuestion>;
    surveySubmitionStatus: 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS';
}

// State Type => Object composed of all reducer types
export type AppState = {
    surveyState: SurveyState;
}