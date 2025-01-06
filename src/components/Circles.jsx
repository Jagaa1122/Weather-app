export default function Circles() {
  return (
    <div className="ring6 absolute z-10 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] border border-solid border-[#8080802f] rounded-[50%]">
      <div className="ring5 border border-solid border-[#8080802f] rounded-[50%] m-[100px] ">
        <div className="ring4 border border-solid border-[#8080802f] rounded-[50%] m-[100px] ">
          <div className="ring3 border border-solid border-[#8080802f] rounded-[50%] m-[100px] ">
            <div className="ring2 border border-solid border-[#8080802f] rounded-[50%] m-[50px] ">
              <div className="ring1 flex item-center justify-center border border-solid border-[#8080802f] rounded-[50%] w-[70px] h-[70px] m-[50px] bg-[#f3f4f6]">
                <img src="logo.svg" alt="" className="w-[50px]"/>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
