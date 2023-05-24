import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -65, max: 65 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Cover;
