import React from 'react';
import Filter from './Filter';
import Content from './Content';
import {OPTIONS} from './Filter';

class Main extends React.Component {
    state = {
        uniqed: OPTIONS
    }

    updateData = (value) => {
        this.setState({ uniqed: value })
    }
    
    render() {

        return (
            <div className="d-flex flex-row" style={{backgroundColor: 'white'}}>
                <Filter updateData={this.updateData} data={this.state.uniqed}/>
                <div className="d-flex flex-column" style={{ width:'80%'}}>
                    {this.state.uniqed.map((option, index) => {
                        return <Content url={`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${option}`}
                        header={option} key={index} />
                    })}
                </div>
            </div>
        )
    }
}

export default Main;