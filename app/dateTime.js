import {DateTimePicker} from "@mui/x-date-pickers";

const DateTime = () => {
    return (
            <DateTimePicker label={"Time To Do"}     slotProps={{
                layout: {
                    sx: {
                        color: '#eaeaea',
                        borderRadius: '1rem',
                        border: '1px solid',
                        borderColor: '#d33ed3',
                        backgroundColor: 'oklch(0.466 0.203 301.215)',
                    }
                },
                field: {
                        sx:{
                            backgroundColor: '#697181',
                            textColor: 'primary',
                            color: 'primary',
                            borderRadius: '1rem',
                            height:"fit-content",
                            marginTop: '-0.4rem',


                    }
                },
                textField:{
                        color:"#3cd390",

                }
                }
            }  />
    )
};
export default DateTime;