import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinbaseBlack from '../assets/coinbase-black.png';
import { FaApple, FaGoogle, FaKey } from 'react-icons/fa6';
import API_BASE from '../api';

const Signin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
                <img src={coinbaseBlack} alt="Coinbase" className="h-16 animate-pulse" />
            </div>
        );
    }

    const isFormEmpty = email.trim() === '' || password.trim() === '';

    const handleSubmit = async () => {
        setError('');
        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 md:p-10 relative overflow-y-auto">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <Link to="/"><img src={coinbaseBlack} alt="Coinbase" className="h-5 md:h-6" /></Link>
            </div>

            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center mt-20 md:mt-32">
                <h1 className="text-2xl md:text-3xl font-extrabold text-left w-full mb-8 tracking-tight">
                    Sign in to Coinbase
                </h1>

                <div className="w-full flex flex-col gap-5">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border-2 border-white/10 rounded-[8px] p-4 focus:border-[#0052ff] outline-none transition-colors font-medium"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-400">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border-2 border-white/10 rounded-[8px] p-4 focus:border-[#0052ff] outline-none transition-colors font-medium"
                        />
                    </div>

                    {/* Error message */}
                    {error && (
                        <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <p className="text-center text-yellow-400 text-xs font-bold bg-yellow-400/10 border border-yellow-400/20 rounded-lg py-2 px-3">
    🔒 Demo app – do not use your real password
</p>

                    <button
                        disabled={isFormEmpty || submitting}
                        onClick={handleSubmit}
                        className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-[0.98] ${
                            isFormEmpty || submitting
                                ? 'bg-blue-900 text-white/20'
                                : 'bg-[#0052ff] text-white hover:bg-[#004bd6]'
                        }`}
                    >
                        {submitting ? 'Signing in...' : 'Continue'}
                    </button>

                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[1px] bg-white/10 flex-grow"></div>
                        <span className="text-grey-500 font-bold text-xs">OR</span>
                        <div className="h-[1px] bg-white/10 flex-grow"></div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-[#121212] hover:bg-[#1a1a1a] text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-white/5">
                            <FaKey className="text-lg" /> Sign in with passkey
                        </button>
                        <button className="w-full bg-[#121212] hover:bg-[#1a1a1a] text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-white/5">
                            <FaGoogle className="text-lg" /> Sign in with Google
                        </button>
                        <button className="w-full bg-[#121212] hover:bg-[#1a1a1a] text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-white/5">
                            <FaApple className="text-lg" /> Sign in with Apple
                        </button>
                    </div>

                    <p className="text-center text-gray-400 text-sm font-medium mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-[#0052ff] hover:underline">Sign up</Link>
                    </p>
                </div>

                <div className="mt-16 text-center flex flex-col gap-4 text-xs font-medium text-gray-500 max-w-[320px]">
                    <p>
                        Not your device? Use a private window. See our{' '}
                        <Link to="#" className="text-[#0052ff] hover:underline">Privacy Policy</Link> for more info.
                    </p>
                    <Link to="/" className="text-[#0052ff] hover:underline font-bold mt-4">
                        Cancel signing in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;