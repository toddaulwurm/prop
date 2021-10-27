import React, { Component } from 'react';
import styles from './Prop.module.css';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    // BELOW IS USED TO MANIPULATE STATE
    birthday = () => {
        this.setState({age : this.state.age+1})
        console.log(this.state.age);
    }
    render() {
        // CHILDREN IS PROPPED HERE                   vvvvvvv
        const { firstName, lastName, hairColor, children} = this.props;
        return <div>
                    <h1 className={styles.btn}>{ lastName }, {firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>

                    {/* and CHILDREN is called below */}
                    <p>{children}</p>

                    {/* Example of setiing STATE below with a SYNTHETIC EVENT */}
                    <button onClick={ this.birthday }>Birthday Button for {firstName} {lastName}</button>
                </div>;
    }
}
    
export default PersonCard;