import img from '../assets/images/img_550774.png';
export default function Footer() {
  return (
    <footer className="grid w-auto items-center border-y-[2px] m-auto mt-[26px] border-x-gray-500 lg:bg-white lg:text-black lg:border-y-[2px] lg:m-auto lg:mt-[26px] lg:border-x-gray-500 lg:w-[1329px] lg:min-w-[1329px] ">
      <div className="grid grid-cols-4 items-center justify-center md:grid grid-cols-4 md:gap-[30px] md:p-[30px] ">
        <img
          src={img}
          alt="logo"
          className="w-[30%] border-[5px] ml-[2px] p-[2px] border-black bg-white rounded-xl justify-center"
        />
        <div className="text-center font-mono">
          <h1 className="text-[20px] font-bold">About Us</h1>
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Product
          </a>
          <a href="#" className="block">
            Price
          </a>
        </div>
        <div className="text-center font-mono">
          <h1 className="text-[20px] font-bold">Follow</h1>
          <a href="#" className="block">
            Instagram
          </a>
          <a href="#" className="block">
            Facebook
          </a>
          <a href="#" className="block">
            Tiktok
          </a>
        </div>
        <div className="text-center font-mono">
          <h1 className="text-[20px] font-bold">Legal</h1>
          <a href="#" className="block">
            Terms
          </a>
          <a href="#" className="block">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
