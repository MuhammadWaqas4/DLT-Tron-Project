import React, { useState, useRef } from "react";

/**
 * @author
 * @function Timer
 **/

const Timer = (props) => {
  const [timedays, setTimeDays] = useState("");
  const [timeHours, setTimeHours] = useState("");
  const [timeMinusts, setTimeMinusts] = useState("");
  const [timeseconds, setTimeSeconds] = useState("");

  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
      let countDownDate = new Date("2020,12,05 14:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinusts(minuts);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <div className="yt-video-div">
        <figure
          class="elementor-image-box-img vedio-wrap"
          style={{ marginBottom: 0, paddingTop: 60, paddingBottom: 35 }}
        >
          <iframe
            style={{ border: "1px dashed white" }}
            width="100%"
            height="170"
            src="https://www.youtube.com/embed/k0R32xF08PM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </figure>
        <div
          style={{
            position: "relative",
            top: 20,
          }}
        >
          <img src="/german.png" style={{ maxWidth: 250 }} />
        </div>
      </div>
      <div style={{ paddingTop: 50 }}></div>
      <div style={{ textAlign: "center", color: "white", fontWeight: 600 }}>
        <span style={{ borderBottom: "1px solid #e35db3", lineHeight: 1 }}>
          WAVE COIN TOKEN SALE
        </span>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: 600,
          paddingTop: 40,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <span style={{ lineHeight: 1 }}>
          The fatest blockchain network with real time payments gateway
        </span>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "red",
          fontSize: 30,
          paddingTop: 30,
        }}
      >
        <span>
          Timer:{" "}
          {timedays + ":" + timeHours + ":" + timeMinusts + ":" + timeseconds}{" "}
          (14:00 UTC +1)
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          margin: "auto",
          paddingTop: 40,
          paddingBottom: 40,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="set-pool-and-supply"
          style={{
            width: "50%",
            color: "white",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            fontSize: 20,
          }}
        >
          <div>Total Token Supply</div>
          <div>1.000.000</div>
        </div>
        <div
          className="set-pool-and-supply"
          style={{
            width: "50%",
            color: "white",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            fontSize: 20,
          }}
        >
          <div>Pool Staking</div>
          <div>up to 0.6% daily</div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <a
          href="https://t.me/wavecoingermany"
          target="_blank"
          style={{
            border: "none",
            backgroundColor: "#e35db3",
            color: "white",
            paddingLeft: 30,
            paddingRight: 30,
            textDecoration: "none",
            paddingTop: 5,
            paddingBottom: 5,
            fontWeight: 600,
          }}
        >
          Join now
        </a>
      </div>
      <div
        style={{
          color: "white",
          fontWeight: 600,
          display: "flex",
          flexWrap: "wrap",
          marginTop: 80,
          padding: 30,
        }}
      >
        <div>
          <img src="/german.png" style={{ maxWidth: 200 }} />
          <div style={{ marginTop: 10 }}>
            <div>
              <span>Wave Finance Europe</span>
            </div>
            <div>
              <span>Dr. Axel Neubauer</span>
            </div>
            <div>
              <span>Dr. Grass-Strasse 12 </span>
            </div>
            <div>
              <span>9490 Vaduz, Liechtenstein</span>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <div style={{}}>Copyright © Wave Finance europe</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
