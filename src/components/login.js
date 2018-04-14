import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { LoginUser } from '../actions/index';

class LogIn extends Component {

    componentDidMount() {
        document.documentElement.style.setProperty("--bg-img", `url('../src/img/fb2f655ee3f15405c5e5bee7c6aa9995.gif')`);
        document.documentElement.style.setProperty("--screen-color", `none')`);
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={ className }>
                <label>{field.label}</label>
                <input 
                    className="form-control login-form" 
                    type="text" { ...field.input } />
                <div className="text-help">
                    {touched ? error : ''}                    
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.history.push('/home');
        this.props.LoginUser(values);
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div>
                <h3 className="app-title">Elevator</h3>            
                <form className="login-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="name" 
                        label="Your Name"
                        className="login-field"
                        component={this.renderField}
                    />
                    <Field
                        name="profession"
                        label="Your Profession"
                        className="login-field"                        
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Let's Go</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter your name';
    }

    if (values.name && values.name.length > 20) {
        errors.name = 'Less than 20 characters, please';
    }

    if (!values.profession) {
        errors.profession = 'Please enter your job';
    }

    if (values.profession && values.profession.length > 20) {
        errors.profession = 'Less than 20 characters, please';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, {LoginUser})(LogIn)
)