import { useState } from "react"
import React from "react";
import { TypeAnimation } from "react-type-animation";

function App() {
  let defaultColor='#212121';
  const [color,setColor]=useState(defaultColor)

  return (
    <div className="flex flex-col w-full h-screen duration-200 justify-center items-center" style={{backgroundColor:color}}>
      <h1 className=" bg-green-400 p-4 rounded-xl text-3xl">Lets change the color</h1>
      <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
                        I'm
                        <TypeAnimation
                            sequence={[  
                                "an Engineer",
                                1000,
                                "a Tech Enthusiast",
                                1000,
                                "a Develepor",
                                1000,
                                "a Programmer",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: "1em", paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
      </h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg p-3 rounded-2xl" style={{backgroundColor:'wheat'}}>
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{background:"red"}}>Red</button>

          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full" style={{background:"yellow"}}>Yellow</button>

          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white" style={{background:"blue"}}>Blue</button>

          <button onClick={()=>setColor('pink')} className="outline-none px-4 py-1 rounded-full" style={{background:"pink"}}>Pink</button>

          <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full text-white" style={{background:"green"}}>Green</button>

          <button onClick={()=>setColor(defaultColor)} className="outline-none px-4 py-1 rounded-full" style={{background:"white"}}>Default</button>

        </div>
      </div>

    </div>
  )
}

export default App
