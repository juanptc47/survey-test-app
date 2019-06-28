// React
import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { AppState, SurveyQuestion } from '../redux/store/store-types';
// Action Creators
import { getSurveyQuestions, postSurveyAnswers } from '../redux/actions/survey.actions';

// Semantic UI Components
import {
    Input,
    Icon,
    Button,
    Form,
} from 'semantic-ui-react';

// Screen props interface
interface SurveyScreenProps { 
    surveyQuestions: Array<SurveyQuestion>;
    surveyQuestionsStatus: string;
    getSurveyQuestions: Function;
    surveySubmitionStatus: string;
    postSurveyAnswers: Function;
};
// Screen state interface
interface SurveyScreenState {
    answers: {[key: string]: string};
};

const initalState: SurveyScreenState = {
    answers: {}
}

class SurveyScreen extends React.Component<SurveyScreenProps, SurveyScreenState> {
    
    state = initalState

    componentDidMount() {
        this.props.getSurveyQuestions();
    }

    componentDidUpdate(prevProps: SurveyScreenProps) {
        if(prevProps.surveySubmitionStatus==='PENDING' && this.props.surveySubmitionStatus==='SUCCESS') {
            alert('Would have successfully submited survey with the following answers: '+JSON.stringify(this.state.answers)+'\n\nScreen Navigation handling and display of user message to notify success could be done in this moment');
            this.setState(initalState);
        }
    }

    _handleAnswerInputChange = (questionId: string, answerText: string) => {
        let newAnswers: {[key: string]: string} = {};
        newAnswers[questionId] = answerText;
        this.setState({
            answers: {...this.state.answers, ...newAnswers},
        });
    }

    _handleFormSubmition = () => {
        this.props.postSurveyAnswers(this.state.answers);
    }

    render() {
        return(
            <div className='survey-screen-wrapper'>
                <h1>Pancakes Survey!</h1>
                {this.props.surveyQuestionsStatus==='SUCCESS' &&
                    <Form className='questions-wrapper' onSubmit={this._handleFormSubmition}>
                        {this.props.surveyQuestions.map((question, index) => {
                            return (
                                <div key={index} className='survey-input' >
                                    <label>{question.questionText}</label>
                                    <Input value={this.state.answers[question.id] || ''} required={true} placeholder={question.placeholder} type={question.inputType} onChange={(e) => this._handleAnswerInputChange(question.id, e.currentTarget.value)} />
                                </div>
                            )
                        })}
                        <div className='flex-centered-column'>
                            <Button content='Submit' color='teal' size='big' />
                        </div>
                    </Form>
                }
                {this.props.surveyQuestionsStatus==='PENDING' &&
                    <div className='loader-overlay'>
                        <Icon name={'spinner'} loading={true} size={'huge'} color={'teal'} />
                    </div>
                }
                {this.props.surveySubmitionStatus==='PENDING' &&
                    <div className='loader-overlay'>
                        <Icon name={'spinner'} loading={true} size={'huge'} color={'teal'} />
                    </div>
                }
                {this.props.surveySubmitionStatus==='SUCCESS' &&
                    <div className='success-massage-overlay'>
                        <span>¡Muchas gracias! <br/> Recibimos tus respuestas exitosamente.</span>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        surveyQuestions: state.surveyState.questions,
        surveyQuestionsStatus: state.surveyState.questionsStatus,
        surveySubmitionStatus: state.surveyState.surveySubmitionStatus,
    }
}

const mapDispatchToProps = {
    getSurveyQuestions,
    postSurveyAnswers,
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);
