import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import NaveBar from './components/NavBar/NaveBar';
import PostDetails from './components/PostDetails/postDetails';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <NaveBar />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/posts" element={ <Home /> } />
                    <Route path="/posts/serach" element={ <Home /> } />
                    <Route path="/posts/:id" element={ <PostDetails /> } />
                    <Route path="/auth" element={ (!user ? <Auth /> : <Navigate replace to="/" />) } />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
