
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import axios from 'axios';

// export default function BasicAlerts() {
//   return (
//     <Stack sx={{ width: '30%' }} spacing={2} >
//       <Alert severity="error">This is an error alert — check it out!</Alert>
//       <Alert severity="warning">This is a warning alert — check it out!</Alert>
//       <Alert severity="info">This is an info alert — check it out!</Alert>
//       <Alert severity="success">This is a success alert — check it out!</Alert>
//     </Stack>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";


export default function Home () {
  const location = useLocation();
  const [data, setData] : any = useState([]);
  const [text,setText] =useState("hi")
  let username = location.state.username;

  console.log('username', username)
  useEffect(() => {
    axios.get(`http://localhost:4000/auth/home/${username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response:any) => {
        setData(response.data)
      })
  }, []);

  return (
 <div>{!data ? "hi" : data.username}</div>
  );
}

