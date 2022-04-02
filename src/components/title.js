import logo from '../images/smartphone.png';

function Title () {

    return (
        <div className="title">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Le portail des sages</h1>
        </div>
    );
};

export default Title;