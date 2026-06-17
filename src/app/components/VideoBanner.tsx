import Link from "next/link"
import ScreenContainer from "./ScreenContainer"
const VideoBanner = () => {
    return (
        <div className='w-full lg:h-[658px] md:h-[600px] h-[800px] relative lg:pb-[70px] md:pb-[40px] pb-[60px]'>

            <video
                src={'/assets/videos/bagei-home-banner-video.mp4'}
                className="h-full w-full object-cover absolute inset-0 "
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
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 55.48%, rgba(0, 0, 0, 0.8) 100%)'
                }}
            />
            <ScreenContainer element="section" className="relative z-10 flex flex-col justify-end">
                <div className="flex flex-col lg:gap-[16px] md:gap-[24px] gap-[24px] text-primary-1">
                    <h1 className="font-banner-title-50 font-ChronicleDisplay">Meet the Mosaic Cabas</h1>
                    <p className="font-banner-text-18 font-Akkurat md:w-fit w-[241px] ">Our new tote designed for everything the day holds.</p>
                    <Link className="font-banner-link-18 font-Akkurat uppercase font-medium underline underline-offset-3 " href='/#'>EXPLORE THE COLLECTION</Link>
                </div>
            </ScreenContainer>
        </div>
    )
}

export default VideoBanner