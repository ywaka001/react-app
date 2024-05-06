import React, { useCallback, useState, useEffect } from 'react';
import {SignInButton, TextInput} from '../components/UIkit';
import { useContext } from 'react';
import { AdminFlgContext } from '../components/providers/AdminFlgProvider';
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    const { isAdmin, setIsAdmin }  = useContext(AdminFlgContext);

    const navigate = useNavigate()

    const [loginId, setLoginId] = useState(""),
          [password, setPassword] = useState("");

    const inputId = useCallback((event) =>{
        setLoginId(event.target.value);
        alert("値が変更されました:${event.target.value}");
    },[setLoginId])
     
    const inputPassword = useCallback((event) =>{
        setPassword(event.target.value)
    },[setPassword])    

    const screenChange= useCallback(()=>{
        setIsAdmin(!isAdmin);
    })

    useEffect(()=>{
        if(isAdmin){
            navigate('/regiser');
        }
    },[isAdmin])

    return(
            <div className="c-section-container">
                <h2 className="u-text__headline u-text-center">ログイン</h2>
                <div className="module-spacer--medium" />
 
                <TextInput 
                    fullWidth={true} label={"ID"} multiline={false} required={true}
                    rows={1} value={loginId} type={"text"} onChange={inputId}
                />
                <TextInput 
                    fullWidth={true} label={"パスワード"} multiline={false} required={true}
                    rows={1} value={password} type={"password"} onChange={inputPassword}
                /> 

                <div className="module-spacer--medium" />
                <div className="center">
                    <SignInButton
                        label={"Sign In"}
                        onClick={() => screenChange()}
                    />
                    <div className="module-spacer--medium" />
                    {/* <button onClick={screenChange()}>登録画面へ</button> */}
                </div>

            </div>
    )

}

export default SignIn;