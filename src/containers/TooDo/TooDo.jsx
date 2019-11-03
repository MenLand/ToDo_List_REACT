import React from 'react';
import './TooDo.css';
import AddItem from '../../components/AddItem/AddItem';
import EventsContext from '../../contexts/EventsContext';
import ItemsList from '../../components/ItemsList/ItemsList';
import Loading from '../../components/Loading/Loading';

// const ItemsList = React.lazy(() => new Promise(res => {
//     setTimeout(() => res(import('../../components/ItemsList/ItemsList')), 3000)

// }));

class TooDo extends React.Component {
    state = {
        isLoading: false,
        items: []
    }

    handleAddItem = (value) => {
        const newItem = { completed: false, title: value, id: Math.random() };
        this.setState({ items: [...this.state.items, newItem] })
    }

    deleteItem = (id) => {
        const newItems = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItems })
    }

    changeInput = (id) => {
        const newItems = this.state.items.map(item => {
            if (item.id === id) item.completed = !item.completed;
            return item;
        })

        this.setState({ items: newItems })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTimeout(() => this.setState({
                items: json.slice(0, 5),
                isLoading: true
            }), 3000))
    }

    render() {
        console.log('RENDER');
        const { items, isLoading } = this.state;
        return (
            <div className="too-do">
                <h1>Too Do List</h1>
                <AddItem onSubmit={this.handleAddItem} />
                <hr />
                <h3>Items: </h3>
                <EventsContext.Provider value={{
                    changeInput: this.changeInput,
                    deleteItem: this.deleteItem
                }}>
                    {items.length
                        ? <ItemsList items={items} />
                        : isLoading
                            ? <h4>No items :(</h4>
                            : <Loading />
                    }
                </EventsContext.Provider>
            </div>
        )
    }
}

export default TooDo;