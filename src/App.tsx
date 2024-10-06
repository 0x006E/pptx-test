import { useEffect, useRef } from "react";
import "./App.css";
import Helmet from "react-helmet";
import { useLocalStorage } from "@uidotdev/usehooks";

declare global {
  interface Window {
    Presentation: {
      GotoSlide: (slide: number) => void;
      CurrentStatus: () => { slide: number };
    };
    DopPlayer: () => void;
    gf: number;
  }
}

function App() {
  const [slide, setSlide] = useLocalStorage("slide", -1);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (e.data && e.data.type === "dopPresentation") {
        console.log(slide);
        if (slide !== -1) {
          setTimeout(() => {
            window.Presentation.GotoSlide(slide);
          }, 100);
        }
        intervalRef.current = setInterval(() => {
          if (window.Presentation) {
            setSlide(window.Presentation.CurrentStatus().slide);
          }
        }, 100);
      } // setSlide(e.data.slide);
    };
    window.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <div
      id="player"
      style={{ height: "80%", width: "80%", overflow: "hidden" }}
    >
      <Helmet>
        <script type="text/javascript">
          var presenterNode='##dopPresenter##';
        </script>
        <script type="text/javascript" src="/data/script.js"></script>
        <script type="text/javascript" src="/data/player.js"></script>
      </Helmet>
      <div
        id="toolbar"
        style={{
          height: 50,
          bottom: 0,
          width: "100%",
          zIndex: 50,
          overflow: "hidden",
        }}
      >
        <div id="ddiv" style={{ height: 50, width: "100%", opacity: 1 }}>
          <button
            className="boxShadow"
            id="notesButton"
            style={{
              display: "none",
              fontWeight: "bold",
              left: 7,
              position: "absolute",
              top: 12,
              width: 60,
            }}
          >
            Menu
          </button>
          <div
            id="logo"
            style={{
              width: "20%",
              height: 40,
              left: 75,
              top: 4,
              overflow: "hidden",
            }}
          />
          <div id="time">
            <span id="times">00:00</span>
          </div>
          <div id="progressContainer">
            <div id="progress">
              <div id="Bar" />
            </div>
          </div>
          <div
            id="buttonDiv"
            style={{ width: 50, height: 50, display: "none" }}
          >
            <div id="playN" />
            <div id="playB" />
            <div id="playP" />
          </div>
          <div className="boxShadow" id="status" title="goto">
            <input
              id="statusCurrent"
              maxLength={3}
              onBlur={() => (window.gf = 0)}
              onFocus={() => (window.gf = 1)}
              type="text"
            />
            <input id="statusTotal" defaultValue="/0" disabled type="text" />
          </div>
          <div id="btnFullscreen" />
        </div>
      </div>
      <div id="contentHolder">
        <div
          id="resizer"
          style={{
            left: 0,
            top: 0,
            height: 540,
            width: 720,
            overflow: "hidden",
            MozTransformOrigin: "0 0",
            OTransformOrigin: "0 0",
            WebkitTransformOrigin: "0 0",
            msTransformOrigin: "0 0",
          }}
        />
      </div>
      <div id="loadingImg">
        <div
          style={{
            width: "100px",
            height: "50px",
            margin: 0,
            background: "transparent",
          }}
        >
          <button
            id="inImg"
            style={{ width: "auto", height: "auto" }}
            onClick={() => window.DopPlayer()}
          >
            {slide !== -1 ? "Resume from " + slide : "Play"}"
          </button>
        </div>
      </div>
      <div id="panel">
        <div id="slideNote">
          <div className="note-head">Slide Note</div>
          <div className="boxShadow" id="noteDisplay" />
        </div>
      </div>
    </div>
  );
}

export default App;
