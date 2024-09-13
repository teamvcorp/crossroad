'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  label?: string;  // Optional label for the button
}

export default function BackButton({ label = 'Go Back' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
    >
      {label}
    </button>
  );
}
