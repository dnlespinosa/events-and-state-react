import Rwact from 'react';

const Clicker = () => {
    // reference to event function
    const fireLasers = (e) => {
        const data = {name:'Willy', age: 78}
        console.log(e)
        console.log('THE LAZERS HAVE BEEN FIRED')
    }

    return (
        <>
            <button onMouseOver={fireLasers}>Click Me!</button>
            <textarea onScroll={fireLasers} rows='2'>
                wiodjhwqidjqiodjwiqodjqiwodioqwjdwioq
                wiodjhwqidjqiodjwiqodjqiwodioqwjdwioq
                wiodjhwqidjqiodjwiqodjqiwodioqwjdwioq
                wiodjhwqidjqiodjwiqodjqiwodioqwjdwioq
            </textarea>
        </>
    )
}

export default Clicker;
