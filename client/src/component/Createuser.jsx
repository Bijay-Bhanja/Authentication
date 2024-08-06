import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Createuser=()=>{
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [phoneNo,setPhoneNo]=useState("")
    let [place,setPlace]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    let submitData=()=>{
        let payload={
            name:name,
            email:email,
            phoneNo:phoneNo,
            place:place,
            password:password
        }
        console.log(payload)

        axios.post("http://localhost:4000/submit",payload)
        .then((res)=>{alert(res.data.message)
            navigate("/login")
        })
        .catch(()=>{console.log("data not send")})
        
    }

    return(
        <div style={{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>REGISTERATION FORM</h1>
            <table style={{width:"25%",height:"50%",border:"2px solid black",boxShadow:"0 0 10px black"}}>
                <tr>
                    <td>Name</td>
                    <td>: <input type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Phone No</td>
                    <td>: <input type="text" placeholder="phone no" onChange={(e)=>{setPhoneNo(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Place</td>
                    <td>: <input type="text" placeholder="place" onChange={(e)=>{setPlace(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>: <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan={2}>Already register please <Link to="/login">Login</Link></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={submitData}>Submit</button></td>
                </tr>
            </table>
        </div>
    )
}
export default Createuser