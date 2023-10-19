import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

interface DataRes {
  res: [any];
  img: [any];
}

const All = () => {
  const [data, setData] = useState<DataRes>();
  const [loading, setLoading] = useState(false);
  const [pageloading, setPageLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setPageLoading(true);
    fetch('https://es3i.onrender.com/Artemis/showAll', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        setPageLoading(false);
      });
  }, []);

  const handleRemove = (key: any) => {
    setLoading(true);
    fetch(`https://es3i.onrender.com/Artemis/removePost/${key}`, {
      method: 'GET',
    }).then(() => {
      setLoading(false);
      router.reload();
    });
  };
  return (
    <div className="bg-gray-900 min-h-screen pt-24 w-full flex items-center justify-center">
      {pageloading ? (
        <div className="w-[1rem] bg-white animate-spin">.</div>
      ) : (
        <div className="w-full lg:w-1/2">
          {data?.res?.map(
            (
              e: {
                room:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                _id:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                user:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                note:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                imgFile: { contentType: any; data: { data: string | any[] } };
              },
              index: number
            ) => (
              <div
                className="card lg:card-side bg-base-100 shadow-xl my-4"
                style={{
                  boxShadow: ' 0px 0px 100px 85px rgba(250,250,250,0.1)',
                }}
                key={index}
              >
                <figure className="w-1/2">
                  <img src={`data:image/png;base64,${data?.img[index]}`} />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    {!loading ? (
                      <button
                        className="btn btn-circle btn-outline"
                        onClick={() => {
                          handleRemove(e?._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    ) : (
                      <span className="loading loading-ring loading-sm"></span>
                    )}
                  </div>
                  <h1>
                    <b>Số phòng</b>: {e?.room}
                  </h1>
                  <h1>
                    <b>Tên người nhận</b>: {e?.user}
                  </h1>
                  <h1>
                    <b>Ghi chú</b>: {e?.note}
                  </h1>
                </div>
                {console.log(e)}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default All;
