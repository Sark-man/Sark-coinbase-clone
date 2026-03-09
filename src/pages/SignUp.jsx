import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coinbaseBlack from '../assets/coinbase-black.png';
import personalIcon from '../assets/signup/personal.svg';
import businessIcon from '../assets/signup/business.svg';
import developerIcon from '../assets/signup/developer.svg';
import { FaCheck } from 'react-icons/fa6';


const Signup = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedType, setSelectedType] = useState('personal');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s splash screen
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
                <img src={coinbaseBlack} alt="Coinbase" className="h-16 animate-pulse" />
            </div>
        );
    }


    const accountTypes = [
        {
            id: 'personal',
            title: 'Personal Account',
            desc: 'Trade crypto as an individual.',
            icon: personalIcon,
        },
        {
            id: 'business',
            title: 'Business Account',
            desc: 'Manage portfolios, accept payments, and more.',
            icon: businessIcon,
        },
        {
            id: 'developer',
            title: 'Developer Account',
            desc: 'Build onchain with developer tools.',
            icon: developerIcon,
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative overflow-y-auto">
            {/* Top Branding - Fixed to Top Left Corner */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <Link to="/">
                    <img src={coinbaseBlack} alt="Coinbase" className="h-5 md:h-6" />
                </Link>
            </div>

            {/* Main Content - Narrow and shifted down */}
            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center pt-24 md:pt-32">
                <h1 className="text-2xl md:text-3xl font-extrabold text-left w-full mb-8 tracking-tight leading-tight">
                    What kind of account are you creating?
                </h1>

                <div className="flex flex-col gap-3 w-full pb-12">
                    {accountTypes.map((type) => (
                        <div
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`relative cursor-pointer group rounded-[12px] p-4 transition-all duration-300 border-2 w-full flex items-center gap-4 ${selectedType === type.id
                                    ? 'bg-[#121212] border-[#0052ff]'
                                    : 'bg-black border-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <img
                                    src={type.icon}
                                    alt={type.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex flex-col flex-grow text-left">
                                <h3 className="text-base font-bold mb-0.5">{type.title}</h3>
                                <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                    {type.desc}
                                </p>
                            </div>

                            {selectedType === type.id && (
                                <div className="w-5 h-5 bg-[#0052ff] rounded-full flex items-center justify-center shrink-0">
                                    <FaCheck className="text-white text-[9px]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Signup;
