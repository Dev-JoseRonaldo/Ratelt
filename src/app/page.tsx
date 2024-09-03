'use client';

import { AxiosInterceptor } from '@/interceptor/axios.interceptor';
import { useEffect, useState } from 'react';

export default function Home() {
  const axiosInstance = new AxiosInterceptor();
  const axios = axiosInstance.getAxiosInstance();
  const [title, setTitle] = useState<string>();
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/health`).then((r) => {
      setTitle(r.data.status);
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold">{title}</h1>
    </main>
  );
}
