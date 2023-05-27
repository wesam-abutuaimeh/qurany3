"use-strict";

const star = document.getElementById("star");
const aboutMeContainer = document.querySelector(".about-me-container");
const aboutMeContainerHide = document.querySelector(".about-me-container svg");
const settingsIcon = document.querySelector("#settings svg");
const settingsMenu = document.querySelector(".settings-menu");
const popupMenu = document.querySelector(".popup-menu");
const settingsTabs = Array.from(
  document.querySelectorAll("#settings-Tabs-Titles li")
);
const hijriDateCheckbox = document.querySelector("#hijri-date");
const timeClock = document.querySelector(".prayer-times .hero-msg h1");
const prayerTimes = document.querySelector(".prayer-times .container ul");
const rememberingCause = document.querySelector(".remembering-cause");

function changeBgImage() {
  let imgsArr = [
    "https://images.unsplash.com/photo-1552082919-e60010758c47?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwxMHwzNjk5NDR8fHx8fDN8fDE2ODI3NTA0NjQ&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwyMHwzNjk5NDR8fHx8fDN8fDE2ODAzNDIyNTA&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1653989457726-4be5f48fe291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1562616155-37c56e17e83c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1618777618311-92f986a6519d?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwxN3wzNjk5NDR8fHx8fDN8fDE2ODAzNDIyNTA&ixlib=rb-4.0.3&w=1366&dpr=1",
    "https://images.unsplash.com/photo-1421217802296-7a0b5e2abef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    "https://images.unsplash.com/photo-1554401922-2810fe449bac?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwxOXwzNjk5NDR8fHx8fDN8fDE2ODAzNDIyNTA&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1581412011095-e7c0b307215d?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwyNnwzNjk5NDR8fHx8fDN8fDE2ODA0NDMyMjc&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwxfDM2OTk0NHx8fHx8M3x8MTY4MDQ0MzIyNw&ixlib=rb-4.0.3&w=1452&dpr=1",
    "https://images.unsplash.com/photo-1555217266-a70b1e52fb4c?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwyfDM2OTk0NHx8fHx8M3x8MTY4MDQ0MzIyNw&ixlib=rb-4.0.3&w=1452&dpr=1",
    "https://images.unsplash.com/photo-1464254786740-b97e5420c299?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnw1fDM2OTk0NHx8fHx8M3x8MTY4MjQxMTU4Mw&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnw2fDM2OTk0NHx8fHx8M3x8MTY4MjQxMTU4Mw&ixlib=rb-4.0.3&w=1920&dpr=1",
    "https://images.unsplash.com/photo-1577951930508-9b26cce01b4c?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnw3fDM2OTk0NHx8fHx8M3x8MTY4MjQ5ODEyOA&ixlib=rb-4.0.3&w=1920&dpr=1",
  ];
  const imgsLength = imgsArr.length;
  window.addEventListener("load", () => {
    document.querySelector(".root").style.backgroundImage = `url('${
      imgsArr[Math.trunc(Math.random() * imgsLength)]
    }')`;
  });
}
changeBgImage();

//- Time
const currentTimeElement = document.getElementById("time");
const timePeriod = document.getElementById("time-period");
const currentDateTime = new Date();
let currentHour = currentDateTime.getHours().toString();
let currentMinutes = currentDateTime.getMinutes().toString().padStart(2, "0");

if (currentHour > 12) {
  currentHour -= 12;
}
const timePeriodText = currentDateTime.getHours() >= 12 ? "PM" : "AM";
timePeriod.innerHTML = timePeriodText;

const formattedTime = `${currentHour}:${currentMinutes}`;
currentTimeElement.innerHTML = formattedTime;

const AR_VersesHolder = document.getElementById("verses-in-ar");
const EN_VersesHolder = document.getElementById("verses-in-en");
const verseNameInEn = document.getElementById("surah-name");
const verseNameInAr = document.getElementById("surah-name-ar");
const NEXT_AYA = document.getElementById("next");
const PREV_AYA = document.getElementById("prev");

let ayaIndex = localStorage.getItem("ayaIndex") ?? 1;
let verseReader = "ar.alafasy";

