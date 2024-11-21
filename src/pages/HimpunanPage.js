import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HimpunanPage() {
    const [himpunan, setHimpunan] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHimpunan = async () => {
            try {
                const response = await fetch('https://api-engineerbase.vercel.app/api/himpunan');
                const data = await response.json();
                setHimpunan(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchHimpunan();
    }, []);

    const handleClick = (id) => {
        navigate(`/himpunan/${id}`);
    };

    return (
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
            <div className="mt-5 space-y-4">
                {himpunan.map((item) => (
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
                                    className="rounded-xl max-w-[100px] h-full object-cover" referrerPolicy="no-referrer" 
                                />
                            </div>
                            <div>
                                <h2 className="font-bold">{item.nama_himpunan}</h2>
                                <p className='text-sm text-[#737373]'>{item.deskripsi_himpunan.slice(0, 50)}...</p>
                            </div>
                        </div>
                        <div><ChevronRight/></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
