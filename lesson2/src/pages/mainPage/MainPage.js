import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import Modal from '../../components/modal/Modal';



const MainPage = () => {
    // let show = false
    // console.log(show, 'start');
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow');
    const handleShow = () => {
        // show = true
        // console.log(show, ' end');
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}>
                    {/*<input type="text"*/}
                    {/*onChange={(event=> setInputValue(event.target.value))}*/}
                    {/*/>*/}
                </Modal>
            }

            <Buttons/>
            <button onClick={handleShow}>Открыть</button>
            {/*<Header navBar={navBar}/>*/}
            {/*<User name={'Bakyt'} age={18}/>*/}
            {/*<User name={'Kuban'} age={30}/>*/}
            {/*<User name={'Ermek'} age={10}/>*/}
            {/*<Input/>*/}
            {/*<Example>*/}
            {/*    <p style={{color: 'red', fontSize: '20px'}} >User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
        </>
    );
};

export default MainPage;