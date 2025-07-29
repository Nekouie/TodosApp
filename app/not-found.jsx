import Link from "next/link";

const error404 = () => {
    return (
        <>
        <div className={"w-full h-full text-center flex flex-col justify-around items-center"}>
            <p className={"text-[3rem]"}>invalid page</p>
            <Link className={"w-3/4 bg-gray-600 h-1/5 mb-60 justify-center text-3xl flex" +
                " items-center rounded-2xl transition hover:scale-95 hover:bg-purple-900"} href="/addTodo">
                Todo List
            </Link>
        </div>
        </>
    )
}

export default error404;