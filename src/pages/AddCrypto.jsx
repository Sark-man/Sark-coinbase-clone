import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinbaseBlack from '../assets/coinbase-black.png';
import API_BASE from '../api';

const AddCrypto = () => {
    const [form, setForm] = useState({
        name: '',
        symbol: '',
        price: '',
        image: '',
        change24h: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setError('');
        setSuccess('');

        const { name, symbol, price, change24h } = form;
        if (!name || !symbol || !price || !change24h) {
            setError('Please fill in all required fields.');
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE}/crypto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    price: parseFloat(form.price),
                    change24h: parseFloat(form.change24h),
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(`${data.data.name} added successfully!`);
                setForm({ name: '', symbol: '', price: '', image: '', change24h: '' });
                setTimeout(() => navigate('/explore'), 1500);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Could not connect to server. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "w-full bg-black border-2 border-white/10 rounded-[8px] p-4 focus:border-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600";
    const labelClass = "text-sm font-bold text-gray-400";

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 md:p-10 relative overflow-y-auto">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <Link to="/">
                    <img src={coinbaseBlack} alt="Logo" className="h-5 md:h-6" />
                </Link>
            </div>

            <div className="w-full max-w-[400px] mx-auto flex flex-col mt-20 md:mt-32 gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                        Add Cryptocurrency
                    </h1>
                    <p className="text-gray-400 text-sm font-medium mt-2">
                        Add a new asset to the platform.
                    </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>Name *</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Bitcoin"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Symbol */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>Symbol *</label>
                    <input
                        type="text"
                        name="symbol"
                        placeholder="e.g. BTC"
                        value={form.symbol}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>Price (USD) *</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="e.g. 97500"
                        value={form.price}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* 24h Change */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>24h Change (%) *</label>
                    <input
                        type="number"
                        name="change24h"
                        placeholder="e.g. 2.5 or -1.3"
                        value={form.change24h}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>Image URL (optional)</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://example.com/coin.png"
                        value={form.image}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                {/* Success */}
                {success && (
                    <p className="text-green-400 text-sm font-medium">{success}</p>
                )}

                <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-[0.98] ${
                        submitting
                            ? 'bg-blue-900 text-white/20'
                            : 'bg-[#0052ff] text-white hover:bg-[#004bd6]'
                    }`}
                >
                    {submitting ? 'Adding...' : 'Add Cryptocurrency'}
                </button>

                <Link
                    to="/explore"
                    className="text-center text-gray-400 text-sm font-medium hover:text-white transition-colors"
                >
                    ← Back to Explore
                </Link>
            </div>
        </div>
    );
};

export default AddCrypto;