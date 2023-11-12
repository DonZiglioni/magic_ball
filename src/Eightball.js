import clouds from './assets/magic-balls/smokeBall.mp4';
import videoBG from './assets/magic-balls/magicball.mov';
import Answers from './Answers';
import React, { useState } from 'react';
import '../src/Eightball.css';

const Eightball = () => {
    const [fortune, setFortune] = useState("Ask a question, and click the magic ball");
    const [textFade, setTextfade] = useState("eightball-game");
    const [color, setColor] = useState("");
    const [cloudFade, setCloudFade] = useState("clouds")

    const tellFortune = (arr) => {
        let rand = Math.floor(Math.random() * arr.length);

        setTextfade('eightball-game-out');
        setCloudFade('clouds-in');

        setTimeout(() => {
            setFortune(arr[rand].msg);
            setColor(arr[rand].color);
            setTextfade('eightball-game');
            setCloudFade('clouds');
        }, 2100);
    }

    return (
        <div className='eightball-main'>
            <video className='videoBG' src={videoBG} autoPlay loop muted></video>
            <div className='outterCircle' onClick={() => tellFortune(Answers)}>
                <div className='innerCircle' style={{ backgroundColor: color }}>
                    <div className={textFade}>
                        <p>{fortune}</p>
                        <video className={cloudFade} src={clouds} preload autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Eightball;