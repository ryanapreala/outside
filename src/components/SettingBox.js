import styled from "@emotion/styled"

const OptionContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
})

const OptionHeader = styled("h5")({

})

const OptionSubHeader = styled("h6")({
    
})

const SettingBox = ({ children }) => {

    return (
        <OptionContainer>
            {children}
        </OptionContainer>
    )
}