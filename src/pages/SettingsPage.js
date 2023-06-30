import styled from "@emotion/styled";
import SettingBox from "../components/SettingBox";
import { FaRegUserCircle } from "react-icons/fa";

const SettingsContainer = styled("div")({
    margin: 64,
    display: "flex",
    flexDirection: "column",
})
const SettingsHeader = styled("h1")({
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: 64,
    
})

const SettingsGrid = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto"
})

const SettingsPage = () => {
    return (
        <SettingsContainer>
            <SettingsHeader>Settings</SettingsHeader>
            <SettingsGrid>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
                <SettingBox 
                settingName="Personal Information" 
                settingDescription="Provide personal details and how we can reach you">
                    <FaRegUserCircle color="6f6e6e" size={56}/>
                </SettingBox>
            </SettingsGrid>
        </SettingsContainer>
    )
}

export default SettingsPage;