import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "../assets/office.jpg";



const Pannellum360 = ({ imageUrl, roomName }) => (
    <div>
        {/* <h1>{roomName}</h1> */}
        <h2 style={{ alignSelf: 'center' }}>Room Name</h2>
        <div style={{ alignSelf: 'center' }}>
            <Pannellum
                width="100%"
                height="500px"
                image={myImage}
                // image={imageUrl} -- API
                pitch={10}
                yaw={90}
                hfov={110}
                autoLoad
                compass={true}
                onError={() => window.alert('An error with image')}
                onLoad={() => {
                    console.log("panorama loaded");
                }}
            />
        </div>
    </div>
);



export default Pannellum360;

