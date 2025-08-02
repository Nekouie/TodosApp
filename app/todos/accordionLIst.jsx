
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const AccordionList = () => {
    return (
        <>
            <div className="w-full rounded-4xl bg-gray-700">
                <Accordion className={"transform transition hover:scale-98 duration-1000"}
                           slotProps={{transition:{unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary
                        sx={{
                            backgroundColor: "#163f48",
                            mb: "0.2rem",
                            transitionDuration: "0.7s",
                            ":hover": {backgroundColor: "#1c5564"}}}>
                        <input type={"checkbox"} name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "}/>
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"}/>
                    </AccordionSummary>

                    <AccordionDetails className="bg-gray-500 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aperiam aut cupiditate, dolor eligendi facere nam quas soluta voluptas
                        voluptatem.
                    </AccordionDetails>

                </Accordion>
                <Accordion className={"transition hover:scale-98"}
                           slotProps={{transition: {unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary
                        className={"transition"}
                        sx={{
                            backgroundColor: "#163f48",
                            mb: "0.2rem",
                            transitionDuration: "0.5s",
                            ":hover": {backgroundColor: "#1c5564"}}}>
                        <input type={"checkbox"} name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "}/>
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"}/>
                    </AccordionSummary>

                    <AccordionDetails className="bg-gray-500 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aperiam aut cupiditate, dolor eligendi facere nam quas soluta voluptas
                        voluptatem.
                    </AccordionDetails>

                </Accordion>
                <Accordion className={"transition hover:scale-98"}
                           slotProps={{transition: {unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary
                        className={"transition"}
                        sx={{
                            backgroundColor: "#163f48",
                            mb: "0.2rem",
                            transitionDuration: "0.5s",
                            ":hover": {backgroundColor: "#1c5564"}}}>
                        <input type={"checkbox"} name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "}/>
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"}/>
                    </AccordionSummary>

                    <AccordionDetails className="bg-gray-500 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aperiam aut cupiditate, dolor eligendi facere nam quas soluta voluptas
                        voluptatem.
                    </AccordionDetails>

                </Accordion>


            </div>
        </>
    )
}

export default AccordionList;