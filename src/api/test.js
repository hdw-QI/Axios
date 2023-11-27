// window.onload=function () {
//     axios
//     .get("https://www.baidu.com/")
//     .then(function (response) {
//     console.log(response);
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
// }

$(function test() {
  axios
    .get("https://www.baidu.com/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});