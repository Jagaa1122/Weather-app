export default function Circles() {
  return (
    <div className="ring6 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] border border-solid border-[#fff] rounded-[50%]">
      <div className="ring5 border border-solid border-[#fff] rounded-[50%] m-[100px] ">
        <div className="ring4 border border-solid border-[#fff] rounded-[50%] m-[100px] ">
          <div className="ring3 border border-solid border-[#fff] rounded-[50%] m-[100px] ">
            <div className="ring2 border border-solid border-[#fff] rounded-[50%] m-[70px] ">
              <div className="relative ring1 flex item-center justify-center border border-solid border-[#fff] rounded-[50%] w-[128px] h-[128px] m-[70px] bg-[#f3f4f6]">
                <img src="logo.svg" alt="" className="w-[50px]" />
                <div className="absolute z-10 left-[50%] top-[-31px]">
                 <img className="w-[50px] h-[49px]" src="top.png" alt="" />

                </div>
                <div className="absolute z-10 left-[50%] bottom-[-31px]">
                  <img className="w-[50px] h-[49px]" src="bottom.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
