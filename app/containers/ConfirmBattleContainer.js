import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';



class ConfirmBattleContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            playersInfo:[]
        }
        this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
    }
    componentDidMount(){
        let query = this.props.location.query;
        let users = githubHelpers.getPlayersInfo([ query.playerOne, query.playerTwo ]);
        users.then(users => {
            console.log(users)
            this.setState({
                isLoading: false,
                playersInfo: users
            })
        })
    }
    handleInitiateBattle(){
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    }
    render(){
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo}
            />
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}



export default ConfirmBattleContainer;
