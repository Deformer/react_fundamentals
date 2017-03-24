import React from 'react'

const PropTypes = React.PropTypes;

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
    }
}

class Loading extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: this.props.text
        };
        this.originalText = this.props.text;
    }
    componentDidMount(){
        let stopper = this.originalText+'...';
        this.interval = setInterval(function(){
            if(this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }.bind(this),this.props.speed)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
};

Loading.defaultProps = {
    speed: 300,
    text: 'Loading'
}

export default Loading;