import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios'
export default function Entry (){
    function handleSubmit(){
        console.log({
            sid:document.getElementById("idsid").value,
            sname: document.getElementById("idsname").value,
            pstatus: document.getElementsByName("status")[0].value,
            scompany: document.getElementById("idscompany").value,
            sctc:document.getElementById("idsctc").value

        })
        axios.post('http://localhost:8080/entryinfo',{
            sid:document.getElementById("idsid").value,
            sname: document.getElementById("idsname").value,
            pstatus: document.getElementsByName("status")[0].value,
            scompany: document.getElementById("idscompany").value,
            sctc:document.getElementById("idsctc").value

        }).then((response)=>{
            console.log(response.data);
        })
    }
    function handleUpdate(){
        axios.put('http://localhost:8080/entryinfo',{
            sid:document.getElementById("idsid").value,
            sname: document.getElementById("idsname").value,
            pstatus: document.getElementsByName("status")[0].value,
            scompany: document.getElementById("idscompany").value,
            sctc:document.getElementById("idsctc").value

        }).then((response)=>{
            console.log(response.data);
        })
    }
return(
    <div className='survey-content'>
      
    <center>
     <table>
            Student ID:<input type="text" name="sid" id="idsid" /><br/><br/>
            Student NAME:<input type="text" name="sname" id="idsname" /><br/><br/>
            Placement Status:
            <Select
                    id="idstatus"
                    label="Status"
                    name="status"
                    defaultValue="select"
                    >
                    <MenuItem value="select">Select placement status</MenuItem>
                    <MenuItem value="placed">placed</MenuItem>
                    <MenuItem value="Not Placed">Not Placed</MenuItem>
                    </Select><br/><br/>
                    Current cgpa:<input type="text" name="scompany" id="idscompany" /><br/><br/>
                    Attendence :<input type="text" name="sctc" id="idsctc" /><br/><br/>
                    <button onClick={handleSubmit}>Save Button</button>
                    <button onClick={handleUpdate}>Update Button</button>
                
    </table>
    </center></div>
      

    )
}