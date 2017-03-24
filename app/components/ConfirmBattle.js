import React from 'react';
import styles from '../styles/index'
import {Link} from 'react-router';
import UserDetailWrapper from './UserDetailWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const PropTypes = React.PropTypes;

function puke(obj){
    return <pre>{JSON.stringify(obj,null,' ')}</pre>
}



class ConfirmBattle extends React.Component{
    render(){
        return this.props.isLoading
            ? <Loading />
            : <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailWrapper header="Player 1" playerInfo={this.props.playersInfo[0]}/>
                    <UserDetailWrapper header="Player 2" playerInfo={this.props.playersInfo[1]}/>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={styles.space}>
                        <button type="button" className="btn btn-lg btn-success" onClick={this.props.onInitiateBattle}>
                            Initiate Battle
                        </button>
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="/playerOne">
                            <button className="btn btn-lg btn-danger">
                                Reselect Players
                            </button>
                        </Link>
                    </div>
                </div>
            </MainContainer>
    }
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};



export default ConfirmBattle;