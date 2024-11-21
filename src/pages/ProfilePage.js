import { ChevronLeft} from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    return (
      <div className="space-y-4 px-5">
        <div className="top-4 left-4 z-10 bg-white p-2 rounded-full pt-4">
                <Link to="/" className="flex items-center text-black bg-white shadow w-fit p-2 rounded-full">
                    <ChevronLeft />
                </Link>
            </div>
        <div className="flex justify-center">
        <img
          src="/images/khila.jpeg"
          alt="Profile"
          className="w-[150px] h-[150px] object-cover rounded-full"
        />
        </div>
        <div>
            <h1 className="font-semibold">Akhila Zahra</h1>
            <p className="text-muted-foreground">akhilazahra@students.undip.ac.id</p>
        </div>
        <div className="text-justify text-sm">
            <p>Aplikasi EngineerBase menyediakan cuplikan aplikasi pada halaman Home Page, yang memberikan gambaran singkat tentang jurusan-jurusan di Fakultas Teknik UNDIP. Pengguna dapat mengakses halaman Jurusan untuk melihat informasi lebih detail tentang setiap jurusan, serta halaman Himpunan untuk mengetahui lebih lanjut mengenai organisasi mahasiswa di setiap jurusan. Aplikasi ini didukung oleh EngineerBase API untuk pengelolaan data yang efisien, memungkinkan pengguna menavigasi informasi jurusan dan himpunan dengan mudah dan cepat.</p>
        </div>
      </div>
    );
  }
  