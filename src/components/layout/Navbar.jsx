import React, { useState, useEffect, useRef } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import InstImage from '../../assets/InstImage.png';
import individualImg from '../../assets/individual.png';
import businessImg from '../../assets/business.png';
import developersImg from '../../assets/developers.jpg';
import companyImg from '../../assets/company.png';
import { FaBars, FaXmark, FaChevronRight } from 'react-icons/fa6';
import {
    IoCartOutline,
    IoGridOutline,
    IoShieldCheckmarkOutline,
    IoPersonOutline,
    IoBarChartOutline,
    IoStatsChartOutline,
    IoBusinessOutline,
    IoCardOutline,
    IoWalletOutline,
    IoBookOutline,
    IoListOutline,
    IoSettingsOutline,
    IoShieldOutline,
    IoLayersOutline,
    IoCubeOutline,
    IoSwapHorizontalOutline,
    IoFlashOutline,
    IoTrendingUpOutline,
    IoWaterOutline,
    IoInformationCircleOutline,
    IoBriefcaseOutline,
    IoPeopleOutline,
    IoHelpCircleOutline,
    IoNewspaperOutline,
    IoGlobeOutline
} from 'react-icons/io5';


const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isIndividualsOpen, setIsIndividualsOpen] = useState(false);
    const [isMenuPinned, setIsMenuPinned] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);
    const [isBusinessPinned, setIsBusinessPinned] = useState(false);
    const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);
    const [isInstitutionsPinned, setIsInstitutionsPinned] = useState(false);
    const [isDevelopersOpen, setIsDevelopersOpen] = useState(false);
    const [isDevelopersPinned, setIsDevelopersPinned] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isCompanyPinned, setIsCompanyPinned] = useState(false);
    const individualsRef = useRef(null);
    const businessRef = useRef(null);
    const institutionsRef = useRef(null);
    const developersRef = useRef(null);
    const companyRef = useRef(null);
    const languageRef = useRef(null);

    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [languageSearch, setLanguageSearch] = useState('');
    const [selectedLang, setSelectedLang] = useState('en-global');

    const languages = [
        { id: 'en-global', name: 'English', region: 'Global' },
        { id: 'en-us', name: 'English', region: 'United States' },
        { id: 'es-es', name: 'Español', region: 'España' },
        { id: 'es-mx', name: 'Español', region: 'México' },
        { id: 'de-de', name: 'Deutsch', region: 'Deutschland' },
        { id: 'fr-fr', name: 'Français', region: 'France' },
        { id: 'it-it', name: 'Italiano', region: 'Italia' },
        { id: 'pt-br', name: 'Português', region: 'Brasil' },
        { id: 'ja-jp', name: '日本語', region: '日本' },
        { id: 'ko-kr', name: '한국어', region: '대한민국' },
        { id: 'zh-cn', name: '简体中文', region: '中国' },
    ];

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
        lang.region.toLowerCase().includes(languageSearch.toLowerCase())
    );

    // Categories data for the mega-menu
    const categories = [
        {
            items: [
                { title: 'Buy and sell', desc: 'Buy, sell, and use crypto', icon: <IoCartOutline className="text-xl" /> },
                { title: 'Base App', desc: 'Post, earn, trade, and chat, all in one place', icon: <IoGridOutline className="text-xl" /> },
                { title: 'Coinbase One', desc: 'Get zero trading fees and more', icon: <IoShieldCheckmarkOutline className="text-xl" /> },
                { title: 'Private Client', desc: 'For clients, family offices, UHNWIs', icon: <IoPersonOutline className="text-xl" /> },
                { title: 'Onchain', desc: 'Dive into the world of onchain apps', icon: <IoGlobeOutline className="text-xl" /> },
                { title: 'Learn', desc: 'Crypto tips and guides', icon: <IoBookOutline className="text-xl" /> },
            ]
        },
        {
            items: [
                { title: 'Advanced', desc: 'Professional-grade trading tools', icon: <IoBarChartOutline className="text-xl" /> },
                { title: 'Earn', desc: 'Stake your crypto and earn rewards', icon: <IoStatsChartOutline className="text-xl" /> },
                { title: 'Coinbase Wealth', desc: 'Institutional-grade services for UHNW', icon: <IoBusinessOutline className="text-xl" /> },
                { title: 'Credit Card', desc: 'Earn up to 4% bitcoin back', icon: <IoCardOutline className="text-xl" /> },
                { title: 'Debit Card', desc: 'Spend crypto, get crypto back', icon: <IoWalletOutline className="text-xl" /> },
            ]
        }
    ];

    // Categories data for Business mega-menu
    const businessCategories = [
        {
            items: [
                { title: 'Business', desc: 'Crypto trading and payments for startups and SMBs', icon: <IoBusinessOutline className="text-xl" /> },
                { title: 'Payments', desc: 'The stablecoin payments stack for commerce platforms', icon: <IoWalletOutline className="text-xl" /> },
                { title: 'Commerce', desc: 'Start accepting crypto payments', icon: <IoCartOutline className="text-xl" /> },
            ]
        },
        {
            items: [
                { title: 'Asset Listings', desc: 'List your asset on Coinbase', icon: <IoListOutline className="text-xl" /> },
                { title: 'Token Manager', desc: 'The platform for token distributions, vesting, and lockups', icon: <IoSettingsOutline className="text-xl" /> },
            ]
        }
    ];

    // Categories data for Institutions mega-menu
    const institutionCategories = [
        {
            title: 'Prime',
            items: [
                { title: 'Trading and Financing', desc: 'Professional prime brokerage services', icon: <IoBarChartOutline className="text-xl" /> },
                { title: 'Custody', desc: 'Securely store all your digital assets', icon: <IoShieldOutline className="text-xl" /> },
                { title: 'Staking', desc: 'Explore staking across our products', icon: <IoLayersOutline className="text-xl" /> },
                { title: 'Onchain Wallet', desc: 'Institutional-grade wallet to get onchain', icon: <IoWalletOutline className="text-xl" /> },
            ]
        },
        {
            title: 'Markets',
            items: [
                { title: 'Exchange', desc: 'Spot markets for high-frequency trading', icon: <IoFlashOutline className="text-xl" /> },
                { title: 'International Exchange', desc: 'Access perpetual futures markets', icon: <IoGlobeOutline className="text-xl" /> },
                { title: 'Derivatives Exchange', desc: 'Trade an accessible futures market', icon: <IoTrendingUpOutline className="text-xl" /> },
                { title: 'Verified Pools', desc: 'Transparent, verified liquidity pools', icon: <IoWaterOutline className="text-xl" /> },
            ]
        }
    ];

    // Categories data for Developers mega-menu
    const developerCategories = [
        {
            title: 'Coinbase Developer Platform',
            items: [
                { title: 'Payments', desc: 'Fast and global stablecoin payments with a single integration', icon: <IoWalletOutline className="text-xl" /> },
                { title: 'Trading', desc: 'Launch crypto trading and custody for your users', icon: <IoBarChartOutline className="text-xl" /> },
                { title: 'Wallets', desc: 'Deploy customizable and scalable wallets for your business', icon: <IoGridOutline className="text-xl" /> },
                { title: 'Stablecoins', desc: 'Access USDC and Coinbase Custom Stablecoins', icon: <IoCubeOutline className="text-xl" /> },
            ]
        },
        {
            title: 'Solutions for any company',
            items: [
                { title: 'Banks & Brokerages', desc: 'Secure, regulated offerings for retail, private banking, & institutional clients', icon: <IoBusinessOutline className="text-xl" /> },
                { title: 'Payment Firms', desc: 'Near-instant, low-cost, global payment rails for modern providers', icon: <IoCardOutline className="text-xl" /> },
                { title: 'Startups', desc: 'Launch your business with the world\'s leader in crypto', icon: <IoFlashOutline className="text-xl" /> },
            ]
        }
    ];

    // Categories data for Company mega-menu
    const companyCategories = [
        {
            items: [
                { title: 'About', desc: 'Powering the crypto economy', icon: <IoInformationCircleOutline className="text-xl" /> },
                { title: 'Careers', desc: 'Work with us', icon: <IoBriefcaseOutline className="text-xl" /> },
                { title: 'Affiliates', desc: 'Help introduce the world to crypto', icon: <IoPeopleOutline className="text-xl" /> },
            ]
        },
        {
            items: [
                { title: 'Support', desc: 'Find answers to your questions', icon: <IoHelpCircleOutline className="text-xl" /> },
                { title: 'Blog', desc: 'Read the latest from Coinbase', icon: <IoNewspaperOutline className="text-xl" /> },
                { title: 'Security', desc: 'The most trusted & secure', icon: <IoShieldCheckmarkOutline className="text-xl" /> },
            ]
        }
    ];


    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (individualsRef.current && !individualsRef.current.contains(event.target)) {
                setIsIndividualsOpen(false);
                setIsMenuPinned(false);
            }
            if (businessRef.current && !businessRef.current.contains(event.target)) {
                setIsBusinessOpen(false);
                setIsBusinessPinned(false);
            }
            if (institutionsRef.current && !institutionsRef.current.contains(event.target)) {
                setIsInstitutionsOpen(false);
                setIsInstitutionsPinned(false);
            }
            if (developersRef.current && !developersRef.current.contains(event.target)) {
                setIsDevelopersOpen(false);
                setIsDevelopersPinned(false);
            }
            if (companyRef.current && !companyRef.current.contains(event.target)) {
                setIsCompanyOpen(false);
                setIsCompanyPinned(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setIsLanguageModalOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = () => setIsIndividualsOpen(true);
    const handleMouseLeave = () => {
        if (!isMenuPinned) setIsIndividualsOpen(false);
    };
    const handleClick = () => {
        const newState = !isMenuPinned;
        setIsMenuPinned(newState);
        setIsIndividualsOpen(newState);
    };

    const handleBusinessMouseEnter = () => setIsBusinessOpen(true);
    const handleBusinessMouseLeave = () => {
        if (!isBusinessPinned) setIsBusinessOpen(false);
    };
    const handleBusinessClick = () => {
        const newState = !isBusinessPinned;
        setIsBusinessPinned(newState);
        setIsBusinessOpen(newState);
    };

    const handleInstitutionsMouseEnter = () => setIsInstitutionsOpen(true);
    const handleInstitutionsMouseLeave = () => {
        if (!isInstitutionsPinned) setIsInstitutionsOpen(false);
    };
    const handleInstitutionsClick = () => {
        const newState = !isInstitutionsPinned;
        setIsInstitutionsPinned(newState);
        setIsInstitutionsOpen(newState);
    };

    const handleDevelopersMouseEnter = () => setIsDevelopersOpen(true);
    const handleDevelopersMouseLeave = () => {
        if (!isDevelopersPinned) setIsDevelopersOpen(false);
    };
    const handleDevelopersClick = () => {
        const newState = !isDevelopersPinned;
        setIsDevelopersPinned(newState);
        setIsDevelopersOpen(newState);
    };

    const handleCompanyMouseEnter = () => setIsCompanyOpen(true);
    const handleCompanyMouseLeave = () => {
        if (!isCompanyPinned) setIsCompanyOpen(false);
    };
    const handleCompanyClick = () => {
        const newState = !isCompanyPinned;
        setIsCompanyPinned(newState);
        setIsCompanyOpen(newState);
    };
    return (
        <header className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-[5000]">
           <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">

                {/* 1. Logo and Nav */}
                <div className="flex items-center gap-8 h-full shrink-0">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Coinbase" className="h-6 md:h-8 w-auto shrink-0" />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-black h-full flex-nowrap">
                        <Link to="/explore" className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap">Cryptocurrencies</Link>

                        {/* Individuals Mega-Menu Trigger */}
                        <div
                            className="h-full flex items-center relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            ref={individualsRef}
                        >
                            <button
                                onClick={handleClick}
                                className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap"
                            >
                                Individuals
                            </button>

                            {/* The Mega Menu - Full Width restored */}
                            {isIndividualsOpen && (
                                <div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] py-12 px-8 flex justify-center z-[6000]">
                                    <div className="max-w-7xl w-full grid grid-cols-12 gap-10">

                                        {/* Left Side: 2 Columns of Links - Scrollable (Hidden Scrollbar) */}
                                        <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-6 max-h-[50vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            {categories.map((col, idx) => (
                                                <div key={idx} className="flex flex-col gap-4">
                                                    {col.items.map((item, i) => (
                                                        <a key={i} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                                                            <div className="mt-1 text-gray-400 group-hover:text-black transition-colors">
                                                                {item.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-[17px] text-black transition-colors">{item.title}</span>
                                                                <span className="text-[15px] text-gray-500 font-medium leading-[1.3]">{item.desc}</span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right Side: Featured Promo Area - Compact Side-by-Side */}
                                        <div className="col-span-4 border-l border-gray-100 pl-10 flex items-start">
                                            <a href="#" className="flex items-start gap-8 group cursor-pointer hover:bg-gray-50 p-5 rounded-[24px] transition-all duration-300 w-full">
                                                <div className="w-32 h-32 flex-shrink-0">
                                                    <img
                                                        src={individualImg}
                                                        alt="Featured"
                                                        className="w-full h-full object-cover rounded-[16px]"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1.5 pt-1 h-32 justify-between">
                                                    <div className="flex flex-col gap-1">
                                                        <h3 className="font-bold text-[20px] text-black transition-colors leading-tight">System Update</h3>
                                                        <p className="text-[15px] text-gray-500 font-medium leading-tight max-w-[200px]">
                                                            The next chapter of Coinbase. <br />Live on X 12/17.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#0052ff] font-bold text-[14px] mt-auto">
                                                        Learn more <FaChevronRight className="text-[11px]" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Businesses Mega-Menu Trigger */}
                        <div
                            className="h-full flex items-center relative"
                            onMouseEnter={handleBusinessMouseEnter}
                            onMouseLeave={handleBusinessMouseLeave}
                            ref={businessRef}
                        >
                            <button
                                onClick={handleBusinessClick}
                                className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap"
                            >
                                Businesses
                            </button>

                            {/* The Business Mega Menu - Full Width */}
                            {isBusinessOpen && (
                                <div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] py-12 px-8 flex justify-center z-[6000]">
                                    <div className="max-w-7xl w-full grid grid-cols-12 gap-10">

                                        {/* Left Side: 2 Columns of Links - Scrollable (Hidden Scrollbar) */}
                                        <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-6 max-h-[50vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            {businessCategories.map((col, idx) => (
                                                <div key={idx} className="flex flex-col gap-4">
                                                    {col.items.map((item, i) => (
                                                        <a key={i} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                                                            <div className="mt-1 text-gray-400 group-hover:text-black transition-colors">
                                                                {item.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-[17px] text-black transition-colors">{item.title}</span>
                                                                <span className="text-[15px] text-gray-500 font-medium leading-[1.3]">{item.desc}</span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right Side: Featured Promo Area - Compact Side-by-Side */}
                                        <div className="col-span-4 border-l border-gray-100 pl-10 flex items-start">
                                            <a href="#" className="flex items-start gap-8 group cursor-pointer hover:bg-gray-50 p-5 rounded-[24px] transition-all duration-300 w-full">
                                                <div className="w-32 h-32 flex-shrink-0">
                                                    <img
                                                        src={businessImg}
                                                        alt="Featured"
                                                        className="w-full h-full object-cover rounded-[16px]"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1.5 pt-1 h-32 justify-between">
                                                    <div className="flex flex-col gap-1">
                                                        <h3 className="font-bold text-[20px] text-black transition-colors leading-tight">Commerce Payments Protocol</h3>
                                                        <p className="text-[15px] text-gray-500 font-medium leading-tight max-w-[200px]">
                                                            A new standard for onchain payments.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#0052ff] font-bold text-[14px] mt-auto">
                                                        Go to Payments <FaChevronRight className="text-[11px]" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        
                        <div className="h-full flex items-center relative"
                            onMouseEnter={handleInstitutionsMouseEnter}
                            onMouseLeave={handleInstitutionsMouseLeave}
                            ref={institutionsRef}
                        >
                    <button
                        onClick={handleInstitutionsClick}
                        className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap"
                      >
  Institutions
</button>

                    {isInstitutionsOpen && (
                    <div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] py-12 px-8 flex justify-center z-[6000]">
      <div className="max-w-7xl w-full grid grid-cols-12 gap-10">

        {/* LEFT SIDE */}
        <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-8">

          {/* PRIME COLUMN */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-gray-400 uppercase">Prime</p>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoShieldCheckmarkOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Trading and Financing</h4>
                <p className="text-gray-500 text-sm">
                  Professional prime brokerage services
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoWalletOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Custody</h4>
                <p className="text-gray-500 text-sm">
                  Securely store all your digital assets
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoStatsChartOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Staking</h4>
                <p className="text-gray-500 text-sm">
                  Explore staking across our products
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoGridOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Onchain Wallet</h4>
                <p className="text-gray-500 text-sm">
                  Institutional-grade wallet to get onchain
                </p>
              </div>
            </div>
          </div>

          {/* MARKETS COLUMN */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-gray-400 uppercase">Markets</p>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoGridOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Exchange</h4>
                <p className="text-gray-500 text-sm">
                  Spot markets for high-frequency trading
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoGlobeOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">International Exchange</h4>
                <p className="text-gray-500 text-sm">
                  Access perpetual futures markets
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoBarChartOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Derivatives Exchange</h4>
                <p className="text-gray-500 text-sm">
                  Trade an accessible futures market
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <IoShieldCheckmarkOutline className="text-2xl text-gray-400 group-hover:text-black" />
              <div>
                <h4 className="font-bold text-lg">Verified Pools</h4>
                <p className="text-gray-500 text-sm">
                  Transparent, verified liquidity pools
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FEATURE */}
        <div className="col-span-4 border-l border-gray-100 pl-10 flex items-start">
          <div className="flex flex-col gap-6">

            {/* IMAGE ADDED HERE */}
            <img
              src={InstImage}
              alt="Institutions"
              className="w-32 h-32 object-contain"
            />

            <div>
              <h3 className="text-xl font-bold">Our clients</h3>
              <p className="text-gray-500 mt-1">
                Trusted by institutions and government.
              </p>

              <div className="flex items-center gap-2 text-[#0052ff] font-semibold mt-3 cursor-pointer hover:underline">
                Learn more
                <FaChevronRight className="text-sm" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )}
</div>

                       {/* Developers Mega-Menu Trigger */}
                        <div
                            className="h-full flex items-center relative"
                            onMouseEnter={handleDevelopersMouseEnter}
                            onMouseLeave={handleDevelopersMouseLeave}
                            ref={developersRef}
                        >
                            <button
                                onClick={handleDevelopersClick}
                                className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap"
                                >
                                Developers
                            </button>

                            {/* The Developers Mega Menu - Full Width */}
                            {isDevelopersOpen && (
                                <div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] py-12 px-8 flex justify-center z-[6000]">
                                    <div className="max-w-7xl w-full grid grid-cols-12 gap-10">

                                        {/* Left Side: 2 Columns of Links - Scrollable (Hidden Scrollbar) */}
                                        <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-6 max-h-[50vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            {developerCategories.map((col, idx) => (
                                                <div key={idx} className="flex flex-col gap-4">
                                                    <a href="#" className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors group/header w-fit">
                                                        <h4 className="text-black font-bold text-[15px] tracking-wide uppercase">{col.title}</h4>
                                                        <FaChevronRight className="text-[10px] text-gray-400 group-hover/header:text-black transition-colors mt-0.5" />
                                                    </a>
                                                    {col.items.map((item, i) => (
                                                        <a key={i} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                                                            <div className="mt-1 text-gray-400 group-hover:text-black transition-colors">
                                                                {item.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-[17.5px] text-black transition-colors">{item.title}</span>
                                                                <span className="text-[15.5px] text-gray-500 font-medium leading-[1.3]">{item.desc}</span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right Side: Featured Promo Area - Compact Side-by-Side */}
                                        <div className="col-span-4 border-l border-gray-100 pl-6 flex items-start">
                                            <a href="#" className="flex items-start gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-[24px] transition-all duration-300 w-full">
                                                <div className="w-40 h-40 flex-shrink-0">
                                                    <img
                                                        src={developersImg}
                                                        alt="Featured"
                                                        className="w-full h-full object-cover rounded-[16px] shadow-sm group-hover:shadow-md transition-shadow duration-300"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1 pt-1 h-40 justify-between py-1">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="font-bold text-[21px] text-black transition-colors leading-[1.2]">World class crypto infrastructure</h3>
                                                        <p className="text-[15.5px] text-gray-500 font-medium leading-[1.4] max-w-[220px]">
                                                            Discover Coinbase's complete crypto-as-a-service platform.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#0052ff] font-bold text-[14px] mt-auto">
                                                        Learn more <FaChevronRight className="text-[11px]" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Company Mega-Menu Trigger */}
                        <div
                            className="h-full flex items-center relative"
                            onMouseEnter={handleCompanyMouseEnter}
                            onMouseLeave={handleCompanyMouseLeave}
                            ref={companyRef}
                        >
                            <button
                                onClick={handleCompanyClick}
                                className="bg-whitespace text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base whitespace-nowrap"
                            >
                                Company
                            </button>

                            {/* The Company Mega Menu - Full Width */}
                            {isCompanyOpen && (
                                <div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] py-12 px-8 flex justify-center z-[6000]">
                                    <div className="max-w-7xl w-full grid grid-cols-12 gap-10">

                                        {/* Left Side: 2 Columns of Links - Scrollable (Hidden Scrollbar) */}
                                        <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-6 max-h-[50vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            {companyCategories.map((col, idx) => (
                                                <div key={idx} className="flex flex-col gap-4">
                                                    {col.items.map((item, i) => (
                                                        <a key={i} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                                                            <div className="mt-1 text-gray-400 group-hover:text-black transition-colors">
                                                                {item.icon}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-[17.5px] text-black transition-colors">{item.title}</span>
                                                                <span className="text-[15.5px] text-gray-500 font-medium leading-[1.3]">{item.desc}</span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right Side: Featured Promo Area - Compact Side-by-Side */}
                                        <div className="col-span-4 border-l border-gray-100 pl-6 flex items-start">
                                            <a href="#" className="flex items-start gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-[24px] transition-all duration-300 w-full">
                                                <div className="w-40 h-40 flex-shrink-0">
                                                    <img
                                                        src={companyImg}
                                                        alt="Featured"
                                                        className="w-full h-full object-cover rounded-[16px] shadow-sm group-hover:shadow-md transition-shadow duration-300"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1 pt-1 h-40 justify-between py-1">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="font-bold text-[21px] text-black transition-colors leading-[1.2]">Learn all about Coinbase:</h3>
                                                        <p className="text-[15.5px] text-gray-500 font-medium leading-[1.4] max-w-[220px]">
                                                            We're building the open financial system.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#0052ff] font-bold text-[14px] mt-auto">
                                                        Create your account <FaChevronRight className="text-[11px]" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>

                {/* 2. Right Side Tools/Buttons */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                        <button className="bg-gray-100 p-2.5 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <div className="relative" ref={languageRef}>
                            <button
                                onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}
                                className="bg-gray-100 p-2.5 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <FiGlobe className="w-5 h-5 text-black" />
                            </button>

                            {/* Language and Region Modal */}
                            {isLanguageModalOpen && (
                                <div className="absolute top-14 right-0 w-[350px] bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 z-[7000] p-6 animate-in fade-in zoom-in duration-200">
                                    <h3 className="text-[17px] font-bold text-black mb-4">Language and region</h3>

                                    <div className="relative mb-4">
                                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={languageSearch}
                                            onChange={(e) => setLanguageSearch(e.target.value)}
                                            className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-[15px] focus:ring-2 focus:ring-[#0052ff] outline-none"
                                        />
                                    </div>

                                    <div className="max-h-[240px] overflow-y-auto pr-1 -mr-1 custom-scrollbar">
                                        {filteredLanguages.map((lang) => (
                                            <div
                                                key={lang.id}
                                                onClick={() => {
                                                    setSelectedLang(lang.id);
                                                    setTimeout(() => setIsLanguageModalOpen(false), 300);
                                                }}
                                                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-[15.5px] text-black">{lang.name}</span>
                                                    <span className="text-[14px] text-gray-500">{lang.region}</span>
                                                </div>
                                                {selectedLang === lang.id && (
                                                    <svg className="w-5 h-5 text-[#05b169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                  <div className="flex items-center gap-2 md:gap-4">
    {user ? (
        <Link
            to="/profile"
            className="bg-[#0052ff] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#004bd6] transition-all text-sm md:text-base whitespace-nowrap shadow-sm"
        >
            {user.name.split(' ')[0]}
        </Link>
    ) : (
        <>
            <Link to="/signin" className="bg-[#f0f3f6] text-black px-5 py-2.5 rounded-full font-bold hover:opacity-80 transition-all text-sm md:text-base whitespace-nowrap">
                Sign in
            </Link>
            <Link to="/signup" className="bg-[#0052ff] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#004bd6] transition-all text-sm md:text-base whitespace-nowrap shadow-sm text-center">
                Sign up
            </Link>
        </>
    )}
</div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-black text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white z-[4000] p-6 lg:hidden overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Cryptocurrencies</a>
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Individuals</a>
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Businesses</a>
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Institutions</a>
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Developers</a>
                        <a href="#" className="font-bold text-xl p-4 hover:bg-gray-50 rounded-xl">Company</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
