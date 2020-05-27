import React from 'react';
import {Card, Chart, CountryPicker} from './components/index';
import styles from './App.module.css';
import fetchData from './api';



class App extends React.Component{

    state = {
        data: {},
    }

    async componentDidMount(){
      const fetchedData = await fetchData();
      this.setState({data:fetchedData })
    }

    render(){
        const {data} = this.state
        return(
            <div className={styles.container}>
                <Card data={data}/>
                <Chart data={data}/>
                <CountryPicker data={data}/>
            </div>
        );
    }
}

export default App;