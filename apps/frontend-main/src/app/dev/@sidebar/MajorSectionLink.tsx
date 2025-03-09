"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

const MajorSectionLink = ({
    label,
    link,
    icon,
}: {
    label: string;
    link: string;
    icon: ReactNode;
}) => {
    const pathname = usePathname(); // Get current route

    // Check if the current path is exactly the link OR a subpath of it
    const isActive = pathname === link || pathname.startsWith(`${link}/`);
    useEffect(() => {
        console.log({ isActive, pathname });
    }, [pathname, isActive]);
    return (
        <li>
            <Link
                className="group inline-flex items-center gap-3 text-base/8 text-blueGrey-700 sm:text-sm :[svg]:first:size-5 [svg]:first:sm:size-4
**:data-outline:stroke-gray-400 hover:text-blueGrey-900 aria-[current]:font-semibold aria-[current]:text-blueGrey-900"
                href={link}
                aria-current={isActive ? "page" : undefined}
            >
                {icon}
                {label}
            </Link>
        </li>
    );
};
export default MajorSectionLink;