function fetchVerse() {
  fetch(
    `http://api.alquran.cloud/v1/ayah/${ayaIndex}/editions/quran-uthmani,en.asad,en.pickthall`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Data Not Found!");
      }
      return response.json();
    })
    .then((data) => {
      AR_VersesHolder.innerHTML = data.data[0].text;
      EN_VersesHolder.innerHTML = data.data[1].text;
      verseNameInEn.innerHTML = `${data.data[1].surah.englishName} - ${data.data[1].number}`;
      verseNameInAr.innerHTML = `${data.data[0].surah.name} - ${data.data[0].number}`;
    })
    .catch((error) => {
      console.error("Error");
    });
  localStorage.setItem("ayaIndex", ayaIndex);
}
fetchVerse();

function audioPlay() {
  let audio = new Audio(
    `https://cdn.islamic.network/quran/audio/128/${verseReader}/${ayaIndex}.mp3`
  );
  audio.addEventListener("canplaythrough", (event) => {
    audio.play();
  });
}
NEXT_AYA.addEventListener("click", () => {
  ayaIndex++;
  fetchVerse();
  audioPlay();
});
PREV_AYA.addEventListener("click", () => {
  ayaIndex--;
  fetchVerse();
  audioPlay();
});
// add event listener to select element

const AZKAR_ICON = document.getElementById("azkar");
const QUICK_LINKS_ICON = document.getElementById("quick-links");
const azkarCategories = document.getElementById("azkar-categories-container");
const quickLinks = document.getElementById("quick-links-container");
const morningAzkarHandler = document.querySelector(
  ".morning-azkar-handler .container"
);

const quranAzkarHandler = document.querySelector(
  ".quran-azkar-handler .container"
);
const specialAzkarHandler = document.querySelector(
  ".your-azkar-handler .container"
);

const quranAzkarHide = document.querySelector(".card .container i");
const MORNING_AZKAR_LIST = document.querySelector(".morning-azkar-handler ul");

AZKAR_ICON.addEventListener("click", () => {
  azkarCategories.classList.toggle("show");
});

QUICK_LINKS_ICON.addEventListener("click", () => {
  quickLinks.classList.toggle("show");
});

function handleDocumentClick(e) {
  if (e.target.id === "morning-azkar") {
    morningAzkarHandler.style.display = "flex";
  }
  if (e.target.id === "quran-azkar") {
    quranAzkarHandler.style.display = "block";
  }
  if (e.target.id === "your-azkar") {
    specialAzkarHandler.style.display = "block";
  }
  if (e.target === quranAzkarHide) {
    quranAzkarHide.parentNode.remove();
  }
  if (specialAzkarHandler.innerHTML == "") {
    console.log(
      "لم تقم بإضافة أي أذكار بعد. قم بإضافة أذكارك الخاصة لتظهر هنا."
    );
  }
}

const link1 = document.querySelector("#link-0-contnent");
const link2 = document.querySelector("#link-1-contnent");
const link3 = document.querySelector("#link-2-contnent");

[...quickLinks.children].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.getAttribute("id") === "link0"
      ? (link1.style.cssText = "display:block")
      : e.target.getAttribute("id") === "link1"
      ? (link2.style.cssText = "display:block")
      : e.target.getAttribute("id") === "link2"
      ? (link3.style.cssText = "display:block")
      : "";
  });
});

const link1Content = document.getElementById("link-2-contnent-api");
fetch("/assets/js/azkar.json")
  .then((response) => response.json())
  .then((data) => {
    data.rows.slice(302, 303).forEach((row) => {
      link1Content.textContent = row[1];
      link2.appendChild(link1Content);
    });
  });

const closelink0 = document.querySelector("#link-0-contnent .close");
closelink0.addEventListener("click", () => {
  link1.style.display = "none";
});

const closelink1 = document.querySelector("#link-1-contnent .close");
closelink1.addEventListener("click", () => {
  link2.style.display = "none";
});

const closelink3 = document.querySelector("#link-2-contnent .close");
closelink3.addEventListener("click", () => {
  link3.style.display = "none";
});

document.addEventListener("click", handleDocumentClick);
const closeMorningAzkarHandler = document.querySelector(
  ".morning-azkar-handler .close"
);
closeMorningAzkarHandler.addEventListener("click", () => {
  morningAzkarHandler.style.display = "none";
});

