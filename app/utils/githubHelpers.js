import axios from 'axios';

let id = "",
    secret = "",
    tocken = "VGB7QCT",
    param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username){
    return axios.get(`https://api.github.com/users/${username}`);
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
    }
};

export default githubHelpers;