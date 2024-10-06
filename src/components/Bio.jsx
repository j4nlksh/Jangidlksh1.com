function Bio() {
    return (
        <>
            <div className="mt-3 mx-4" >
                <ul className="list-inside space-y-1 tracking-tight">
                    <li>
                        <span className="mr-2">👨‍💻</span>I'm <span className="font-bold ">Lakshya Jangid,</span> a 19 year-old junior student.
                    </li>

                    {/* , part time cook and a lover of all things tech. */}

                    <li>
                        <span className="mr-2">⚒️</span>A self taught {" "}
                        <span className="font-bold ">programmer</span>, part time{" "}
                        <span className="font-bold ">cook </span>with {" "}
                        <span className="font-bold ">JavaScript</span>.
                    </li>
                    <li>
                        <span className="mr-2">🏡</span>Open to opportunities and freelancing gigs.
                    </li>
                    <li>
                        <span className="mr-2">⚽</span>Also into{" "}
                        <span className="font-bold italic text-blue-700">Football.</span>
                    </li>
                    <li className="italic font-semibold">Hala Madrid y Nada Mas 🤍!</li>
                </ul>
            </div>;

        </>
    )
}

export default Bio