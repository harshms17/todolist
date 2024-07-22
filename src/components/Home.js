import React, { useEffect, useState } from "react";
import "./Home.css";
import dlticon from './dlt.png'

function Home() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState(()=>{
    const lists = localStorage.getItem("lists")
    return lists ? JSON.parse(lists) : [];
  });
  useEffect(()=>{
    localStorage.setItem('lists', JSON.stringify(list));
  },[list])
  useEffect(() => {
    const mylist = document.querySelector(".list");
    if (list.length === 0) {
      mylist.innerHTML = "<h1>Add Some Tasks to Show up here...</h1>";
    } else {
      mylist.innerHTML = "";
      list.forEach((item,index) => {
        const fdiv = document.createElement("div");
        fdiv.className =
          "relative overflow-hidden flex h-[fit-content] mb-5 w-full rounded-3xl border-4 py-5 bg-blue-900/[0.1] transition-all duration-300 border-white/75 hover:scale-105";
        mylist.appendChild(fdiv);

        const sdiv1 = document.createElement("div");
        sdiv1.className = "w-[30%] font-extrabold text-2xl border-r-2 px-5";
        sdiv1.textContent = item.mytask;
        fdiv.appendChild(sdiv1);

        const sdiv2 = document.createElement("div");
        sdiv2.className =
          "srll w-[60%] border-r-2 italic overflow-auto text-blue-500 text-xl px-5";
        sdiv2.textContent = item.mydesc;
        fdiv.appendChild(sdiv2);

        const sdiv3 = document.createElement("div");
        sdiv3.className = "px-5 flex justify-between items-center";
        fdiv.appendChild(sdiv3);
        const btns = document.createElement("button");
        btns.onclick = () => {
          btns.style.transform = "scale(1.3)";
          btns.style.backgroundColor = "gray";
          const intv = setInterval(() => {
            btns.style.transform = "";
            btns.style.backgroundColor = "red";
          }, 450);
          fdiv.style.width='0px'
          setTimeout(() => {
            clearInterval(intv);
            setList((prevList) => {
              return prevList.filter((_, i) => i !== index);
            });
          }, 500);
        };
        btns.className=`transition-all duration-300 p-2 h-[fit-content] rounded flex gap-2 bg-[red] hover:scale-125 hover:bg-[gray]`
        btns.textContent='Delete '
        const imgd = document.createElement('img');
        imgd.setAttribute('src',dlticon);
        imgd.className='w-6 h-6'
        btns.appendChild(imgd)
        sdiv3.appendChild(btns);
      });
    }
  }, [list]);
  return (
    <div className={`bck flex flex-col overflow-y-auto bg-[rgba(11, 1, 34, 0.306)] pt-10`}>
      <form
        onSubmit={(d) => {
          d.preventDefault();
        }}
        className="mb-5 place-self-center"
      >
        <div className="fst flex flex-row">
          <div className="snd flex flex-row">
            <div className="flex items-center mb-3">
              <h1 className="w-32 text-3xl mr-5 font-extrabold">Task </h1>
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document.querySelector(".btn1").click();
                  }
                }}
                className="taskc mr-10 w-[22vw] text-black font-bold text-2xl border-[3px] border-blue-800 bg-blue-100 rounded p-2"
                placeholder="Enter Task here"
                value={task}
                onChange={(e) => {
                  setTask(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  );
                }}
              />
            </div>
            <div className="flex items-center">
              <h1 className="w-32 text-2xl mr-5 font-bold">Description</h1>
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document.querySelector(".btn1").click();
                  }
                }}
                className="mr-10 w-[40vw] descc text-black text-xl border-[3px] border-blue-800 bg-blue-100 rounded p-2"
                placeholder="Enter Description here"
                value={desc}
                onChange={(e) => {
                  setDesc(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  );
                }}
              />
            </div>
          </div>
          <button
            onClick={() => {
              if (task !== "" || desc !== "") {
                document.querySelector(".btn1").style.transform =
                  "rotate(5deg) scale(1.3)";
                document.querySelector(".btn1").style.backgroundColor = "black";
                const intv = setInterval(() => {
                  document.querySelector(".btn1").style.transform = "";
                  document.querySelector(".btn1").style.backgroundColor =
                    "blue";
                }, 450);
                setTimeout(() => {
                  clearInterval(intv);
                }, 1000);
                setList([{ mytask: task, mydesc: desc },...list]);
                setTask("");
                setDesc("");
              }
            }}
            onMouseOver={() => {
              document.querySelector(".btn1").style.backgroundColor = "orange";
            }}
            onMouseOut={() => {
              document.querySelector(".btn1").style.backgroundColor = "";
            }}
            className="btn1 w-[fit-content] my-5 text-nowrap text-white font-bold text-xl bg-[blue] border-2 border-white/75 rounded px-5 py-2 relative transition-all duration-300"
          >
            Add Task
          </button>
        </div>
      </form>
      <div className="list h-[55vh] px-10 py-2 mx-2 overflow-x-visible overflow-y-scroll"></div>
      <button className="btn3 px-6 py-2 place-self-center my-4 border-2 text-xl font-bold border-green-500 bg-orange-600 transition-all duration-300 rounded hover:bg-green-700 hover:rounded-xl" onClick={()=>{
        document.querySelector('.btn3').style.transform = "scale(1.1)"
        document.querySelector('.btn3').style.backgroundColor = "black"
        document.querySelector('.btn3').style.color = "red"
        setTimeout(()=>{
          document.querySelector('.btn3').style.transform = ""
          document.querySelector('.btn3').style.backgroundColor = ""
          document.querySelector('.btn3').style.color = ""
        },500)
        setList([])
      }}>Clear All</button>
    </div>
  );
}

export default Home;
