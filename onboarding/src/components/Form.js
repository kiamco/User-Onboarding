import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik'

const CreateForm = (props) => {
    return (
        <div className='form-container'>
            <Formik>
                <Form>
                    <Field 
                        component='input' 
                        type='text' 
                        name='name' 
                        placeholder='Name'/>
                    <Field 
                        component='input' 
                        type='text' 
                        name='email' 
                        placeholder='Email'/>
                    <Field
                        component='input'
                        type='password'
                        name='password'
                        placeholder='Password'/>
                    <div className='checkbox'>
                        <Field type='checkbox' name='Terms' placeholder='Name' checked={false}/>
                    </div>
                    <button>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateForm;