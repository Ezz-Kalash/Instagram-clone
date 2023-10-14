import './App.css';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Progress from './pages/Progress';
import Exeplore from './pages/Exeplore';
import Profile from './pages/Profile';
import Messeges from './pages/messeges';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from "./pages/Register"
import LoginPage from './pages/Login';
import Protected from './component/Routs/ProtectedHome';

  function App() {
    const theme = createTheme({
      palette: {
        primary: {
          main: '#FFFFFF',
        },
        secondary: {
          main: '#0000FF',
        },
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter className="App">
        <div className="App">
        
          <Routes>
            <Route path="/home" element={<Protected><Home/></Protected>} />
            <Route path="/prof" element={<Protected><Profile /></Protected>} />
            <Route path="/prog" element={<Protected><Progress /></Protected>} />
            <Route path="/exp" element={<Protected><Exeplore /></Protected>} />
            <Route path="/messeges" element={<Protected><Messeges /></Protected>} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LoginPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )}
export default App;