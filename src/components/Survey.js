import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function Survey() {
  const [postSuccess, setPostSuccess] = useState(false);

  function handleSubmit() {
    const data = {
      id: document.getElementById("idsid").value,
      name: document.getElementById("idsname").value,
      status: document.getElementsByName("status")[0].value,
      sleeppatterns: document.getElementById("idscompany").value,
      anxiety: document.getElementById("idscomp").value,
      depression: document.getElementById("idscompa").value,
      comments: document.getElementById("idsctc").value
    };

    axios.post('http://localhost:8080/entry', data)
      .then((response) => {
        console.log(response.data);
        setPostSuccess(true);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        setPostSuccess(false);
      });
  }


  return (
    <>SURVEY FORM <br/>
    <div className='survey-content'>
      
    <center>
        <table>
      Student ID:<input type="text" name="id" id="idsid" /><br />
      Student NAME:<input type="text" name="name" id="idsname" /><br />
      Mental Health Status:

      <Select
        id="idstatus"
        label="Status"
        name="status"
        defaultValue="select"
        className="select"
        
        
      >
        <MenuItem value="Fine">Fine - Happy</MenuItem>
        <MenuItem value="In Confusion">Not so Fine - in confusion</MenuItem>
        <MenuItem value="Sad">Sad - Not Happy</MenuItem>
      </Select><br />
      Sleep Patterns:<input type="text" name="sleeppatterns" id="idscompany" /><br />
      Anxiety and Panic Symptoms:<input type="text" name="anxiety" id="idscomp" /><br />
      Depression and Mood Disorders:<input type="text" name="depression" id="idscompa" /><br />
      Additional Comments:<input type="text" name="comments" id="idsctc" /><br />
            <button onClick={handleSubmit}>    POST IT</button>
                {postSuccess && <p>Data posted successfully!</p>}
      </table>
      </center>
      </div>
    </>

  );
}
