import { createTheme } from '@mui/material/styles'

const newTheme = (theme) => createTheme({
    ...theme,
    components: {
        MuiPickersToolbar: {
            styleOverrides: {
                root: {
                    color: '#f8bbd0',
                    borderRadius: '12px',
                    borderWidth: '1px',
                    borderColor: '#e91e63',
                    border: '1px solid',
                    backgroundColor: '#880e4f',
                }
            }
        }
    }
})
export default newTheme;
