'use client';

import {FormEvent, useState} from "react";
import {axiosInstance} from "@/services/api";
import axios from "axios";

type FormData = {
    email: string;
    password: string;
}



const LoginFormElement = () => {
    const [formData, setFormData] = useState<FormData>({email: '', password: ''});

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await axios.post(
            'http://127.0.0.1:8000/api/v1/auth/token',
            {
                username: formData.email,
                password: formData.password
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true
            }
        );

        console.log(res.data);

    }
    return (
        <form className='fc-sy-6' onSubmit={handleSubmit}>
            <div className='fc-sy-4'>
                <label>Email</label>
                <input
                    type='text'
                    className='input'
                    name='email'
                    placeholder='example@auth.com'
                    onChange={handleChange}
                />
            </div>
            <div className='fc-sy-4'>
                <label>Password</label>
                <input
                    type='password'
                    className='input'
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='btn bg-primary'>Login</button>
        </form>
    );
}

export default LoginFormElement;
