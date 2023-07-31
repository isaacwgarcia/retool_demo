import Retool from "react-retool";
import { useState, useEffect } from "react";

const RetoolWrapper = ({ retoolAppName, data }) => {
  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState();

  useEffect(() => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retoolAppName, data }),
    };
    fetch("/api/geturl", options)
      .then((response) => {
        return response.json(); // Return the Promise from response.json()
      })
      .then((data) => {
        if (data.embedUrl) {
          try {
            const url = new URL(data.embedUrl);
            // If no exception is thrown, the URL is valid
            setRetoolEmbedUrl(data.embedUrl);
          } catch (error) {
            // The URL is not valid
            console.error("Invalid URL:", data.embedUrl);
            // You can handle the error here or take appropriate action
          }
        }
        //res.status(200).json(data);
        // If you want to use the data outside of this block, return it.
      })
      .catch((error) => {
        console.log("Error /api/geturl", error);
      });
  }, [retoolAppName]);

  return (
    <>
      <Retool url={retoolEmbedUrl} />
    </>
  );
};

export default RetoolWrapper;
