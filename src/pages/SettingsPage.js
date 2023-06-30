import styled from "@emotion/styled";

const SettingsContainer = styled("div")({
    margin: 64,
    display: "flex",
    flexDirection: "column",
})
const SettingsHeader = styled("h1")({
    fontFamily: "Open Sans",
    fontWeight: 800,
    
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

            </SettingsGrid>
        </SettingsContainer>
    )
}

export default SettingsPage;