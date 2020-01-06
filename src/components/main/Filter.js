import React, { Component } from "react";
import Checkbox from "./Checkbox";
import './content.css';

export const OPTIONS = ["Ordinary Drink", "Cocktail", "Milk / Float / Shake", "Other/Unknown",
"Cocoa", "Shot", "Coffee / Tea", "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink / Soda"];

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: true
        }),
        {}
      ),
      uniqed: this.props.data
    }
  }
  
  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
  
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

        this.setState({
          uniqed : Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox])
        })
          
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
   
    return (
      <div className="containers list-group-item  flex-column align-items-start " style={{width: '20%', marginLeft: '1em'}}>
        <div className="row ">
            <h4  style={{color: 'grey', marginLeft: '2em'}}>Filter</h4>
          <div className="col-sm-12 d-flex justify-content-center">
            <form onSubmit={this.handleFormSubmit} style={{fontSize: '18px', marginTop: '1em'}}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary" onClick={() => { this.props.updateData(this.state.uniqed)}}>
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }   
}



  

export default Filter;