const CLOSE_QURAN_AZKAR_HANDLER = document.querySelector(
  ".quran-azkar-handler .close"
);
CLOSE_QURAN_AZKAR_HANDLER.addEventListener("click", () => {
  quranAzkarHandler.style.display = "none";
});

fetch("/assets/js/azkar.json")
  .then((response) => response.json())
  .then((data) => {
    data.rows.slice(0, 31).forEach((row) => {
      const listItem = document.createElement("li");
      listItem.textContent = row[1];
      MORNING_AZKAR_LIST.appendChild(listItem);
    });
  });

const ADD_SPECIAL_ZAKR = document.querySelector(".add-special-azkar");
const ADD_SPECIAL_ZAKR_HANDLER = document.querySelector(".add-azkar");
const CLOSE_SPECIAL_ZAKR_HANDLER = document.querySelector(
  ".your-azkar-handler .close"
);
const SUBMIT_ZAKR = document.querySelector(".confirm-add-special-azkar");
const CANCEL_ZAKR = document.querySelector(".cancel-add-special-azkar");
const AZKAR_AREA = document.querySelector(".azkar-area");
let arrayOfAzkar = [];

getAzkarFromLocalStorage();

ADD_SPECIAL_ZAKR.addEventListener("click", () => {
  ADD_SPECIAL_ZAKR_HANDLER.style.top = "50%";
  ADD_SPECIAL_ZAKR_HANDLER.style.display = "flex";
});

SUBMIT_ZAKR.addEventListener("click", () => {
  const ZAKR = document.getElementById("zakr").value;
  const REPETITION = document.getElementById("repetition").value;

  if (ZAKR !== "" && REPETITION !== "") {
    addZakrToArray(ZAKR, REPETITION);
    document.getElementById("zakr").value = "";
    document.getElementById("repetition").value = "";
  }
});

function addZakrToArray(title, repetition) {
  const ZAKR = {
    id: Date.now(),
    zakr: title,
    zakrCount: repetition,
  };
  arrayOfAzkar.push(ZAKR);
  renderAzkarList(arrayOfAzkar);
  addAzkarToLocalStorage(arrayOfAzkar);
}

function renderAzkarList(arrayOfAzkar) {
  AZKAR_AREA.innerHTML = "";

  arrayOfAzkar.forEach((zakr) => {
    const div = document.createElement("div");
    div.className = "zakr";
    div.id = `zakr-${zakr.id}`;

    div.style.borderBottom = "1px solid #ac8e97";
    div.style.paddingBottom = "10px";

    const span = document.createElement("span");
    span.className = "zakr-title";
    span.appendChild(document.createTextNode(zakr.zakr));
    span.style.display = "block";
    span.style.margin = "10px auto";

    const button = document.createElement("button");
    const paragraph = document.createElement("p");
    paragraph.textContent = `${zakr.zakrCount} / ${zakr.zakrCount}`;
    button.appendChild(paragraph);
    button.style.outline = "none";
    button.style.border = "none";
    button.style.backgroundColor = "#2d3748";
    button.style.color = "#fff";
    button.style.borderRadius = "6px";
    button.style.padding = "6px";
    button.style.border = "1px solid #9ae6b4";

    div.appendChild(span);
    div.appendChild(button);
    AZKAR_AREA.appendChild(div);
  });
}

function addAzkarToLocalStorage(arrayOfAzkar) {
  window.localStorage.setItem("azkar", JSON.stringify(arrayOfAzkar));
}

function getAzkarFromLocalStorage() {
  const STORED_DATA = window.localStorage.getItem("azkar");
  if (STORED_DATA) {
    arrayOfAzkar = JSON.parse(STORED_DATA);
    renderAzkarList(arrayOfAzkar);
  }
}

CLOSE_SPECIAL_ZAKR_HANDLER.addEventListener("click", () => {
  specialAzkarHandler.style.display = "none";
});

CANCEL_ZAKR.addEventListener("click", () => {
  ADD_SPECIAL_ZAKR_HANDLER.style.display = "none";
});

star.addEventListener("click", (e) => {
  aboutMeContainer.style.cssText = "display:block;";
});
aboutMeContainerHide.addEventListener("click", (e) => {
  aboutMeContainer.style.cssText = "display:none;";
});

