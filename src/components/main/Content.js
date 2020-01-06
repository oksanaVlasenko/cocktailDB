import React from 'react';
import './content.css';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          url: this.props.url,
          cocktails: []
        } 
    }
   
    componentDidMount = () => {
        fetch(this.state.url)
            .then(res => res.json())
            .then(data => {
                const allData = data.drinks;
                const elems = allData.slice(0,10);
                this.setState({cocktails: elems});
            })
            .catch(error => console.log('error', error));
    }

    render(){
        return (
            <div >
                <div className="d-flex justify-content-start" style={{marginLeft: '2em', color: 'grey'}}>
                    <h3>{this.props.header}</h3>
                </div>
                <div className="container-fluid" >
                    <div className=" row " >
                    {this.state.cocktails.map((cocktail, index) => {
                        return <div className="card mb-3 col-12 col-md-4 col-sm-6 col-lg-5th col-xl-5th" 
                                key={index}>
                            <div >
                                <img className=" mb-9 card-img-top" 
                                src={cocktail.strDrinkThumb}
                                alt="hotel poster"
                                />
                                <h4 className="card-title">{cocktail.strDrink}</h4>
                            </div>
                        </div>
                    })} 
                    </div> 
                </div>  
            </div>
        )
    }
}

export default Content;