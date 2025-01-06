export default function Circles() {
  return (
    <div>
      <div className="">
        <div className="w-1340px h-1340px rounded-full border-1px border-[#ffffff]"></div>
        <img
          className="w-[128px] h-[128px] absolute left-[100px] top-[100px]"
          src="sun.svg"
          alt=""
        />
        <img
          className="w-[128px] h-[128px] absolute right-[100px] bottom-[100px]"
          src="moon.svg"
          alt=""
        />
      </div>
    </div>
  );
}
