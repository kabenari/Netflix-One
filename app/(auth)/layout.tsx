import {ReactNode} from "react";
import Image from "next/image";
import BackgroundImage from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({children}:{children: ReactNode}){

    const session = await getServerSession(authOptions);

    // if(!session){
    //     return redirect("/sign-up");
    // }


    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image fill priority src={BackgroundImage} alt="img back" className="brightness-50 hidden sm:flex sm:object-cover -z-10" />
            <Image src={Logo}
            alt="ok"
            width={120}
            height={120}
            priority
            className="absolute sm:flex sm:object-contain md:left-10 top-6" />
           {children}
        </div>
    )
}