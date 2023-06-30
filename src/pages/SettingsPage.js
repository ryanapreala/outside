import styled from "@emotion/styled";
import SettingCard from "../components/SettingCard";
import { FaRegUserCircle } from "react-icons/fa";

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
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
                <SettingCard 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingCard>
            </SettingsGrid>
        </SettingsContainer>
    )
}

export default SettingsPage;