import logo from '../logo.svg';

function About(props) {
    return (
        <div>
           <img src={logo} className="App-logo" alt="logo" />
           <p> About </p>
           <p> Esta es mi primer app en React </p>
           <p> Es para practicar ... </p>
           <p> Practicando conocemos algo mejor </p>
        </div>
        )
}


export default About;