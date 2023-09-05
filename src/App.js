import { Avatar, Button } from "@mui/material";

function App(props) {
 return (
    <>
    <h1>Home</h1>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Avatar alt="Iara Lanza" src="/static/images/avatar/1.jpg" />
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  
    </>
  );
}

export default App;