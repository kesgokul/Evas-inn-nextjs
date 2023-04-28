export default function Hero() {
  return (
    <main className="px-2 md:px-12 min-h-screen max-w-full flex flex-wrap justify-between items-center bg-dog-1 bg-cover bg-right-bottom">
      <div className=" w-full max-w-md shrink-0  flex flex-col gap-4">
        <h1 className="text-yellow-500 text-4xl md:text-6xl font-bold uppercase tracking-wider">
          dog
        </h1>
        <h2 className="text-white font-mono text-xl md:text-2xl">
          Boarding facility
        </h2>
        <p className="text-white tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          vitae reprehenderit deserunt eligendi dolor accusamus assumenda
          placeat repellendus ab optio!
        </p>
        <button className=" py-3 px-10 bg-gray-50 text-gray-600 self-start">
          Board now
        </button>
      </div>
      {/* <figure className=" grow h-2/3-screen  mx-auto basis-96 shrink-0 bg-nemo-black bg-contain bg-black bg-blend-darken bg-opacity-30    "></figure> */}
    </main>
  );
}
