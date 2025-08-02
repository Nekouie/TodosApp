"use client"
import Link from "next/link";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import DateTime from "@/app/dateTime";


const AddTodo = () => {


    return (
        <>
            <div className={"w-full h-full" +
                " flex" +
                " flex-col" +
                " justify-around" +
                " items-center" +
                " text-black" +
                " text-lg/10 " +
                " text-center"}>
                <div className={"w-full flex flex-row justify-around mt-1 items-center h-1/12"}>
                    <input type="text" placeholder="Title" className={"w-6/12 bg-gray-500" +
                        " h-full rounded-2xl placeholder:p-2 placeholder:text-gray-300" +
                        " text-center outline-3" +
                        " focus:outline-pink-800" +
                        " outline-none" +
                        " focus:outline-pink-800"}/>
                    <select name="priority" className="bg-gray-500 rounded-2xl w-1/8 h-full
                    text-center " id="priority">
                        <option>Priority</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="w-1/3 h-full text-center text-white">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTime/>
                        </LocalizationProvider>
                    </div>
                </div>
                <div className={"flex relative justify-center w-full h-8/12"}>
                                            <textarea className={" w-full bg-gray-700 " +
                                                " focus:outline-purple-400 outline-2" +
                                                " outline-purple-600 " +
                                                " focus:outline-double" +
                                                "" +
                                                " rounded-xl resize-none" +
                                                " placeholder:text-gray-400 text-gray-400 text-left text-lg p-2"}
                                                      placeholder="What do you want to do?"/>
                    <button
                        className={"w-3/12  bg-gray-600 text-md rounded-md" +
                            " border-purple-800 bg-gray-600 active:bg-purple-500" +
                            " hover:bg-purple-600 hover:cursor-pointer text-gray-300 absolute bottom-2" +
                            " right-2 hover:bg-gray-700 transition hover:scale-95" +
                            " border-2"}

                    >
                        Add Todo
                    </button>
                </div>

                <div className={"flex justify-around w-full max-h-20 h-1/8"}>

                    <Link href={"../todos"} className={"border-2 flex justify-center" +
                        " items-center rounded-md" +
                        " text-gray-300" +
                        " w-5/12" +
                        "" +
                        " bg-gray-600 text-md rounded-md" +
                        " border-purple-800 bg-gray-600 active:bg-purple-500" +
                        " hover:bg-purple-800 hover:cursor-pointer transition hover:scale-95" +
                        " border-2"}>
                        Other Todo
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AddTodo;