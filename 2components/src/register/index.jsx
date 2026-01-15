import { useState } from "react";
import CommonForm from "../components/common-form";
import { registerFormElements } from "../config";


const initialFormData = {
    name:'',
    email: '',
    password: ''
}


function RegisterComponent(){

      const [registerFormData, setRegisterFormData] = useState(initialFormData)

      function onHandleSubmit(event){
        event.preventDefault();
        console.log(registerFormData, " : registerFormData");

        setRegisterFormData(initialFormData)
        
      }

    return(
        <div>
            <h1>Register page/component</h1>
            <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText={'Register'}
             onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
}

export default RegisterComponent;