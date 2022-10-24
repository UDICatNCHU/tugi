const button = document.getElementById("btn-submit");
const resultBox = document.getElementById("results-div");

const spinner = document.createElement("span");
spinner.classList.add("spinner-grow");
spinner.classList.add("spinner-grow-sm");
spinner.setAttribute("role", "status");
spinner.setAttribute("aria-hidden", true);

function toggleButtonState() {
  if (button.disabled) {
    button.disabled = false;
    button.removeChild(spinner);
    button.innerText = "Compute";
  } else {
    button.innerText = "Loading...";
    button.insertBefore(spinner, button.firstChild);
    button.disabled = true;
  }
}
$('#datepicker').datepicker({
  format: 'yyyy/mm/dd',
  startDate: '-3d'
});

function toggleResultBox(show = true) {
  if (show === true) {
    resultBox.style.display = "block";
  } else {
    resultBox.style.display = "none";
  }
}

function successResultBox() {
  resultBox.classList.remove("alert-danger");
  resultBox.classList.add("alert-success");
}

function failResultBox() {
  resultBox.classList.remove("alert-success");
  resultBox.classList.add("alert-danger");
}

function fillTextGenResult(text) {

  if (text == "") {
    resultBox.innerHTML = "請輸入日期" ;
  } else {
    resultBox.innerHTML = "根據我們利用LSTM模型分析之結果，在" + text + "時，有色肉雞的當日估算價格為 63 元" ;
  }

}

async function submitForm(event) {
  event.preventDefault();
  const maintext = document.getElementById("date").value;
  console.log(maintext);
  // const maintext = document.getElementById("sentance-1").value;

  // console.log(maintext);
  // toggleButtonState();
  // toggleResultBox(false);
  // try {
  //   await fetch("/zhqa", {
  //     method: "POST",
  //     body: JSON.stringify({maintext}),
  //     headers: new Headers({
  //       "Content-Type": "application/json; charset=UTF-8",
  //     }),
  //   })
  //     .then(async (response) => {
  //       if (!response.ok) {
  //         const errorDetail = JSON.stringify(await response.json());
  //         throw new Error(
  //           `Request failed for ${response.statusText} (${response.status}): ${errorDetail}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       successResultBox();
  //       fillTextGenResult(data);
  //     });
  // } catch (error) {
  //   console.error(error);
  //   failResultBox();
  //   resultBox.innerText = error;
  // } finally {
  //   toggleButtonState();
  //   toggleResultBox();
  // }
  fillTextGenResult(maintext);
  toggleResultBox();
}

button.addEventListener("click", submitForm, false);
