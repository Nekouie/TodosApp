"use client";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const AccordionList = () => {
    return (
        <>
            <div className="w-full rounded-4xl border- bg-gray-700">
                <Accordion slotProps={{transition: {unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary className={"pointer-events-auto"}
                                      sx={{backgroundColor: "#154c56", mb: "0.2rem"}}>
                        <input  type={"checkbox"}  name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "} />
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"} />
                    </AccordionSummary>

                    <AccordionDetails className="bg-gray-500 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aperiam aut cupiditate, dolor eligendi facere nam quas soluta voluptas
                        voluptatem.
                    </AccordionDetails>

                </Accordion>
                <Accordion slotProps={{transition: {unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary className={"pointer-events-auto"}
                                      sx={{backgroundColor: "#154c56", mb: "0.2rem"}}>
                        <input  type={"checkbox"}  name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "} />
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"} />
                    </AccordionSummary>

                    <AccordionDetails className="bg-gray-500 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aperiam aut cupiditate, dolor eligendi facere nam quas soluta voluptas
                        voluptatem.
                    </AccordionDetails>

                </Accordion>
                <Accordion slotProps={{transition: {unmountOnExit: true}}}
                           sx={{backgroundColor: "#1e2939"}}>

                    <AccordionSummary className={"pointer-events-auto"}
                                      sx={{backgroundColor: "#154c56", mb: "0.2rem"}}>
                        <input  type={"checkbox"}  name={"title1"} className={"absolute" +
                            " left-3 rounded-4xl z-10 "}
                        onClick={(e) => e.preventDefault()}/>
                        <Typography variant={"h5"} className="ps-10">
                            Title 1
                        </Typography>
                        <ClearIcon className={"absolute right-3"} />
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