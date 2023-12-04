import React from "react";
import Container from "../container";

const Content = () => {
  return (
    <section className="mt-20">
      <Container className="flex mb-20">
        <div class="flex w-full gap-12">
          <aside class="h-screen sticky top-24 w-[28%] border-r">
            <ul className="">
              {
                sideTitle?.map((item,idx)=>(
                  <li className="font-semibold py-2 capitalize cursor-pointer hover:text-primary" key={idx}><span className="font-normal mr-1">{idx+1}.</span> {item.title}</li>
                ))
              }
            </ul>
          </aside>

          <main className=" flex-1 ">
            
          </main>
        </div>
      </Container>
    </section>
  );
};

export default Content;




const sideTitle = [
  {
    title: "money for your business?",
    tag: ""
  },
  {
    title: "Fast business loans",
    tag: ""
  },
  {
    title: "Realize your dream",
    tag: ""
  },
  {
    title: "Expand The Business",
    tag: ""
  },
  {
    title: "Interest on business loans",
    tag: ""
  },
]