import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignIn from "../../components/GitHubSignIn"
import GoogleSignIn from '../../components/GoogleSignIn'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";


export default async function Login(){

    const session = await getServerSession(authOptions);

    // if(session){
    //     return redirect("/home");
    // }

    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm mdLpx-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-2xl font-semibold text-white">Log In</h1>
                <div className="space-y-4 mt-5">
                    <Input className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" type="email" placeholder="Email" name="email" />
                    <Button variant="destructive" type="submit" className="w-full bg-[#e50914]">Sign Up</Button>
                </div> 
            </form>
            <div className="text-gray-500 text-sm mt-52">
                New Here? <Link className="text-white hover:underline" href="/sign-up">Make An Account Now!</Link>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignIn/>
                <GoogleSignIn/>
            </div>
        </div>
    )
}