console.log("sanity");

/*~~~~~~ HELPER FUNCTION ~~~~~~*/

// const url = https://www.reddit.com/r/Tuner/.json  (API for subReddit)

// const request = (url, callback) => {
//   const oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", callback);
//   oReq.open("GET", url);
//   oReq.send();
// };

// request(url, res => {
//   const data = JSON.parse(res.currentTarget.response);
//   console.log("data", data);
// });

// request("https://www.reddit.com/r/Tuner/.json", res => {
//   //
// });

/*~~~~~~ LONG WAY ~~~~~~*/

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(res) {
  let myObj = JSON.parse(res.currentTarget.response);
  console.log("response: ", myObj);

  let data = myObj.data.children;
  console.log("posts: ", data);
  console.log("p.length:", data.length);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].data.title);
  }

  document.getElementById("test").innerHTML = data[0].data.title;
  document.getElementById("test2").innerHTML = data[0].data.selftext_html;
  // let img = document.createElement("img");
  // img.src =
  //   "https://a.thumbs.redditmedia.com/TCwPmZqiyjz_pSwXAQmTuH05K8VREL1uvoq9hkslJ98.jpg";
  // document.body.appendChild(img);
});

oReq.open("GET", "https://www.reddit.com/r/Tuner/.json");
oReq.send();
