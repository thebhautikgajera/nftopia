import React from "react";

const Page_3 = () => {
  return (
    <>
      <div className="flex justify-center items-center absolute top-[42vw] left-0 w-full h-full">
        <div className="bg-white shadow-lg border rounded-lg p-6 max-w-6xl w-full">
          <div className="flex justify-between items-center gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">16</p>
              <p className="text-sm text-gray-600">Created</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">879,502</p>
              <p className="text-sm text-gray-600">Likes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">5,870</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">360</p>
              <p className="text-sm text-gray-600">Followed</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">ID: 13b9ebda0178...</p>
              <button className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
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
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_3;
