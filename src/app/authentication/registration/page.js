"use client";

import { React, useState, useActionState } from "react";
import registerAction from "@/actions/registerAction";

export default function Page() {
    const [state, action] = useActionState(registerAction, null);
    const [form_data, setFormData] = useState({
        username: '',
        password: ''
    });

    return (
        <>
            <main style={{ padding: '50px' }}>
                <h1>Registration </h1>
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

                <p aria-live="polite">{state}</p>
                <br />
                
                <button type="submit">Register</button>
                </form>
        
            </main>
        </>
    )
}