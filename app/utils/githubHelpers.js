import axios from 'axios';


function getUserInfo(username){
    return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

function getTotalStars(repos) {
    return repos.data.reduce( (prev,current) => prev + current.stargazers_count ,0 )
}

function getPlayerData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(totalStars => {
            return {
                followers: player.followers,
                totalStars
            }
        })
}

function calculateScores(players) {
    return [
        players[0].followers*3 + players[0].totalStars,
        players[1].followers*3 + players[1].totalStars
    ]
}

const githubHelpers = {
    getPlayersInfo: players =>{
        return axios.all( players.map( username =>{
            return getUserInfo(username);
        })).then(info => {
            return info.map(user=>{
                return user.data;
            })
        }).catch(err => {
            console.warn('Error in getPlayersInfo', err);
        })
    },
    battle: players =>{
        let playerOneData = getPlayerData(players[0]);
        let playerTwoData = getPlayerData(players[1]);
        return axios.all([playerOneData,playerTwoData])
            .then(calculateScores)
            .catch(err => {console.log('Error in getPlayersInfo: ',err)})
    }
};

export default githubHelpers;