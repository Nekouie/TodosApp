import Link from "next/link";
import AccordionList from "./accordionLIst"

const TodosList = () => {

    return (
        <>
            <div className="flex items-center justify-center text-3xl">
                <div className={"w-full flex justify-center items-center bg-gray-600 absolute" +
                    " top-2" +
                    " h-1/9 rounded-2xl"}>
                    <p>Todos List </p>
                </div>
                <div className={"w-full flex flex-col justify-start overflow-y-auto bg-gray-700" +
                    " content-start absolute " +
                    " items-center" +
                    " h-6/9 rounded-2xl"}>
                    <AccordionList/>
                </div>
                <Link className={"w-3/4 bg-gray-600 h-1/7 justify-center text-3xl flex" +
                    " items-center rounded-2xl transition duration-500 hover:scale-95" +
                    " hover:bg-purple-800" +
                    " absolute bottom-0 "} href="/addTodo">
                    Add Todo
                </Link>

            </div>
        </>
    )
}

export default TodosList;