'use client'

import { useRouter } from "next/navigation";

export default function Facebook(){
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    }
    return <div>
        facebook
        <div>
            <button onClick={() => handleBtn()}>Back home</button>
        </div>
    </div>
}