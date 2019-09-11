import React,{Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './Home.css';
import {click} from '../Actions/ActionCreator'

class Home extends Component{

    clickHandler = (event)=>{
           if(event.target.name==="inc"){
               this.props.click(this.props.store.count+1);
             }
           else{
              this.props.click(this.props.store.count-1);
           }

    }

   render(){

    return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                   <span>
                       <button className="btn badge badge-pill badge-primary mx-1" onClick={this.clickHandler} name="inc">inc</button>
                       <button className="btn badge badge-pill badge-primary mx-1">count {this.props.store.count}</button>
                      <button className="btn badge badge-pill badge-primary mx-1" onClick={this.clickHandler} name="dec">dec</button>
                   </span>
                </header>
              </div>
         );

   }

}

const mapStateToProps = (state)=>{

    return {
        store:state
    }
}

const mapDispatchToProps = (dispatch) =>{

  return {
      click:(new_count)=>{
          dispatch(click(new_count))
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
