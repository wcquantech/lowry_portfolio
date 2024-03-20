const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 w-60 mx-auto sm:w-96">
        <div className="flex gap-1 font-bold sm:hidden">
          <span className="material-symbols-outlined">email</span>
          <p>wcwong9898@outlook.com</p>
        </div>
        <div className="flex gap-1 font-bold sm:hidden">
          <span className="material-symbols-outlined">phone</span>
          <p>9535 6623</p>
        </div>
        <div className="hidden sm:flex sm:gap-2">
          <div className="flex gap-1 font-bold">
            <span className="material-symbols-outlined">email</span>
            <p>wcwong9898@outlook.com</p>
          </div>
          <div className="flex gap-1 font-bold">
            <span className="material-symbols-outlined">phone</span>
            <p>9535 6623</p>
          </div>
        </div>
        <p className="text-center text-slate-400 text-sm mt-3">Designed and Built by Lowry Wong</p>
        <p className="text-center text-slate-400 text-sm">Copyright © 2024</p>
      </div>
    </div>
  )
};

export default Footer;