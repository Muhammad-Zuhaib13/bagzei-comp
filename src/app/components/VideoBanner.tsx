import Link from "next/link"
import ScreenContainer from "./ScreenContainer"
const VideoBanner = () => {
    return (
        <div className='w-full lg:h-[658px] md:h-[600px] h-[800px] relative'>
            <video
                src={'/assets/videos/bagei-home-banner-video.mp4'}
                className="h-full w-full object-cover absolute inset-0"
                autoPlay={true}
                playsInline
                muted
                loop={true}
                preload="auto"
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
            />
            <ScreenContainer element="section" className="relative z-10">
                <div className="flex flex-col text-primary-1">
                    <h1 className="font-banner-title-50 font-ChronicleDisplay">Meet the Mosaic Cabas</h1>
                    <p className="font-banner-text-18 font-Akkurat">Our new tote designed for everything the day holds.</p>
                    <Link className="font-banner-link-18 font-Akkurat uppercase font-medium " href='/#'>EXPLORE THE COLLECTION</Link>
                </div>
            </ScreenContainer>
        </div>
    )
}

export default VideoBanner