import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUser=()=>{
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [phoneNo,setPhoneNo]=useState("")
    let [place,setPlace]=useState("")
    let [password,setPassword]=useState("")
    let id=useParams()
    console.log(id.id)
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:4000/edit/${id.id}`)
        .then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setPhoneNo(res.data.phoneNo)
            setPlace(res.data.place)
            setPassword(res.data.password)
        })
        .catch(()=>{console.log("failed")})
    },[id.id])
    let submitData=()=>{
        let payload={
            name:name,
            email:email,
            phoneNo:phoneNo,
            place:place,
            password:password
        }
        axios.put(`http://localhost:4000/edit/${id.id}`,payload)
        .then(()=>{console.log("data updated")
            navigate("/users")
        })
        .catch(()=>{console.log("data did not updated")})
    }    
    return(
        <div style={{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>EDIT FORM</h1>
            <table style={{width:"25%",height:"50%",border:"2px solid black",boxShadow:"0 0 10px black"}}>
                <tr>
                    <td>Name</td>
                    <td>: <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Phone No</td>
                    <td>: <input type="text" placeholder="phone no" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Place</td>
                    <td>: <input type="text" placeholder="place" value={place} onChange={(e)=>{setPlace(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>: <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={submitData}>Update</button></td>
                </tr>
            </table>
        </div>
    )
}
export default EditUser