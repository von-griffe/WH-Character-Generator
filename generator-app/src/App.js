import React from 'react';
import Characteristics from './Characteristics.jsx'
import Careers from "./Careers.jsx";
import  * as data from './data/careers.json'
import './App.css';


class App extends React.Component {
    render() {
        return <div className="App">
            <Characteristics propsData={data}/>
        </div>
    }
}

export default App;


