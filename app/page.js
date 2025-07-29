import Link from "next/link";

const page = () => {


    return (
        <>
            <div className={"h-full flex flex-col items-center justify-around "}>
                <h1 className={"text-5xl text-purple-500"}>welcome to Todos App</h1>
                    <Link className={"w-3/4 bg-gray-600 h-1/5 justify-center text-3xl flex" +
                        " items-center transition hover:scale-95 bg-purple-900 rounded-2xl"} href="/todos">
                        Todos List
                    </Link>
                    <Link className={"w-3/4 bg-gray-600 h-1/5 justify-center text-3xl flex" +
                        " items-center transition hover:scale-95 bg-purple-900 rounded-2xl"} href="/addTodo">
                        Add Todo
                    </Link>
            </div>
        </>
    )
}

export default page;