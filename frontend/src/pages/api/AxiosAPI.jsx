import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const url= "http://localhost:8080/"
//  export const url= "http://192.168.1.246:8080/"
const AxiosAPI= axios.create({
    baseURL:url
})
export default AxiosAPI;

export const signUp=async(data)=>{
    
try {
    const res= await AxiosAPI.post(`${url}/user/register`, data);
    console.log("signup success:" , res);
    toast.success(res?.data?.msg)

    return res;
    
} catch (error) {
    console.log("signup error:", error);
}
}