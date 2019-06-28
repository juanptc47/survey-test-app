/** 
 *  TODO: superagent currently not in use.
 *  Would use with real requests
 * */
//import request from 'superagent';

// Import store types to enforce data structure on responses
import { SurveyQuestion } from '../store/store-types';

class SurveyAPI {

    //constructor() {
        // TODO: Define port and URL prefix for this API's endpoints
    //}

    fetchSurveyQuestions(callback: (res: any, err?: any)=>void) {
        // Would call real endpoint. Using setTimeout to simulat async function
        setTimeout(()=>{
            // If the endpoint's response data structure deferred from the one needed for our app state, this would be the time to parse that response.
            callback(fakeSurveyQuestions);
        }, 2000)
    }

    submitSurveyAnswers(answers: {[key: string]: string}, callback: (res: any, err?: any)=>void) {
        // Would call real endpoint. Using setTimeout to simulat async function
        setTimeout(()=>{
            // If the endpoint's expected payload data structure deferres from the one used in our app, this would be the time to parse that payload.
            callback('Success!');
        }, 2000)
    }
}

const fakeSurveyQuestions: Array<SurveyQuestion> = [
    {
        id: '1',
        questionText: 'What\'s your name?',
        placeholder: 'Jhon Doe',
        inputType: 'text',
    },
    {
        id: '2',
        questionText: 'What\'s your email?',
        placeholder: 'john.doe@email.com',
        inputType: 'email',
    },
    {
        id: '3',
        questionText: 'How old are you?',
        placeholder: '18',
        inputType: 'number',
    },
    {
        id: '4',
        questionText: 'Do you like pancakes?',
        placeholder: 'Yes! I love pancakes!',
        inputType: 'text',
    }
]

export default SurveyAPI;
