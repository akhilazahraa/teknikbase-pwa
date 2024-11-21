import { Link } from "react-router-dom";

export default function SplashPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            {/* Logo */}
            <div className="mb-6">
                <img
                    src="https://upload.wikimedia.org/wikipedia/id/2/2d/Undip.png"
                    alt="Universitas Diponegoro Logo"
                    className="h-32 w-32 object-contain"
                />
            </div>
            {/* Text */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-black">EngineerBase</h1>
            </div>
            {/* Button */}
            <div>
                <Link to="/home" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-md">
                    Let’s Start!
                </Link>
            </div>
        </div>
    );
}
