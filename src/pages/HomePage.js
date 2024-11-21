import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="bg-white min-h-screen p-5">
            <div className="mb-6">
                <h1 className="text-2xl text-black text-left">Welcome,</h1>
                <h2 className="text-2xl text-black text-left">
                    Search for majors <br /> based on <span className="font-bold text-black">your needs</span>
                </h2>
            </div>
            <div className="rounded-xl overflow-hidden mb-6">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg"
                    alt="Dekanat Undip"
                    className="rounded-xl max-h-[200px] w-full object-cover"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <Link to="/jurusan" className="bg-black text-white p-4 rounded-lg flex justify-between items-center text-left ">
                    <span>Majors in the faculty of engineering</span>
                    <span className="text-2xl">&rarr;</span>
                </Link>
                {/* Card 2 */}
                <Link to="/jurusan/12" className="bg-white border border-gray-400 p-4 rounded-lg flex justify-between items-center text-left">
                    <span>Computer engineering department</span>
                    <span className="text-2xl">&rarr;</span>
                </Link>
                {/* Card 3 */}
                <Link to="/himpunan" className="bg-white border border-gray-400 p-4 rounded-lg flex justify-between items-center text-left">
                    <span>Student association</span>
                    <span className="text-2xl">&rarr;</span>
                </Link>
                {/* Card 4 */}
                <Link to="/jurusan/1" className="bg-black text-white p-4 rounded-lg flex justify-between items-center text-left">
                    <span>Civil engineering oldest major</span>
                    <span className="text-2xl">&rarr;</span>
                </Link>
            </div>
        </div>
    );
}
