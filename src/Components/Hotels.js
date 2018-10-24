import React, { Component } from 'react';
import obj1 from '../obj1';
import obj2 from '../obj2';
import Hotel from './Hotel';

class Hotels extends Component {
    state = {
       obj1 : obj1,
       obj2 : obj2
    }

    update = () => {
        this.forceUpdate();
      }

    render() {
        const web = this.props.website;
        const des = this.props.destination;
        var startdate = 0;
        var enddate = Number.MAX_SAFE_INTEGER;
        if(JSON.stringify(this.props.startDate) !== "{}")
            startdate = this.props.startDate.getTime();
        if(JSON.stringify(this.props.endDate) !== "{}")
            enddate = this.props.endDate.getTime();
        var start = new Date("10/20/18").getTime();
        var end = new Date("10/27/18").getTime();
        var rightscope = (startdate >= start) && (end >=enddate) && (enddate >= start) && (startdate <= end) && (startdate <= enddate);
        var data = [];
        if(web && des && rightscope){
            if(des === "Chicago" && web === "Hotels"){
                data = this.state.obj1.data;
            }
            if(des === "NewYork" && web === "Expedia"){
                data = this.state.obj2.data;
            }
        }

    
         function  handleSort(e){
            e.preventDefault();
            // console.log(e.target.value);
                if(e.target.value === 'price') {
                    data.sort(function(a, b) {
                            return a.nightlyPrice- b.nightlyPrice;
                            });
                        // console.log(data);
                    }
       }
    

    //    console.log(data);
        return (
            <div className="hotels">
                    <h3>Hotel lists :</h3>

                    <div className="sorts">
                        <label className="sort-types" style={{backgroundColor : "lightblue"}}>Sort by</label>
                        <select className="sort-way" onChange={e =>handleSort(e)}>
                                <option value="type"  defaultValue>--Select</option>
                                <option value="price" >price</option>
                        </select>
                        <button onClick ={this.update}>Search</button>
                    </div>

                { data.length >0 ?
                    <div className="units">
                    {
                        data.map((obj,ind) => {
                            return <Hotel key={ind} imgSrc={obj.imgSrc} name={obj.hotelName} address={obj.address} rating={obj.rating} price={obj.nightlyPrice} />
                        })
                    } 
                    </div>
                :null}
            </div>
        );
    }
}

export default Hotels;