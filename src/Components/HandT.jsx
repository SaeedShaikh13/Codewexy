import React, { useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import styles from "../Styles/Global.module.css";


const options = [
    { value: 'H', label: 'Head' },
    { value: 'T', label: 'Tail' }
];

const HandT = () => {
    const dispatchValue = useDispatch();

    const SelectValue = useSelector((state)=>state.Reducer.Info);
    
    
    const [selectedOption, setSelectedOption] = useState();

    const handelClick =()=>{
        dispatchValue({type:"ADD_VALUE", data:selectedOption})
    };

    
    

    return (
        <div className={styles.Body}>
            <div>
            <Select
            placeholder="Select value"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}

        
            />
            <br />
            <button onClick={handelClick}>Submit</button>
           
            { 
            SelectValue.map((item)=>{  
                          
                return (
                    <div>
                        <Row>
                            <Col style={{display:"flex"}}>{item.value}</Col>
                            <Col style={{display:"flex"}}>{item.value}</Col>

                        </Row>
                    </div>
                )
            })
            }
             </div>
        </div>
    );
};

export default HandT;