settingsIcon.addEventListener("click", toggleSettingsMenu);
settingsTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    activateSettingsTab(e);
    showSettingsContent(tab);
  });
});
popupMenu.addEventListener("change", handleSettingChange);

function toggleSettingsMenu() {
  settingsMenu.classList.toggle("show");
}

function activateSettingsTab(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
}

let selectContent = `
      <div class="popup-menu-row">
        <span>Verse Reader</span>
        <div>
          <select id="reader">
          <option value="ar.shaatree">shaatree</option>
          <option value="ar.husary">husary</option>
          <option value="ar.alafasy">alafasy</option>
          </select>
        </div>
      </div>
`;
function showSettingsContent(tab) {
  let content = "";

  if (tab.dataset.settingtabtitle === "bg-settings") {
    content = `
      <div class="popup-menu-row">
        <span>Nature Backgrounds</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="naturebg" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>

      <div class="popup-menu-row">
        <span>Auto Change Background</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="autoChangebg" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>

      <div class="popup-menu-row">
        <span>Enable Blur Effect</span>
        <div>
          <label>
            <input type="checkbox" data-setting="blurEffect" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>
    `;
  }

  if (tab.dataset.settingtabtitle === "verse") {
    content = `
      <div class="popup-menu-row">
        <span>Verse Reader</span>
        <div>
          <select id="reader">
          <option value="ar.shaatree">shaatree</option>
          <option value="ar.husary">husary</option>
          <option value="ar.alafasy">alafasy</option>
          </select>
        </div>
      </div>
    `;
  }

  if (tab.dataset.settingtabtitle === "general") {
    content = `
      <div class="popup-menu-row">
        <span>Date</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="date" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>
      <div class="popup-menu-row">
        <span>Clock</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="clock" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>
      <div class="popup-menu-row">
        <span>Prayer Times</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="prayer-times" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>
      <div class="popup-menu-row">
        <span>Remembering The Palestinian Cause</span>
        <div>
          <label>
            <input type="checkbox" checked data-setting="remembering" />
            <div class="toggle-switch"></div>
          </label>
        </div>
      </div>
    `;
  }

  if (tab.dataset.settingtabtitle === "notReady") {
    return;
  }
  popupMenu.innerHTML = content;
}
function handleSettingChange(event) {
  const input = event.target;
  const setting = input.getAttribute("data-setting");
  switch (setting) {
    case "date":
      hijriDateCheckbox.style.display = input.checked ? "inline-block" : "none";
      break;
    case "clock":
      timeClock.style.display = input.checked ? "inline-block" : "none";
      break;
    case "prayer-times":
      prayerTimes.style.display = input.checked ? "inline-block" : "none";
      break;
    case "remembering":
      rememberingCause.style.display = input.checked ? "inline-block" : "none";
      break;
    case "naturebg":
      document.querySelector(".root").style.cssText = input.checked
        ? ""
        : (document.querySelector(".root").style.cssText =
            " background-image: none; background-color:#0075ffd9;");
      break;
    case "autoChangebg":
      document.querySelector(".root").style.cssText = input.checked
        ? ""
        : "background-image: url(https://images.unsplash.com/photo-1653989457726-4be5f48fe291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);";
      break;
    case "blurEffect":
      document.querySelector(".prayer-times").style.cssText = input.checked
        ? "backdrop-filter: blur(5px);"
        : "";
      break;
  }
}

// palestine 💔 occupation
const PS_OCCUPATION_DATE = new Date("May 14, 1948");
const NOW_DATE = new Date();
const DIFFERENCE_IN_YEARS = Math.trunc(
  (NOW_DATE - PS_OCCUPATION_DATE) / (1000 * 60 * 60 * 24 * 365)
);
const DIFFERENCE_IN_MONTHS = Math.trunc(
  (NOW_DATE - PS_OCCUPATION_DATE) / (1000 * 60 * 60 * 24 * 30)
);
const OCCUPATION_YEARS = document.getElementById("occupation-years");
const occupationMonths = document.getElementById("occupation-months");
OCCUPATION_YEARS.innerHTML = DIFFERENCE_IN_YEARS;
occupationMonths.innerHTML = DIFFERENCE_IN_MONTHS;
