import React, { useState } from "react";
import PropTypes from "prop-types";

// components

export default function CardTable({ color }) {
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
              <i className={"fas fa-plus mr-2 text-sm "}></i> 데이터 정보 등록
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
                  데이터 경로
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  등록 시각
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  현재상태
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  최종 처리 시각
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  메시지
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
                  aidata-2023-01-001/000. 데이터명/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  등록대기
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  최초 등록 상태. 데이터등록을 누르면 등록 준비로 변경
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap">
                  데이터등록
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  aidata-2023-01-001/001. 데이터명/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  등록준비
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap ">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  등록 준비된 건을 스케줄러가 체크하여 실행하고 진행중으로 변경
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 whitespace-nowrap "></td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                  aidata-2023-01-001/002. 데이터명/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  진행중
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  다운로드 / 사전체크 / 데이터분배 / 압축 / 업로드 작업 진행
                  진행 중 발생하는 메시지를 표시한다.
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 "></td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                  aidata-2023-01-001/003. 데이터명/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  등록실패
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  등록 과정 중에 실패할 경우 실패 메시지 출력 재시작을 하면
                  실패한 단계부터 다시 시작 가능 초기화를 실행하면 모든 데이터를
                  초기화 하고 상태를 대기로 변경
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                  재시작 | 초기화
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                  aidata-2023-01-001/004. 데이터명/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  등록완료
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  2023-02-00 11:38
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  모든 등록이 완료된 상태.
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 "></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="px-6 py-6 lg:px-8 relative flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    데이터 등록
                  </h3>
                  <div className="flex-auto px-4 lg:px-10 space-y-6 pt-0">
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          데이터 경로
                        </label>
                        <input
                          type="file"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="데이터 경로"
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

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
