import axios from "axios";
import {useState} from "react";


export default function Placement(){
   const [result, setResult]=useState(null)
  
 if(result==null){
   axios.get('http://localhost:8080/display').then((response)=>{
    console.log(response.data);
    setResult(response.data);
   })
   return(
    <div>
        The survey data is not there
    </div>
   );
}
else {
    return(
        <div>
                 The survey data is given below<br/><br/>
                 <center>
            <table border="1">
                 <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Mental Health Status</th>
                    <th>Sleep patterns</th>
                    <th>Anxiety</th>
                    <th>Depression</th>
                    <th>Additional Comments</th>
                 </tr>
            {result.map((user)=>{
                return(
                            <tr>
                              <td>{user.id}</td> 
                              <td>{user.name}</td> 
                              <td>{user.status}</td>
                              <td>{user.sleeppatterns}</td> 
                              <td>{user.anxiety}</td>
                              <td>{user.depression}</td>
                              <td>{user.comments}</td>
                            </tr>
                        

                    
                );
            })}
            </table>
            </center>
        </div>
    );
}
}