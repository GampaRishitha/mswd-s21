import axios from "axios";
import {useState} from "react";


export default function Placement(){
   const [result, setResult]=useState(null)
  
 if(result==null){
   axios.get('http://localhost:8080/displaystudent').then((response)=>{
    console.log(response.data);
    setResult(response.data);
   })
   return(
    <div>
        The placement data is not there
    </div>
   );
}
else {
    return(
        <div>
                 The placement data is given below<br/><br/>
                 <center>
            <table border="1">
               
                 <tr>
                    <th>StudeNt ID</th>
                    <th>Student Name</th>
                    <th>Placement Status</th>
                    <th>cgpa</th>
                    <th>Attendence</th>
                 </tr>
            {result.map((user)=>{
                return(
                            <tr>
                              <td>{user.sid}</td> 
                              <td>{user.sname}</td> 
                              <td>{user.pstatus}</td>
                              <td>{user.scompany}</td> 
                              <td>{user.sctc}</td>
                            </tr>
                        

                    
                );
            })}
            </table>
            </center>
        </div>
    );
}
}