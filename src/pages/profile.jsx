import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinbaseBlack from '../assets/coinbase-black.png';
import API_BASE from '../api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        // Redirect to login if not authenticated
        if (!token) {
            navigate('/signin');
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await fetch(`${API_BASE}/users/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                const data = await res.json();

                if (data.success) {
                    setUser(data.user);
                } else {
                    // Token invalid or expired
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/signin');
                }
            } catch (err) {
                setError('Could not load profile. Please try again.');
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        await fetch(`${API_BASE}/auth/logout`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            credentials: 'include',
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/signin');
    };

    if (!user) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
                <img src={coinbaseBlack} alt="Coinbase" className="h-16 animate-pulse" />
            </div>
        );
    }

    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    const memberSince = new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 md:p-10 relative">
            {/* Top Branding */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <Link to="/">
                    <img src={coinbaseBlack} alt="Coinbase" className="h-5 md:h-6" />
                </Link>
            </div>

            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center mt-20 md:mt-32 gap-8">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-[#0052ff] flex items-center justify-center text-2xl font-extrabold">
                    {initials}
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    {user.name}
                </h1>

                {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                {/* Info Card */}
                <div className="w-full bg-[#121212] rounded-[12px] border border-white/10 flex flex-col divide-y divide-white/10">
                    <div className="flex justify-between items-center p-4">
                        <span className="text-gray-400 text-sm font-medium">Email</span>
                        <span className="text-white text-sm font-bold">{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <span className="text-gray-400 text-sm font-medium">Member since</span>
                        <span className="text-white text-sm font-bold">{memberSince}</span>
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <span className="text-gray-400 text-sm font-medium">Account ID</span>
                        <span className="text-white text-sm font-bold truncate max-w-[180px]">{user.id}</span>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full py-4 rounded-full font-bold text-lg border-2 border-white/10 hover:border-white/30 transition-all active:scale-[0.98]"
                >
                    Log out
                </button>
            </div>
        </div>
    );
};

export default Profile;