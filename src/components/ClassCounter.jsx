import React from "react";

class ClassCounter extends React.Component { //наследуемся от компонента

    constructor(props) { //создаём состояние
        super(props);
        this.state = { //состояние)
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        //это чтоб не терялся контекст
    }

    increment() {
        this.setState({count: this.state.count += 1})
        //у этого комп. вызываем setState, меняем в нём count на этот count + 1
    }

    decrement() {
        this.setState({count: this.state.count -= 1})
    }



//везде this.state так как класс
    render() {
            return (
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Increm</button>
                    <button onClick={this.decrement}>Deccrem</button>
                </div>
            )
        }
    }

    export default ClassCounter;