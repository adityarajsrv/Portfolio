const Navbar = () => {
  return (
    <div className="px-15 py-5 flex flex-row justify-between items-center text-gray-500 font-mono">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-cyan-500"><pre>&lt;/aditya&gt;</pre></h1>
        <div className="flex flex-row justify-evenly items-center space-x-5 text-lg">
            <a href="" className="cursor-pointer hover:text-cyan-500 hover:bg-[#191e26] px-2 py-1">/about</a>            
            <a href="" className="cursor-pointer hover:text-cyan-500 hover:bg-[#191e26] px-2 py-1">/stack</a>
            <a href="" className="cursor-pointer hover:text-cyan-500 hover:bg-[#191e26] px-2 py-1">/projects</a>
            <a href="" className="cursor-pointer hover:text-cyan-500 hover:bg-[#191e26] px-2 py-1">/contact</a>            
        </div>
    </div>
  )
}

export default Navbar