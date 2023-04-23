import {useTheme, useThemeUpdate} from "./ThemeContext"
const HookUseContext = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const styleTheme = {
        background: darkTheme ? "red" : "gray",
        color: darkTheme ? "gray" : "red",
        padding:"2rem"
        
    }
    
    return (
        <>
        <button onClick={toggleTheme}>Toggle</button>
            <div style={styleTheme}>function Toggle</div>
            </>
    )
}

export default HookUseContext;