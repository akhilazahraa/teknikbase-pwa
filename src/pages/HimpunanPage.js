import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/nav/NavBottom';

export default function HimpunanPage() {
    const [himpunan, setHimpunan] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHimpunan = async () => {
            try {
                // Cek apakah data ada di cache terlebih dahulu
                const cachedData = await caches.match('https://api-engineerbase.vercel.app/api/himpunan');
                if (cachedData) {
                    const cachedResponse = await cachedData.json();
                    setHimpunan(cachedResponse);
                } else {
                    // Jika data tidak ada di cache, ambil dari API
                    const response = await fetch('https://api-engineerbase.vercel.app/api/himpunan');
                    const data = await response.json();
                    setHimpunan(data);

                    // Simpan data yang diambil dari API ke cache untuk penggunaan selanjutnya
                    const cache = await caches.open('data-cache-v1');
                    cache.put('https://api-engineerbase.vercel.app/api/himpunan', new Response(JSON.stringify(data)));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchHimpunan();
    }, []); // useEffect dijalankan sekali ketika komponen pertama kali dimuat

    const handleClick = (id) => {
        navigate(`/himpunan/${id}`);
    };

    return (
        <>                  
            <BottomNavigation />
            <div className="mt-7 px-5">
                <div className="space-y-4">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dekanat_ft_undip.jpg" 
                        alt="Dekanat Undip" 
                        className="rounded-xl max-h-[200px] w-full object-cover"
                    />
                    <div className="text-left">
                        <h1 className="font-bold">Daftar Himpunan</h1>
                        <p className="text-[#737373]">Temukan informasi himpunan mahasiswa di bawah ini.</p>
                    </div>
                </div>

                {/* Daftar Himpunan */}
                <div className="mt-5 space-y-4">
                    {himpunan.length > 0 ? (
                        himpunan.map((item) => (
                            <div 
                                key={item.id} 
                                className="p-4 border rounded-lg shadow-sm text-left flex justify-between gap-4 items-center cursor-pointer"
                                onClick={() => handleClick(item.id)}
                            >
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        <img 
                                            src={`https://api-engineerbase.vercel.app${item.logo_himpunan}`}
                                            alt={item.nama_himpunan} 
                                            className="rounded-xl max-w-[100px] h-full object-cover" 
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold">{item.nama_himpunan}</h2>
                                        <p className='text-sm text-[#737373]'>{item.deskripsi_himpunan.slice(0, 50)}...</p>
                                    </div>
                                </div>
                                <div><ChevronRight /></div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada himpunan yang tersedia.</p>
                    )}
                </div>
            </div>
        </>
    );
}
