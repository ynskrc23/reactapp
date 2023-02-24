import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useEffect, useState } from'react';
import Home from './Home';
import Function from './Function';

function App() {

    const [text, setText] = useState("this react developer");

    const [count, setCount] = useState(0);

    const [user, setUser] = useState([]);

    /*
    const fetchData = () => {
        return axios.get("http://127.0.0.1:8000/api/users")
        .then((response) => setUser(response.data["users"]));
    }
    */

    const fetchData = () => {
        return fetch("http://127.0.0.1:8000/api/users")
        .then((response) => response.json())
        .then((data) => setUser(data['users']));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <Function/>
            <Home/>
            <h1>Welcome Learn React</h1>
            <span>{ text }</span>
            <button>Submit</button>
            <Button>Bootstrap Primary</Button>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <h1>User Lists</h1>
            <ul>
                { user && user.length > 0 && user.map((userObj, index) =>(
                    <li key={ userObj.id }>
                        { userObj.name } - { userObj.email }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;