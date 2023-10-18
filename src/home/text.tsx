import { HeartIcon } from '@heroicons/react/24/solid';

export default function Text() {
  const data = [
    {
      title: 'Yêu em bé của anh',
      event_time: '14/2/2023',
      html_content:
        "Trước khi gặp em, anh có xem 1 bộ phim, tên nó là 'How I met your mother?'. Hôm nay anh nghe lại tên phim và anh nghĩ: Sau này mà có con, anh sẽ kể với nó, bố đã gặp mẹ con trong mục tin nhắn chờ! Chúc em bé của anh ngày 14/2 năm nay và nhiều năm sau nữa vẫn hạnh phúc ở cạnh anh.",
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-fit w-fit flex flex-col justify-center items-center rounded-md p-16">
        <div className="w-full flex justify-center">
          <h1 className="m-8 text-6xl text-gray-200 font-bold">
            We <span className="text-red-500">remember</span>
          </h1>
        </div>
        <section className="text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 grid-cols-12">
              <div className="col-span-12 hidden md:flex md:pl-8 md:col-span-3">
                <div className="text-center text-left mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto before:mx-0 before:bg-gray-100">
                  <h3 className="text-6xl font-semibold">
                    <span className="flex">
                      <HeartIcon
                        className="text-red-400 h-20 w-20 animate-ping absolute"
                        aria-hidden="true"
                      />
                      <HeartIcon
                        className="text-red-600 h-20 w-20"
                        aria-hidden="true"
                      />
                    </span>
                  </h3>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 md:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-100">
                  {data.map((param, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col relative before:absolute before:w-4 before:h-4 before:mask before:mask-heart before:left-[-35px] before:z-[1] before:bg-red-500"
                      >
                        <h3 className="text-2xl font-semibold tracking-wide">
                          {param.title}{' '}
                        </h3>
                        <time className="text-lg tracking-wide uppercase text-gray-100">
                          <i>{param.event_time}</i>
                        </time>
                        <p className="mt-3 text-xl">{param.html_content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center">
          {/* <span className="flex">
          <HeartIcon
            className="text-red-400 h-20 w-20 animate-ping absolute"
            aria-hidden="true"
          />
          <HeartIcon className="text-red-600 h-20 w-20" aria-hidden="true" />
        </span> */}
        </div>
        <div className="w-full flex justify-center mt-4">
          {/* <span className="flex text-gray-500 font-bold justify-center items-center">
          Thí nghiệm đo gia tốc vào lòng em <br/> 8h59.6.6.2022
        </span> */}
        </div>
      </div>
    </div>
  );
}
