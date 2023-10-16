import React, { Component } from "react";

class HandleEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggelStatus: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            toggelStatus: !state.toggelStatus
        }))
    }

    render() {
        return (
            // <Clicker />
            <button onClick={this.handleClick}>
                {this.state.toggelStatus ? 'ON' : 'OFF'}
                <p>Kondisi sekarang {this.state.toggelStatus ? 'Menyala' : 'Mati'}</p>
            </button>
        );
    }
}

// function Clicker() {
//     function handleClick(e) {
//         alert('berhasil klik!')
//         e.preventDefault()
//     }
//     return (
//         <a href="#" onClick={handleClick}> Klik aku bang!</a>
//     )
// }

export default HandleEvent;