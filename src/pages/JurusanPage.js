import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/nav/NavBottom';

export default function JurusanPage() {
    const [programStudi, setProgramStudi] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProgramStudi = async () => {
            try {
                const cachedData = await caches.match('https://api-engineerbase.vercel.app/api/jurusan');
                if (cachedData) {
                    const cachedResponse = await cachedData.json();
                    setProgramStudi(cachedResponse);
                } else {
                    const response = await fetch('https://api-engineerbase.vercel.app/api/jurusan');
                    const data = await response.json();
                    setProgramStudi(data);

                    // Simpan data ke cache untuk offline use
                    const cache = await caches.open('data-cache-v1');
                    cache.put('https://api-engineerbase.vercel.app/api/jurusan', new Response(JSON.stringify(data)));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProgramStudi();
    }, []);

    const handleClick = (id) => {
        navigate(`/jurusan/${id}`);
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
                        <h1 className="font-bold">Hai</h1>
                        <p className="text-[#737373]">Mau cari program studi unggulan kamu?</p>
                    </div>
                </div>

                {/* Daftar Program Studi */}
                <div className="mt-5 space-y-4">
                    {programStudi.length > 0 ? (
                        programStudi.map((prodi) => (
                            <div 
                                key={prodi.id} 
                                className="p-4 border rounded-lg shadow-sm text-left flex justify-between gap-4 items-center cursor-pointer"
                                onClick={() => handleClick(prodi.id)}
                            >
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        <img 
                                            src={prodi.images} 
                                            alt="Dekanat Undip" 
                                            className="rounded-xl max-w-[100px] h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold">{prodi.nama_prodi}</h2>
                                        <p className='text-sm text-[#737373]'>Akreditasi {prodi.akreditasi}</p>
                                    </div>
                                </div>
                                <div><ChevronRight /></div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada jurusan yang tersedia.</p>
                    )}
                </div>
            </div>
        </>
    );
}
