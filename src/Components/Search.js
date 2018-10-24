import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';



class Search extends Component {
   
    state = {
        website: '',
        destination:'',
        startDate: moment(),
        endDate: moment()
    }


    handleSelectWebsite = (e) => {
        e.stopPropagation();
        this.setState({
            website: e.target.value
        })
        setTimeout(() => {this.props.transfer(this.state.website,this.state.destination, this.state.startDate._d, this.state.endDate._d)}, 500)
    }

    handleSelectDestination = (e) => {
        e.stopPropagation();
        this.setState({
            destination:e.target.value
        })
        setTimeout(() => {this.props.transfer(this.state.website,this.state.destination, this.state.startDate._d, this.state.endDate._d)}, 500)
    }

    handleChangeStartDate =  (date) => {
        this.setState({
          startDate: date
        });
        setTimeout(() => {this.props.transfer(this.state.website,this.state.destination, this.state.startDate._d, this.state.endDate._d)}, 500)
      }

      handleChangeEndDate =  (date) => {
        this.setState({
          endDate: date
        });
        setTimeout(() => {this.props.transfer(this.state.website,this.state.destination, this.state.startDate._d, this.state.endDate._d)}, 500)
      }


    render() {
        // console.log(this.state.startDate._d);
        // console.log(this.state.endDate._d);

        return (
            <div className="search-bar">

                <div className="search-web">
                    <label>Select the website to book :</label>
                        <select onChange={this.handleSelectWebsite}>
                             <option value="Website">website</option>
                            <option value="Hotels">Hotels.com</option>
                            <option value="Expedia">Expedia.com</option>
                        </select>
                </div>


                <div className="destination">
                    <label>Destination, property, or landmark :</label>
                        <select onChange={this.handleSelectDestination}>
                            <option value="Destination">destination</option>
                            <option value="Chicago">Chicago</option>
                            <option value="NewYork">NewYork</option>
                        </select>
                </div>

                <div className="check-date">
                    <label>Check In :</label>
                        <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChangeStartDate} />
                    <label>Check Out :</label>
                        <DatePicker 
                        selected={this.state.endDate}
                        onChange={this.handleChangeEndDate} />
                </div>

                <div className="rooms">
                    <label>Rooms</label>
                        <select>
                            <option value="num">1</option>
                            <option value="num">2</option>
                        </select>
                </div>

                 <div className="people">
                        <label>Adults</label>
                        <select>
                            <option value="adult">1</option>
                            <option value="adult">2</option>
                        </select>
                        <label>Aged 18+</label>
                </div>

                 <div className="people">
                        <label>children</label>
                        <select>
                            <option value="children">0</option>
                        </select>
                        <label>Aged 0-17</label>
                </div>
            </div>
        );
    }
}

export default Search;