import React from "react";
import businessIcon from '../assets/signup/business.svg';
import developerIcon from '../assets/signup/developer.svg';
import personalIcon from '../assets/signup/personal.svg';

export const accountTypes = [
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