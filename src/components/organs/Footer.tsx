import { Image } from "../atoms/Image"
import logo from "../../assets/TravelliLogo.png"
import { Text } from "../atoms/Text"
import { appLinks, FooterTexts, socialMedia, TRAVELER } from "../particles/DataLists"
import { List } from "../atoms/List"
import { Link } from "react-router-dom"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png"

interface FooterProps {
    userType: number;
}

const Footer = ({ userType } : FooterProps) => {
    return (
        <footer className="w-full flex flex-col bg-white">
            <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
                <div className="flex flex-col items-start gap-4">
                    <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
                    <Text className="text-sm text-color4 lg:ml-2" as="p">
                        {userType === TRAVELER ? FooterTexts.underLogoText : FooterTexts.underLogoTravelText}
                    </Text>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.quickLinks.caption}
                    </Text>
                    <ul className="flex flex-col gap-2">
                        {
                            FooterTexts.quickLinks.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.contacts.caption}
                    </Text>
                    <ul className="flex flex-col md:ml-12 gap-2">
                        {
                            FooterTexts.contacts.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col lg:items-start gap-4 md:mt-8">
                    <Text className="text-xl text-color3 justify-start lg:ml-10" as="h2">
                        {FooterTexts.more.caption}
                    </Text>
                    <ul className="flex flex-col gap-2 lg:ml-10">
                        {
                            FooterTexts.more.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
                    <ul className="w-full flex items-center lg:justify-center gap-4">
                        <List>
                            <Link to={socialMedia.facebook} className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <FacebookLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                        <List>
                            <Link to={socialMedia.instagram} className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <InstagramLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                    </ul>

                    <Text as="p" className="text-base font-light text-color4">
                        Descubre nuestra App
                    </Text>
                    <Image as="a" href={appLinks.playStore} className="w-28" image={GooglePlay} alt="GooglePlayLogo" />
                    <Image as="a" href={appLinks.appStore} className="w-28" image={AppStore} alt="AppStoreLogo" />
                </div>
            </section>
            <Text className="text-center bg-color4 text-white text-xs py-6 font-light">
                Copyright {new Date().getFullYear()}. Travelli. Hecho con ❤️ en Venezuela
            </Text>
        </footer>
    )
}

export default Footer