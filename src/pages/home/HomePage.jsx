import {useSessionStorage} from "@uidotdev/usehooks";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProfileSetupPage from "@/pages/home/profile-setup/ProfileSetupPage.jsx";
import HomeFeedPage from "@/pages/home/home-feed/HomeFeedPage.jsx";
import {fetchForProfileStatus} from "@/lib/api.js";
import Loading from "@/components/utils/Loading.jsx";

export default function HomePage() {

    const [accessToken, saveAccessToken] = useSessionStorage('accessToken', null);
    const [profileStatus, setProfileStatus] = useSessionStorage('profileStatus', null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate('/auth');
        }
        // here will get the profile setup page
    }, [accessToken]);

    useEffect(() => {

        const checkIfProfileIsSetup = () => {
            if (profileStatus === null) {
                fetchForProfileStatus()
                    .then((response) => {
                        const data = response.data;
                        if (data && data.profile) {
                            const isSetup = data.profile.isProfileSetup ?? false;
                            if (!isSetup) {
                                setProfileStatus('SHOW_PROFILE_SETUP');
                            } else {
                                setProfileStatus('SHOW_HOME_FEED');
                            }
                        }
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 401) {
                            // react hot toast can be used here
                            saveAccessToken(null);
                            // navigate('/auth');
                        }
                    })
                    .finally(() => setLoading(false));
            } else {
                setLoading(false);
            }
        }

        checkIfProfileIsSetup();

    }, [accessToken, profileStatus]);

    if (accessToken) {
        if (!loading) {
            if (profileStatus === 'SHOW_PROFILE_SETUP') {
                return <ProfileSetupPage/>
            }
            if (profileStatus === 'SHOW_HOME_FEED')
                return <HomeFeedPage/>
        }
        return <Loading/>
    }

    return null;

}