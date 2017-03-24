import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';


const PropTypes = React.PropTypes;

class ResultsContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            scores: []
        }
    }
    componentDidMount(){
        let players = this.props.location.state.playersInfo;
        githubHelpers.battle(players)
            .then(scores => {
                this.setState({
                    isLoading: false,
                    scores
                })
            })
    }
    render(){
        return <Results
            isLoading={this.state.isLoading}
            playersInfo={this.props.location.state.playersInfo}
            scores={this.state.scores}
        />
    }
}

export default ResultsContainer;