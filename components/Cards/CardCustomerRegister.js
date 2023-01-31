import React, { useState } from "react";
import PropTypes from "prop-types";

// components

export default function CardCustomerRegister({ color }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              데이터 등록 관리
            </h6>
            <button
              className="bg-gray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <i className={"fas fa-plus mr-2 text-sm "}></i> 사용자 등록
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  사용자키
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  이름
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  아이디
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  등록시각
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  마지막 접속 시각
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  마지막 접속 IP
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  기능
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  xxxxxx
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  관리자
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  admin
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  123.123.123.123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  수정 | 삭제
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  xxxxxx
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  관리자
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  admin
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  123.123.123.123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  수정 | 삭제
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  xxxxxx
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  관리자
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  admin
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  123.123.123.123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  수정 | 삭제
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full lg:w-4/12 px-4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="px-6 py-6 lg:px-8 relative flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    사용자 등록 / 수정
                  </h3>
                  <div className="flex-auto px-4 lg:px-10 space-y-6 pt-0">
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          사용자 이름
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="사용자 이름"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          사용자 아이디
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="사용자 아이디"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          사용자 암호
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="사용자 암호"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          암호 확인
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="암호 확인"
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          저장
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

CardCustomerRegister.defaultProps = {
  color: "light",
};

CardCustomerRegister.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
