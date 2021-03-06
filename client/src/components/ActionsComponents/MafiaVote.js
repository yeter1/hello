import React, { Component } from 'react';

import Button from './Button';

class MafiaVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eliminationVote: ''
        }
    }
    handleRadioButtons(e) {
        this.setState({ eliminationVote: e.target.value });
    }
    render() {
        return (
            <div>
                <div className="role">Who would you like to eliminate?</div>
                <div className="role">
                    {this.props.players.filter(player => player.eliminated === false && player.role !== 'Mafia').map(player => {
                        return (
                            <div key={player.username}>
                                <label>
                                    <input 
                                        type="radio" 
                                        name={player.username} 
                                        value={player.username} 
                                        checked={player.username === this.state.eliminationVote}
                                        onChange={this.handleRadioButtons.bind(this)}
                                        disabled={null}
                                    />
                                    {player.username}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="button-group">
                    <Button value={this.state.eliminationVote} onClick={this.props.submitVote} disabled={null} use='Mafia'>Submit</Button>
                </div>
            </div>
        );
    }
}

export default MafiaVote;