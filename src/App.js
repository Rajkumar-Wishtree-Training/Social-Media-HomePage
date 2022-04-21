import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={4} justifyContent='space-between'>
      <Sidebar />
      <Feed />
      <RightBar />
     
      </Stack>
    </Box>
  );
}

export default App;
