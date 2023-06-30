import styled from "@emotion/styled";
import SettingCard from "../components/SettingCard";
import { FaRegBell, FaRegCreditCard, FaRegQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { RiShieldKeyholeLine } from "react-icons/ri"
import { HiOutlineBriefcase, HiOutlineGift } from "react-icons/hi";
import { BsShieldX } from "react-icons/bs";


const SettingsContainer = styled("div")({
    margin: 64,
    display: "grid",
    justifyContent: "space-around"
})
const SettingsHeader = styled("h1")({
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: 64,
    marginBottom: 50
})

const SettingsGrid = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto",
    gridGap: 90
})

const SettingsPage = () => {
    return (
        <SettingsContainer>
            <SettingsHeader>Settings</SettingsHeader>
            <SettingsGrid>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Login & Security" 
                settingDescription="Update your password and secure your account">
                    <RiShieldKeyholeLine color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Payment Methods" 
                settingDescription="Review payments, payouts, coupons, gift cards and taxes">
                    <FaRegCreditCard color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Notifications" 
                settingDescription="Choose notification preferences and how you want to be contacted">
                    <FaRegBell color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Privacy and Sharing" 
                settingDescription="Control connected apps, what you share and who sees it">
                    <BsShieldX color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Global Preferences" 
                settingDescription="Set your default language, currency, and timezone">
                    <FaEarthAfrica color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Business" 
                settingDescription="Add a work email for trip benefits">
                    <HiOutlineBriefcase color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Get Help" 
                settingDescription="Contact support for any issues">
                    <FaRegQuestionCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Referrals & Credits" 
                settingDescription="You have $0 referral credits and coupons. Learn more.">
                    <HiOutlineGift color="6f6e6e" size={56}/>
                </SettingCard>
            </SettingsGrid>
        </SettingsContainer>
    )
}

export default SettingsPage;