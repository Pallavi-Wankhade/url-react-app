import { useState } from "react";
import UrlTable from "../UrlTable/UrlTable";

const UrlBoxes = () => {
  const [origUrl, setOrigUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlData, setUrlData] = useState([]);
  const [msg, setMsg] = useState("");

  // const urlData = {
  //   origUrl: "http://google.com",
  //   shortUrl: "aaaaa",
  //   clicks: 5,
  // };

  const showAllData = () => {
    fetch("http://localhost:3000/url")
      .then((res) => res.json())
      .then((result) => {
        setUrlData(result);
        console.log("Fetched data is", result);
      });
  };

  const inputUrlHandler = (value) => {
    setOrigUrl(value);
  };

  const submitUrlHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3000/url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origUrl }),
      });
      const result = await response.json();
      setShortUrl(result.shortUrl);
      setUrlData(result);
      // showAllData();
    } catch (err) {
      console.log(err);
    }
  };

  const CopyShortUrlHandler = () => {
    navigator.clipboard.writeText(shortUrl);
    setOrigUrl("");
    setShortUrl("");
    // alert("Short url copied to clipboard!!");
    setMsg("Short url copied!!!");
    setTimeout(() => {
      setMsg("");
    }, 2000);
  };

  const showAllUrl = () => {
    showAllData();
  };

  return (
    <>
      <div className=" d-flex flex-column  justify-content-center">
        <div>
          <label htmlFor="origUrl" className="m-2 fw-bolder">
            Original Url
          </label>
          <input
            className="w-25"
            type="text"
            id="origUrl"
            value={origUrl}
            onChange={(e) => inputUrlHandler(e.target.value)}
          />
          <button className="btn btn-secondary " onClick={submitUrlHandler}>
            Submit
          </button>
        </div>
        <div className="mt-2">
          <label htmlFor="shortUrl" className="m-2 fw-bolder">
            Shorten Url
          </label>
          <input
            className="w-25"
            type="text"
            id="shortUrl"
            name="shorturl"
            disabled="true"
            value={shortUrl}
          />
          <button className="btn btn-secondary " onClick={CopyShortUrlHandler}>
            Copy
          </button>
          <p className="my-3 text-success fw-bolder">{msg}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-dark m-2" onClick={showAllUrl}>
          Show all URLs
        </button>
      </div>
      <div>{urlData.length ? <UrlTable urlData={urlData} /> : ""}</div>
    </>
  );
};
export default UrlBoxes;
