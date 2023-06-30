import styled from "@emotion/styled"

const OptionContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: 356,
    height: 172,
    borderColor: "#090909",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 16
})

const OptionHeader = styled("h5")({
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 26
})

const OptionSubHeader = styled("h6")({
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 16
})

const SettingBox = ({ children, settingName, settingDescription }) => {
    return (
        <OptionContainer>
            {children}
            <OptionHeader>{settingName}</OptionHeader>
            <OptionSubHeader>{settingDescription}</OptionSubHeader>
        </OptionContainer>
    )
}

export default SettingBox;