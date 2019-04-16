import React from 'react';
import Stepper from "./shared/Stepper.jsx";
import styles2 from './App.css';
import styles from "./characteristics.scss";



class App extends React.Component {

    render() {
        return <div className={styles2.App}>
            <section className={styles.section}>
            <Stepper />
            </section>
        </div>
    }
}

export default App;
