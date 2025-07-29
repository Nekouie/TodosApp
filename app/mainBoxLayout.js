import * as motion from "motion/react-client";

const MainBoxLayout = ({children}) => {
    return (
        <>
            <div className={"flex flex-col justify-center items-center h-10/12 mt-15 w-2/4 min-w-xs" +
                " min-h-xs "}>
                <motion.div className={"bg-gray-800 w-full relative h-full justify-around" +
                    " flex" +
                    " flex-col" +
                    " items-center" +
                    " shadow-md shadow-purple-500" +
                    " rounded-lg "}
                            initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                            transition={{duration: .4}}>
                    <div className={"text-center rounded-t-lg backdrop-opacity-100 text-violet-400" +
                        " text-shadow-black" +
                        " font-bold" +
                        " text-2xl/15" +
                        " bg-gray-700" +
                        " border-b-4 border-purple-600" +
                        " w-full h-1/8 absolute top-0.5"}>
                        <p>TODOS MACHINE</p>
                    </div>
                    <div className={"h-5/6 absolute  top-18 w-11/12 rounded-2xl flex" +
                        " justify-center items-center"}>
                        {children}
                    </div>
                </motion.div>

            </div>
        </>
    )
}
export default MainBoxLayout;