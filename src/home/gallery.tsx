export default function Gallery() {
  const list = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10',
    'img11',
    'img12',
    'img13',
    'img14',
    'img15',
    'img16',
    'img17',
    'img18',
    'img19',
    'img20',
  ];
  return (
    <>
      <section className="py-6">
        <div className="w-full flex justify-center">
          <h1 className="m-8 text-6xl text-gray-500 font-bold">
            We <span className="text-red-500">smile</span>
          </h1>
        </div>
        <div className="h-[80vh] cusscroll flex w-full snap-y carousel-center snap-mandatory overflow-auto overflow-y-hidden overflow-x-visible">
          {list.map((e) => (
            <div className="carousel-item h-full" key={e}>
              <img src={`/img/${e}.jpg`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
