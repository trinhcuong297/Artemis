import React, { ReactChild, ReactFragment, ReactPortal, useState } from 'react';

import { useRouter } from 'next/router';

interface DataRes {
  res: [any];
  img: [any];
}

const Search = () => {
  const [data, setData] = useState<DataRes>();
  const [loading, setLoading] = useState(false);
  const [searching, setSearchng] = useState(false);
  const [room, setRoom] = useState('');
  const [user, setUser] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    setSearchng(true);
    fetch(
      `https://es3i.onrender.com/Artemis/search/${room || '*'}.${user || '*'}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setSearchng(false);
      });
  };

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
    <div className="bg-gray-900 min-h-screen pt-24 flex flex-col items-center justify-center">
      <div
        className="form-control w-3/4 rounded flex justify-center items-center bg-white p-4"
        style={{ boxShadow: ' 0px 0px 100px 85px rgba(250,250,250,0.1)' }}
      >
        <div>
          <label className="label">
            <span className="label-text">Tên phòng?</span>
          </label>
          <input
            name="room"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onInput={(e) => setRoom(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Người nhận?</span>
          </label>
          <input
            name="user"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onInput={(e) => setUser(e.currentTarget.value)}
          />
        </div>
        {!searching ? (
          <button
            className="btn btn-outline m-3"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        ) : (
          <button className="btn btn-outline m-3 animate-ping" disabled>
            Search
          </button>
        )}
      </div>
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
              style={{ boxShadow: ' 0px 0px 100px 85px rgba(250,250,250,0.1)' }}
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
    </div>
  );
};

export default Search;
