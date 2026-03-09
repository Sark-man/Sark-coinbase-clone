import { Link } from "react-router-dom";

export default function CryptoCard({ crypto }) {
  return (
    <Link
      to={`/asset/${crypto.id}`}
      className="border rounded-xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">
        {crypto.name}
      </h3>
      <p className="text-gray-600">
        ${crypto.price}
      </p>
    </Link>
  );
}