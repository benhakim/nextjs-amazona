"use client"

import {Button} from "@/components/ui/button";
import {ChevronUp} from "lucide-react";
import Link from "next/link";
import {APP_NAME} from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-black text-white undlerline-link">
         <div className="w-full">
             <Button variant='ghost'
                     className='bg-gray-800 ronded-none'
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}

             >
                 <ChevronUp className=' mr-2 w-4 h-4'/>
                 Back to top

             </Button>
         </div>
            <div className="px-4">
                <div className="flex justify-center gap-3 text-sm">
                    <Link href="/(home)/page.tsx/conditions-of-use">Conditions of Use</Link>
                    <Link href="/(home)/page.tsx/privacy-policy">Policy of Notice</Link>
                    <Link href="/(home)/page.tsx/help">Help</Link>
                </div>
                <div className="flex justify-center text-sm">
                 <p> @ 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className="mt-8 flex justify-center text-sm text-gray-400">
                 123, Main Street, Anytown , CA Zip 12345 | (123) 456-7890
                </div>
            </div>
        </footer>
    )
}