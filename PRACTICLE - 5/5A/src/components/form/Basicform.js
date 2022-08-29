import React, { useState } from 'react';
import '../../App.css';

const Basicform = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const [allEntry, setAllEntry]=useState([]);

  const submitForm=(e) => {
    e.preventDefault();

    const newEntry={ email:email, password:password };

    setAllEntry([... allEntry, newEntry]);
    console.log(allEntry);
  }

  return (
    <>
        <form action='' onSubmit={submitForm} className='login'>
            <div>
                <label htmlFor='email'>Email </label>
                <input type='text' name='email' id='email' autoComplete='off' value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor='password'>Password </label>
                <input type='password' name='password' id='password' autoComplete='off' value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 />
            </div>
            <br />
            <button type='submit'>Login</button>
        </form>
        <div>
            {
                allEntry.map((curele) => {
                    return(
                        <div>
                            <h3>Email - {curele.email}</h3>
                            <h3>Password - {curele.password}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Basicform