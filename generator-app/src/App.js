import React from 'react';
import Characteristics from './Characteristics.jsx'
import  * as careerData from './data/careers.json'
import './App.css';


const data = careerData;

class App extends React.Component {

    render() {
        return <div className="App">
            <Characteristics propsData={JSON.stringify(data)}/>
        </div>
    }
}

export default App;


