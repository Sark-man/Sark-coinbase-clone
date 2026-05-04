import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiBitcoin, SiEthereum, SiTether, SiBinance, SiXrp } from 'react-icons/si';
import API_BASE from '../api';

const getCoinIcon = (symbol) => {
    const s = symbol?.toLowerCase();
    if (s === 'btc') return <SiBitcoin className="text-[#F7931A] text-2xl" />;
    if (s === 'eth') return <SiEthereum className="text-[#627EEA] text-2xl" />;
    if (s === 'usdt') return <SiTether className="text-[#26A17B] text-2xl" />;
    if (s === 'bnb') return <SiBinance className="text-[#F3BA2F] text-2xl" />;
    if (s === 'xrp') return <SiXrp className="text-gray-800 text-2xl" />;
    return (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] uppercase font-bold text-gray-600">
            {symbol?.substring(0, 2)}
        </div>
    );
};

const Explore = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [assets, setAssets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssets = async () => {
            setIsLoading(true);
            setError(null);
            try {
                let endpoint = '';
                if (activeFilter === 'all') endpoint = '/crypto';
                else if (activeFilter === 'gainers') endpoint = '/crypto/gainers';
                else if (activeFilter === 'new') endpoint = '/crypto/new';

                const res = await fetch(`${API_BASE}${endpoint}`);
                const data = await res.json();

                if (data.success) {
                    setAssets(data.data);
                } else {
                    setError('Failed to load data.');
                }
            } catch (err) {
                setError('Could not connect to server. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssets();
    }, [activeFilter]);

    const filters = [
        { id: 'all', label: 'All assets' },
        { id: 'gainers', label: 'Top gainers' },
        { id: 'new', label: 'New on Coinbase' },
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-6">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Explore crypto</h1>
                <p className="text-gray-500 font-medium">Buy, sell, and manage hundreds of cryptocurrencies.</p>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 mb-6">
                <div className="flex gap-2">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                activeFilter === f.id
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
                {/* Table Header */}
                <div className="grid grid-cols-4 text-xs font-bold text-gray-400 uppercase tracking-wide border-b border-gray-100 pb-3 mb-2">
                    <span>Asset</span>
                    <span className="text-right">Price</span>
                    <span className="text-right">24h Change</span>
                    <span className="text-right">Action</span>
                </div>

                {/* Loading */}
                {isLoading && (
                    <div className="flex flex-col gap-4 mt-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="grid grid-cols-4 items-center animate-pulse py-4 border-b border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                    <div className="flex flex-col gap-2">
                                        <div className="w-20 h-4 bg-gray-100 rounded" />
                                        <div className="w-10 h-3 bg-gray-100 rounded" />
                                    </div>
                                </div>
                                <div className="w-24 h-4 bg-gray-100 rounded ml-auto" />
                                <div className="w-16 h-4 bg-gray-100 rounded ml-auto" />
                                <div className="w-16 h-8 bg-gray-100 rounded-full ml-auto" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Error */}
                {error && !isLoading && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <p className="text-gray-400 mb-4">{error}</p>
                        <button
                            onClick={() => setActiveFilter(activeFilter)}
                            className="text-[#0052ff] font-bold hover:underline"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {/* Empty state */}
                {!isLoading && !error && assets.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <p className="text-gray-400 text-lg font-medium">No cryptocurrencies found.</p>
                        <p className="text-gray-300 text-sm mt-2">Add some using the POST /api/crypto endpoint.</p>
                    </div>
                )}

                {/* Rows */}
                {!isLoading && !error && assets.map((coin) => {
                    const isPositive = coin.change24h >= 0;
                    return (
                        <div
                            key={coin._id}
                            className="grid grid-cols-4 items-center py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg px-2"
                        >
                            {/* Asset */}
                            <div className="flex items-center gap-3">
                                {coin.image ? (
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className="w-8 h-8 rounded-full"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                ) : (
                                    getCoinIcon(coin.symbol)
                                )}
                                <div>
                                    <p className="font-bold text-sm">{coin.name}</p>
                                    <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
                                </div>
                            </div>

                            {/* Price */}
                            <p className="text-right font-bold text-sm">
                                ${coin.price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>

                            {/* Change */}
                            <p className={`text-right text-sm font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                {isPositive ? '↑' : '↓'} {Math.abs(coin.change24h).toFixed(2)}%
                            </p>

                            {/* Action */}
                            <div className="flex justify-end">
                                <Link
                                    to="/signup"
                                    className="bg-[#0052ff] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#004bd6] transition-all"
                                >
                                    Trade
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Explore;