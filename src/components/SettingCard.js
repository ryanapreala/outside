import styled from "@emotion/styled"

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 356px;
    height: 172px;
    border-color: #090909;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    padding: 16px;
    cursor: pointer;
    background-color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #FDF2DB;
    }
`;

const OptionHeader = styled("span")({
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5
})

const OptionSubHeader = styled("span")({
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 16
})

const SettingCard = ({ children, settingName, settingDescription }) => {
    return (
        <OptionContainer>
            {children}
            <OptionHeader>{settingName}</OptionHeader>
            <OptionSubHeader>{settingDescription}</OptionSubHeader>
        </OptionContainer>
    )
}

export default SettingCard;