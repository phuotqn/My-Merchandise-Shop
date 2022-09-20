import img from '../assets/images/img_550774.png';
export default function Footer() {
  return (
    <footer className="bg-black text-white  ">
      <div className="grid grid-cols-4  gap-[30px] p-[30px] flex">
        <img
          src={img}
          alt="logo"
          className="w-[40%] bg-white rounded-xl justify-center"
        />
        <p className="text-center">Fake Shop</p>
      </div>
      <div>
        <h1 className="text-center">Fake Shop </h1>
      </div>
    </footer>
  );
}
