export default function Validation(values){
    const errors ={}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@],{2,6}$/;
    const passwordPatten = /^(?=.*\d)(=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        errors.email = "Email is required!";

    } else if(!emailPattern.test(values.email)) {
        errors.email = "Email is not correct!";
    }

    if(values.password === ""){
        errors.password = "Password is required!";

    } else if(!passwordPatten.test(values.password)){
        errors.password = "Password is not correct!"
    }

    return errors;
} 