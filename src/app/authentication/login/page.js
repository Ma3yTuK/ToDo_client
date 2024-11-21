"use client";

import { React, useState, useActionState } from "react";
import loginAction from "@/actions/loginAction";
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams();
    const [state, action] = useActionState(loginAction, null);
    const [form_data, setFormData] = useState({
        username: '',
        password: ''
    });

    return (
        <>
            <main style={{ padding: '50px' }}>
                <h1>Login </h1>
                <br />
        
                <form action={action}>
                <input
                    value={form_data.username}
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setFormData({...form_data, username: e.target.value})}
                />
                <br />
                <br />
        
                <input
                    value={form_data.password}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setFormData({...form_data, password: e.target.value})}
                />
                <br />
                <br />

                <input
                    type="hidden"
                    name="from_url"
                    value={searchParams.get('from') || '/'}
                />

                <p aria-live="polite">{state}</p>
                <br />
                
                <button type="submit">Login</button>
                </form>
        
            </main>
        </>
    )
}