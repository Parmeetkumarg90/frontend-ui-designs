"use client"
import { usePathname } from 'next/navigation';

function NotFoundPage() {
    const pathName = usePathname();
    return (
        <>
            {pathName}
        </>
    );
}

export default NotFoundPage;