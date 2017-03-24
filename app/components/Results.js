import React from 'react';
import UserDetailWrapper from './UserDetailWrapper';
import styles from '../styles/index';
import {Link} from 'react-router';
import MainContainer from './MainContainer';
import Loading from './Loading';

const PropTypes = React.PropTypes;

function puke(obj){
    return <pre>{JSON.stringify(obj,null,' ')}</pre>
}


function StartOver() {
    return(
        <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12" style={styles.space}>
                <Link to="/playerOne">
                    <button className="btn btn-lg btn-danger">
                        Start Over
                    </button>
                </Link>
            </div>
        </div>
    )
}

function Results(props){

    if(props.scores[0] === props.scores[1]){
        return (props.isLoading
                ? <Loading/>
                : <MainContainer>
                        <h1>It's a tie</h1>
                        <StartOver/>
                    </MainContainer>
        )
    }

    let winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    let looserIndex = winnerIndex === 0 ? 1: 0;
    return (props.isLoading
            ? <Loading/>
            : <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailWrapper header="Winner" scores={props.scores[winnerIndex]} playerInfo={props.playersInfo[winnerIndex]}/>
                    <UserDetailWrapper header="Looser" scores={props.scores[looserIndex]} playerInfo={props.playersInfo[looserIndex]}/>
                </div>
                <StartOver/>
            </MainContainer>
    )
}


Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;