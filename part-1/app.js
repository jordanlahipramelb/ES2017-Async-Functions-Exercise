const baseURL = 'http://numbersapi.com';
let faveNum = 7;

// 1.

async function getFaveNum(num) {
  let res = await axios.get(`${baseURL}/${num}?json`);
  console.log(res.data.text);
}

// getFaveNum(7);
/////////////////////////////////////////
// 2.
async function getMultNums() {
  let nums = await Promise.all([
    $.getJSON(`${baseURL}/1/?json`),
    $.getJSON(`${baseURL}/2/?json`),
    $.getJSON(`${baseURL}/3/?json`),
  ]);

  console.log(nums[0].text);
  console.log(nums[1].text);
  console.log(nums[2].text);
}
// getMultNums();

// or

const ranNums = [23, 9, 24, 5];
async function getMultNums2() {
  let data = await $.getJSON(`${baseURL}/${ranNums}/?json`);
  console.log(data);
}
// getMultNums2();

/////////////////////////////////////////

// 3.
// ! keeps displaying undefined on page

async function showFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      $.getJSON(`${baseURL}/${faveNum}?json`);
    })
  );
  facts.forEach((data) => {
    $('body').append(`<p>${data}</p>`);
  });
}

showFacts();
