import { ChevronLeft, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BottomNavigation from '../components/nav/NavBottom';

export default function DetailPage() {
    const { id } = useParams();
    const [detailProdi, setDetailProdi] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchDetailProdi = async () => {
            try {
                // Cek apakah data sudah ada di cache
                const cachedData = await caches.match(`https://api-engineerbase.vercel.app/api/jurusan/${id}`);
                if (cachedData) {
                    const cachedResponse = await cachedData.json();
                    setDetailProdi(cachedResponse);
                } else {
                    // Jika tidak ada di cache, ambil dari API
                    const response = await fetch(`https://api-engineerbase.vercel.app/api/jurusan/${id}`);
                    const data = await response.json();
                    setDetailProdi(data);

                    // Simpan data ke cache untuk offline use
                    const cache = await caches.open('data-cache-v1');
                    cache.put(`https://api-engineerbase.vercel.app/api/jurusan/${id}`, new Response(JSON.stringify(data)));
                }
            } catch (error) {
                console.error('Error fetching detail data:', error);
            }
        };

        fetchDetailProdi();
    }, [id]);

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
        <>
            <BottomNavigation />
            <div className="relative">
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                        <div className="relative">
                            <img src={selectedImage} alt="Popup Detail" className="max-w-[90vw] max-h-[90vh] rounded-xl" />
                            <button onClick={handleClosePopup} className="absolute top-2 right-2 bg-white rounded-full p-1">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
                <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full">
                    <Link to="/jurusan" className="flex items-center text-black">
                        <ChevronLeft />
                    </Link>
                </div>
                <img
                    src={detailProdi.images}
                    alt="Dekanat Undip"
                    className="rounded-b-3xl max-h-[400px] w-full object-cover"
                />
                <div className="text-left px-5 mt-4 space-y-6">
                    <div>
                        <h1 className="font-bold text-xl">{detailProdi.nama_prodi}</h1>
                        <p className="text-[#737373] text-sm">Akreditasi {detailProdi.akreditasi}</p>
                    </div>
                    <p className="text-sm text-[#737373] text-justify">{detailProdi.description}</p>
                </div>
            </div>
        </>
    );
}
