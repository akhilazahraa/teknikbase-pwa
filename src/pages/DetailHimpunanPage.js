import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import BottomNavigation from '../components/nav/NavBottom';

export default function DetailHimpunanPage() {
    const { id } = useParams();
    const [himpunanDetail, setHimpunanDetail] = useState(null);

    useEffect(() => {
        const fetchHimpunanDetail = async () => {
            try {
                // Cek apakah data sudah ada di cache
                const cachedData = await caches.match(`https://api-engineerbase.vercel.app/api/himpunan/${id}`);
                if (cachedData) {
                    const cachedResponse = await cachedData.json();
                    setHimpunanDetail(cachedResponse);
                } else {
                    // Ambil data dari API jika tidak ada di cache
                    const response = await fetch(`https://api-engineerbase.vercel.app/api/himpunan/${id}`);
                    const data = await response.json();
                    setHimpunanDetail(data);

                    // Simpan data yang diambil ke cache
                    const cache = await caches.open('data-cache-v1');
                    cache.put(`https://api-engineerbase.vercel.app/api/himpunan/${id}`, new Response(JSON.stringify(data)));
                }
            } catch (error) {
                console.error('Error fetching himpunan details:', error);
            }
        };

        fetchHimpunanDetail();
    }, [id]); // useEffect dijalankan setiap kali id berubah

    if (!himpunanDetail) {
        return (
            <div className="animate-pulse">
                <div className="relative mb-4">
                    <div className="absolute top-4 left-4 z-10 bg-gray-300 p-2 rounded-full w-10 h-10"></div>
                    <div className="bg-gray-300 rounded-b-3xl w-full h-[400px]"></div>
                </div>
                <div className="space-y-4 px-5">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-20 bg-gray-300 rounded-xl w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <BottomNavigation />
            <div className="relative">
                {/* Back Button */}
                <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-md">
                    <Link to="/himpunan" className="flex items-center text-black">
                        <ChevronLeft className="mr-2" />
                    </Link>
                </div>

                {/* Header Image */}
                <img
                    src={`https://api-engineerbase.vercel.app${himpunanDetail.logo_himpunan}`}
                    alt={himpunanDetail.nama_himpunan}
                    className="rounded-b-3xl max-h-[400px] w-full object-cover"
                    referrerPolicy="no-referrer"
                />

                {/* Content */}
                <div className="text-left px-5 mt-4 space-y-6">
                    {/* Title and Accreditation */}
                    <div>
                        <h1 className="font-bold text-xl">{himpunanDetail.nama_himpunan}</h1>
                    </div>

                    {/* Image Gallery */}
                    <div className="flex space-x-4 overflow-x-auto custom-scrollbar">
                        {himpunanDetail.gallery?.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery ${index}`}
                                className="rounded-xl max-w-[150px] h-[100px] object-cover"
                            />
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#737373] text-justify">{himpunanDetail.deskripsi_himpunan}</p>
                </div>
            </div>
        </>
    );
}
