import { ChevronLeft, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailPage() {
    const { id } = useParams();
    const [detailProdi, setDetailProdi] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchDetailProdi = async () => {
            try {
                const response = await fetch(`https://api-engineerbase.vercel.app/api/jurusan/${id}`);
                const data = await response.json();
                setDetailProdi(data);
            } catch (error) {
                console.error('Error fetching detail data:', error);
            }
        };
        fetchDetailProdi();
    }, [id]);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    if (!detailProdi) {
        return (
            <div className="animate-pulse">
                <div className="relative mb-4">
                    <div className="absolute top-4 left-4 z-10 bg-gray-300 p-2 rounded-full w-10 h-10"></div>
                    <div className="bg-gray-300 rounded-b-3xl w-full h-[400px]"></div>
                </div>
                <div className="space-y-4 px-5">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="flex space-x-4">
                        <div className="bg-gray-300 rounded-xl w-[150px] h-[100px]"></div>
                        <div className="bg-gray-300 rounded-xl w-[150px] h-[100px]"></div>
                        <div className="bg-gray-300 rounded-xl w-[150px] h-[100px]"></div>
                        <div className="bg-gray-300 rounded-xl w-[150px] h-[100px]"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative">
                        <img src={selectedImage} alt="Popup Detail" className="max-w-[90vw] max-h-[90vh] rounded-xl" />
                        <button onClick={handleClosePopup} className="absolute top-2 right-2 bg-white rounded-full p-1"><X className='w-4 h-4'/></button>
                    </div>
                </div>
            )}
            <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full">
                <Link to="/" className="flex items-center text-black">
                    <ChevronLeft />
                </Link>
            </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg"
                alt="Dekanat Undip"
                className="rounded-b-3xl max-h-[400px] w-full object-cover"
            />
            <div className="text-left px-5 mt-4 space-y-6">
                <div>
                    <h1 className="font-bold text-xl">{detailProdi.nama_prodi}</h1>
                    <p className="text-[#737373] text-sm">Akreditasi {detailProdi.akreditasi}</p>
                </div>
                <div className="flex space-x-4 overflow-x-auto custom-scrollbar">
                    {/* List of hardcoded images */}
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg" 
                        alt="Dekanat Undip 1" 
                        className="rounded-xl max-w-[150px] h-[100px] object-cover cursor-pointer"
                        onClick={() => handleImageClick('https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg')}
                    />
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg" 
                        alt="Dekanat Undip 2" 
                        className="rounded-xl max-w-[150px] h-[100px] object-cover cursor-pointer"
                        onClick={() => handleImageClick('https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg')}
                    />
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg" 
                        alt="Dekanat Undip 3" 
                        className="rounded-xl max-w-[150px] h-[100px] object-cover cursor-pointer"
                        onClick={() => handleImageClick('https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg')}
                    />
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg" 
                        alt="Dekanat Undip 4" 
                        className="rounded-xl max-w-[150px] h-[100px] object-cover cursor-pointer"
                        onClick={() => handleImageClick('https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg')}
                    />
                </div>
                <p className="text-sm text-[#737373] text-justify">{detailProdi.description}</p>
            </div>
        </div>
    );
}