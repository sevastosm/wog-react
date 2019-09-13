import React from "react";
import { GetRecent } from "../mocks/mocks";

let list = GetRecent.Data;

const Playlist = () => {
  console.log(list);
  return (
    <div
      cellSpacing={0}
      cellPadding={5}
      border={0}
      width="100%"
      className="recentsermonstable"
    >
      <h2 style={{ borderBottom: "1px solid #0000001a" }}>Recent serries</h2>
      {list.map(listItem => {
        console.log(listItem);
        return (
          <div key={listItem.RecordingID}>
            <div className="recording-row d-flex flex-row mb-3 data0 ">
              <div className="col-4 d-flex flex-column ">
                <div className="adv d-flex justify-content-center">
                  <div>
                    <a
                      style={{ height: "90px" }}
                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_youTubeLink"
                      href="javascript:_mediaSrc('http://youtu.be/fONWDMlq8yQ','mediaid=52367',52369);"
                    >
                      <img
                        id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_youTubeThumb"
                        // src="https://img.youtube.com/vi/fONWDMlq8yQ/1.jpg"
                        style={{ borderWidth: "0px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="playlist-downloads d-flex align-items-cente justify-content-between">
                  <a
                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpVd"
                    href="javascript:_mediaSrc('http://youtu.be/fONWDMlq8yQ','mediaid=52367',52369);"
                  >
                    <div className="main-icon" data-type="svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        style={{
                          enableBackground: "new 0 0 60 60"
                        }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                          style={{ fill: "#193d4d" }}
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpMP3"
                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Judges/10_Judges_ie1_ie20_is1_is3_GK_09_09_2019.mp3','mediaid=52369',52369);"
                  >
                    <div className="main-icon" data-type="svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 300 300"
                        style={{
                          enableBackground: "new 0 0 300 300"
                        }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                              style={{
                                fill: "rgb(25, 61, 77)"
                              }}
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpDl"
                    onclick="showDownloadMenu(52367, event);return false;"
                    oncontextmenu="showDownloadMenu(52367, event);return false;"
                    href="javascript:void(0);"
                  >
                    <div className="main-icon" data-type="svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        viewBox="0 0 44 44"
                        enableBackground="new 0 0 44 44"
                      >
                        <path
                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                          style={{ fill: "rgb(25, 61, 77)" }}
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-8 pt-1">
                <div className="recording-date">{listItem.RecordingDate}</div>
                <div className="playlist-discription">
                  {listItem.RecordingSubject}
                </div>
                <div className="maintitle">
                  <div>{listItem.Subject}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Playlist;
