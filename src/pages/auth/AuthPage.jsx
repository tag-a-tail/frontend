import {Button} from "@/components/ui/button.jsx";
import LoginImage from "@/assets/images/login_image.jpg";
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import {FaXTwitter} from "react-icons/fa6";
import {FaApple} from "react-icons/fa";
import LoginBgVideo from "@/assets/videos/login_bg_video.mp4";
import LogoImage from "@/assets/images/logo.png";
import {useEffect, useState} from "react";
import {useSessionStorage} from "@uidotdev/usehooks";
import {useNavigate} from "react-router-dom";

export default function AuthPage() {

    const [accessToken, saveAccessToken] = useSessionStorage('accessToken', null);
    const [isLoaded, setIsLoaded] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            navigate('/', {replace: true});
            setIsLoaded(false);
        } else {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            if (token) {
                saveAccessToken(token);
                navigate('/');
                setIsLoaded(false);
            } else {
                setIsLoaded(true);
            }
        }
    }, []);

    function loginByGoogle() {
        window.location.href = '/api/auth/google/login';
    }

    function loginByFacebook() {
        window.location.href = '/api/auth/facebook/login';
    }

    if (isLoaded) {
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
                                    <img src={LogoImage} alt="Logo Image" className="w-32"/>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-2xl font-bold">Log in or sign up in seconds</h1>
                                    <p className="text-sm text-slate-600">Use any of the below service providers to
                                        explore
                                        an entire new world for you and
                                        your
                                        pet!</p>
                                </div>
                                <div className="my-6 space-y-3">
                                    {/*  cta button section  */}
                                    <div>
                                        <Button variant="outline" className="w-full flex" onClick={loginByGoogle}>
                                            <FcGoogle className="h-5 w-5"/>
                                            <div className="text-center flex-1">
                                                Continue with Google
                                            </div>

                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="w-full" onClick={loginByFacebook}>
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
                                <div className="text-[12px] text-slate-500">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    By continuing you are agree to Tag-A-Tail's <a href="#" className="underline">Terms
                                    of
                                    Use</a>. Read our <a href="#" className="underline">Privacy Policy</a>
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

    return null;

}