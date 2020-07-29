import React, { Component } from 'react';
import axios from 'axios';
import { URL_SUBS } from './paths';

export default class Subscriptions extends Component {
    state = {
        email: '', 
        error: false,
        success: false,
        alreadyIn: false
    }

    onChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    saveSubscription = (email) => {
        axios.get(`${URL_SUBS}?email=${email}`)
        .then(response => {
            if(!response.data.length) {
                //post user
                axios(URL_SUBS, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({email})
                }).then(res => {
                    this.setState({
                        success: true,
                        email: ''
                    })
                    this.clearMessages();
                })

            } else {
                //already registered
                this.setState({
                    alreadyIn: true
                })
                this.clearMessages();
            }
        })
    }

    clearMessages = () => {
        setTimeout(()=> {
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })
        }, 2000)
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)) {
            this.saveSubscription(email);
        } else {
            this.setState({error: true});
            this.clearMessages();
        }
    }
    render() {
        const state = this.state;
        return (
            <div className='subcribe_panel'>
                <h3> Subscibe to use</h3>
                <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <input 
                            type='text'
                            value= {state.email}
                            placeholder='your_email@email.com'  
                            onChange = {this.onChangeHandler} 
                        />
                        <div className={state.error ? 'error show': 'error'}>Check your email</div>
                        <div className={state.success ? 'success show': 'success'}>Thank you</div>
                        <div className={state.alreadyIn ? 'success show': 'success'}>You are already registered</div>
                    </form>
                </div>
                <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
            </div>
        )
    }
}
