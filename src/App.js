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
        winner: null,
    };

    onCellClick(row, column) {
        if (null !== this.state.grid[row][column] || null !== this.state.winner) {
            return;
        }

        let newGrid = this.state.grid;
        newGrid[row][column] = this.state.currentPlayer;

        this.setState({
            grid: newGrid,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
            winner: this.hasWon(newGrid),
        });
    }

    hasWon(grid) {
        for (let i = 0; i < 3; i++) {
            if (
                (
                    grid[i][0] === grid[i][1] && grid[i][1] === grid[i][1] &&
                    grid[i][0] !== null && grid[i][1] !== null && grid[i][2] !== null
                ) ||
                (
                    grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] &&
                    grid[0][i] !== null && grid[1][i] !== null && grid[2][i] !== null
                )
            ) {
                return this.state.currentPlayer;
            }
        }

        if (
            (
                grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] &&
                grid[0][0] !== null && grid[1][1] !== null && grid[2][2] !== null

            ) ||
            (
                grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] &&
                grid[0][2] !== null && grid[1][1] !== null && grid[2][0] !== null
            )
        ) {
            return this.state.currentPlayer;
        }

        return null;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {
                    this.state.winner !== null ?
                        <h1>{this.state.winner} a gagné</h1> :
                        null
                }
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
