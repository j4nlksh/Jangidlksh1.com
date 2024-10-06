import profImage from "../assets/profImage.jpeg"
import Bio from "./Bio";

function Navbar() {
    return (
        <>
            <header className=" flex font-nav text-lg font-semibold ">
                <div className="bg-black h-10 text-white w-[685px] px-3 my-4 mx-4 flex-row rounded-xl space-x-6 content-center text-center ">
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="Home" target="_blank">Home</a>
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="About" target="_blank">About</a>
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="Works" target="_blank">Works</a>
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="Writings" target="_blank">Writings</a>
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="Timeline" target="_blank">Timeline</a>
                    <a className="bg-black gap-1 p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="Guestbook" target="_blank">Guestbook</a>
                    <a className="bg-black v p-1 rounded-md hover:bg-navbg hover:font-normal" href="#" alt="shelf" target="_blank">Shelf</a>
                </div>
            </header>
            <header className="flex mx-4 justify-end gap-3 items-center w-[685px]">
                <div className=" justify-center flex items-center">
                    <img alt="" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" class="rounded-full" src={profImage} />
                </div>
                <div className="md:w-full lg:w-full col-span-2">
                    <div className="flex items-center gap-0.5">
                        <h1 className="font-bold text-4xl">
                            <span className="text-red-700">Lakshya</span> Jangid🕸
                        </h1>
                    </div>
                    <ul className="list-inside">
                        <li className="tracking-tight">
                            <span className="font-bold italic">Creative Writer, React Js Developer, Freelancer &amp; UI Designer</span>
                        </li>
                    </ul>
                </div>
            </header>
            <Bio/>



        </>
    );
}

export default Navbar;