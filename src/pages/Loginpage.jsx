import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'

const Loginpage = ({setIsAuth}) => {
    // butona tıklanınca çalışır
    const handleClick = () => {
        signInWithPopup(auth, provider)
        .then((data) => {
        // state'i güncelle
            setIsAuth(data.user.refreshToken); 

        // local storage'ı da güncelle
        localStorage.setItem("token", data.user.refreshToken);
    })
        .catch((err) => console.log(err))
    };
  return (
    <div className='container'>
        <div className='login'>
            <h1>CHAT ODASI</h1>
            <p> Devam Etmek İçin Giriş Yapın!</p>
            <button onClick={handleClick}>
                <img src="logoo.png" alt="google" /> Google ile Giriş Yap</button>
        </div>
    </div>
  )
}

export default Loginpage;
 