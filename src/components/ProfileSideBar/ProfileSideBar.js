import Box from "../Box";

function ProfileSideBar() {
    const githubUser = 'tiagomartins-01';

        return (
        <Box>
            <img src={`https://github.com/${githubUser}.png`} style={{borderRadius: '8px'}} />
        </Box>
        )
    }

export default ProfileSideBar;