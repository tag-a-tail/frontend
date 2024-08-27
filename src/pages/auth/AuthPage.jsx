import {Button} from "@/components/ui/button.jsx";
import LoginImage from "@/assets/images/login_image.jpg";
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import {FaXTwitter} from "react-icons/fa6";
import {FaApple} from "react-icons/fa";
import LoginBgVideo from "@/assets/videos/login_bg_video.mp4";
import LogoImage from "@/assets/images/logo.png";

export default function AuthPage() {
    return (
        <div className="font-ibm w-full h-screen login-bg relative flex items-center justify-center">
            <video autoPlay={true} loop={true} muted={true} playsInline={true}
                   className="-z-10 absolute right-0 bottom-0">
                <source src={LoginBgVideo} type="video/mp4"/>
            </video>
            <div className="w-[768px] mx-auto bg-white flex rounded-2xl z-50 overflow-hidden drop-shadow-2xl">
                <div className="w-full h-full">
                    <div className="grid grid-cols-2">
                        <div className="overflow-y-auto overflow-x-hidden h-[calc(100% - 64px)] mx-[32px] my-10">
                            {/*  for the buttons here  */}
                            <div className="flex items-center justify-center my-2">
                                <img src={LogoImage} className="w-32"/>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold">Log in or sign up in seconds</h1>
                                <p className="text-sm text-slate-600">Use any of the below service providers to explore
                                    an entire new world for you and
                                    your
                                    pet!</p>
                            </div>
                            <div className="my-6 space-y-3">
                                {/*  cta button section  */}
                                <div>
                                    <Button variant="outline" className="w-full flex">
                                        <FcGoogle className="h-5 w-5"/>
                                        <div className="text-center flex-1">
                                            Continue with Google
                                        </div>

                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full">
                                        <BsFacebook className="h-5 w-5 text-blue-500"/>
                                        <div className="text-center flex-1">
                                            Continue with Facebook
                                        </div>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full">
                                        <FaXTwitter className="h-5 w-5"/>
                                        <div className="text-center flex-1">
                                            Continue with X
                                        </div>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full">
                                        <FaApple className="h-5 w-5"/>
                                        <div className="text-center flex-1">
                                            Continue with Apple
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <img src={LoginImage}
                             style={{
                                 overflowClipMargin: "content-box"
                             }}
                             className="w-full overflow-clip" alt="Cute dog besides"/>
                    </div>
                </div>
            </div>
        </div>
    );
}