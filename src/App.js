import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        grid: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
        currentPlayer: 'X',
    };

    onCellClick(row, column) {
        if (null !== this.state.grid[row][column]) {
            return;
        }

        let newGrid = this.state.grid;
        newGrid[row][column] = this.state.currentPlayer;

        this.setState({
            grid: newGrid,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={() => this.onCellClick(0, 0)}>{this.state.grid[0][0]}</td>
                            <td onClick={() => this.onCellClick(0, 1)}>{this.state.grid[0][1]}</td>
                            <td onClick={() => this.onCellClick(0, 2)}>{this.state.grid[0][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.onCellClick(1, 0)}>{this.state.grid[1][0]}</td>
                            <td onClick={() => this.onCellClick(1, 1)}>{this.state.grid[1][1]}</td>
                            <td onClick={() => this.onCellClick(1, 2)}>{this.state.grid[1][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.onCellClick(2, 0)}>{this.state.grid[2][0]}</td>
                            <td onClick={() => this.onCellClick(2, 1)}>{this.state.grid[2][1]}</td>
                            <td onClick={() => this.onCellClick(2, 2)}>{this.state.grid[2][2]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
