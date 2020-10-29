import React from 'react';
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'

class ContactPage extends React.Component {
    state = {
        value: "",
        isEmpty: false,
    }

    handleChange = (e) => {
        if(e.target.value.lenght > 0) {
        this.setState({
            value: e.target.value,
            isEmpty: false,
        })}else{
            this.setState({
            value: e.target.value,
            isEmpty: true,
        })}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
            isEmpty: false,
        })
    }


    render(){
        return ( 
            <div className="contact">
                <form>
                    <h3>Napisz do nas!</h3>
                    <textarea placeholder="Wpisz wiadomość..." value={this.state.value} onChange={this.handleChange}></textarea>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
                <Prompt 
                    when={this.state.isEmpty}
                    message="Masz niewypełniony formularz. Czy napewno chcesz opuscić tę stronę"               
                />
            </div>
        );
    }
}
 
export default ContactPage;