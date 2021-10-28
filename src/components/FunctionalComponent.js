import React, {useState} from 'react';
import styles from './Prop.module.css';

// declared name of arrow function taking in props
const FunctionalComponent = props => {
    const [age, setAge] = useState(props.age);

    const birthday = () => {
        setAge(age+1);
    }

    return(
        <div>
{/* Here we declare the variables in props at the same time we are placing them in the HTML */}
            <h1 className={styles.btn}>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ birthday }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default FunctionalComponent;