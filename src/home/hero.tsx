import { HeartIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <>
      <div
        className="hero h-screen"
        style={{ backgroundImage: 'url("/img/img20.jpg")' }}
      >
        <div className=""></div>
        <div className="text-center text-neutral-content">
          <div className="w-max bg-gray-900/70 p-8 rounded-2xl overflow-hidden">
            <h1 className="mb-2 text-3xl font-bold">
              Hello <span className="text-blue-500">Thai Bao</span>
            </h1>
            <h1 className="mb-2 text-3xl font-bold">
              I am <span className="text-blue-500">Trinh Cuong</span>
            </h1>
            <p className="mb-2">and ...</p>
            <p className="mb-2">I just want to say</p>
            <label className="swap swap-rotate lg:hidden">
              <input type="checkbox" />

              <div className="swap-off flex justify-center items-center">
                <HeartIcon
                  className="text-red-400 mx-4 h-10 w-10"
                  aria-hidden="true"
                />
              </div>
              <div className="swap-on flex justify-center items-center">
                <p className="text-3xl font-bold text-red-500">I love you</p>
                {/* <HeartIcon
                  className="text-red-400 mx-4 h-10 w-10"
                  aria-hidden="true"
                /> */}
              </div>
            </label>
            <div
              className="tooltip tooltip-error hidden lg:block"
              data-tip="i love you"
            >
              <div className="mockup-code text-left">
                <pre data-prefix="1">
                  <code>01101001 00100000 01101100</code>
                </pre>
                <pre data-prefix="2">
                  <code>01101111 01110110 01100101 00100000</code>
                </pre>
                <pre data-prefix="3">
                  <code>01111001 01101111 01110101</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
