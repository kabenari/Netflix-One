import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {GithubIcon} from 'lucide-react'
import GithubSignIn from "../../components/GitHubSignIn"
import GoogleSignIn from '../../components/GoogleSignIn'


export default function SignUp(){
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm mdLpx-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-2xl font-semibold text-white">Sign Up</h1>
                <div className="space-y-4 mt-5">
                    <Input className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" type="email" placeholder="Email" name="email" />
                    <Button variant="destructive" type="submit" className="w-full bg-[#e50914]">Sign Up</Button>
                </div> 
            </form>
            <div className="text-gray-500 text-sm mt-52">
                Already Have An Acoount? <Link className="text-white hover:underline" href="/login">Log in Now?</Link>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignIn/>
                <GoogleSignIn/>
            </div>
        </div>
    )
}