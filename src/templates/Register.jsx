import React, {useCallback,useState} from "react";
import { PrimaryButton, GreyButton, TextInput, SelectBox } from "../components/UIkit";
import { useContext } from "react";

const Register = () => {
    alert("register");
    const [userId, setUserId] = useState(""),
          [userName, setUserName] = useState("");

    const inputUserId = useCallback((event) =>{
        setUserId(event.target.value);
        alert("値が変更されました:" + event.target.value);
    },[setUserId])
     
    const inputUserName= useCallback((event) =>{
        setUserName(event.target.value)
    },[setUserName])  


    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">登録画面</h2>
            <div className="module-spacer--medium" />

            <TextInput 
                    fullWidth={true} label={"ユーザーID"} multiline={false} required={true}
                    rows={1} value={userId} type={"text"} onChange={inputUserId} disabled={false}
            />
            <div className="module-spacer--medium" />
            <TextInput 
                    fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                    rows={1} value={userName} type={"text"} onChange={inputUserName} disabled={false}
            />
               
        </div>
    )
}

export default Register