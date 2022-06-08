let container = document.querySelector(".container");
let sideBarVisible = false;
let filterDisplayed = false;
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//getting the data from JSON file===================================

function getDataFromJson() {
  return fetch("example.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

// let data = getDataFromJson()

// add class cards=============================================

function addClassCards(data) {
  let mainContainer = document.querySelector(".all-class-container");
  for (let j = 0; j < data.length; j++) {
    let classContainerDiv = document.createElement("div");
    classContainerDiv.classList.add("my-classes-container");
    if (data[j].classes.count > 0) {
      classContainerDiv.innerHTML = `<div class="college-name">
          <p>${data[j].space_title}</p>
        </div>
        <div class="filter-button">
          <button class="filter-btn">Sort/Filter</button>
          Class name(A-Z)/All materials
        </div>
        <div class="prev-class-container"></div>
        <hr />`;
      mainContainer.appendChild(classContainerDiv);
      let sortFilterbtn = classContainerDiv.children.item(1).querySelector(".filter-btn");
      sortFilterbtn.addEventListener("click", function(){
        showSideBar();
        let applyFilterBtn = document.querySelector(".sort.apply-filter-btn");
        applyFilterBtn.addEventListener("click", function(){
          let classNameRadioBtn = document.querySelector(".sort-by-radio-btn #class-name");
          let startDateRadioBtn = document.querySelector(".sort-by-radio-btn #start-date");
          let endDateRadioBtn = document.querySelector(".sort-by-radio-btn #end-date");
          let createdDateRadioBtn = document.querySelector(".sort-by-radio-btn #created-date");
          let firstsortdiv = document.querySelector(".sort-char-option-1");
          let secondsortdiv = document.querySelector(".sort-char-option-2");
          let thirdsortdiv = document.querySelector(".sort-char-option-3");
          let forthsortdiv = document.querySelector(".sort-char-option-4");
          if(classNameRadioBtn.checked === true){
            sortOnClassName(j);
          }
          else if(startDateRadioBtn.checked === true){
            sortOnStartDate(j);
          }
          else if(endDateRadioBtn.checked === true){
            sortOnEndDate(j);
          }
          else if(createdDateRadioBtn.checked === true){
            sortOnCreateDate(j);
          }
        });

        let filterByBtn = document.querySelector(".fiter-by-heading");
        setTimeout(() => {
          filterByBtn.addEventListener("click", function(){
            showFilterMenu();
            let filterItemsBtn = document.querySelector(".filter.apply-filter-btn");
            filterItemsBtn.addEventListener("click", function(){
              filterCards(j);
            });
          });
        }, 0);
      });
    }
    else if (data[j].classes.count == 0) {
      let createClassDiv = document.createElement("div");
      createClassDiv.classList.add("create-class-container");
      createClassDiv.innerHTML = `<div class="create-class-element-container">
        <h2 class="create-class-heading">${data[j].space_title}</h2>
        <div class="info-line">
          <span class="info-text">Start date</span>
          <span class="material-symbols-outlined info-text">east</span>
          <span class="info-text">End date</span>
          <span
            title="Please share the class key with your students. They will need to sign up or log in, and will then be able to join your class using this key."
            class="material-symbols-outlined info-text info-text-icon">info</span>
          <span class="info-text">Invite students to your class using the
          </span>
          <button class="info-text class-key-btn">Class key</button>
        </div>
        <div class="create-class-feature">
          <div class="create-class-image-box"></div>
          <figure class="create-class-icon-btn">
            <span class="material-symbols-outlined create-icon-btn">
              add_circle
            </span>
            <figcaption class="create-icon-btn-caption">
              Create a class
            </figcaption>
          </figure>
        </div>
        </div>
        <hr />`
      mainContainer.appendChild(createClassDiv);
    }

    let classCards = data[j].classes.entities;
    for (let i = 0; i < classCards.length; i++) {
      let classcard = document.createElement("div");
      let title = data[j].classes.entities[i].title;
      classcard.classList.add("prev-class");
      let encodedStartDate = data[j].classes.entities[i].class.startdate;
      const startDate = new Date(encodedStartDate);
      const startDateStr = `${months[startDate.getMonth()]
        }  ${startDate.getDate()}, ${startDate.getFullYear()}`;
      let encodedEndDate = data[0].classes.entities[i].class.enddate;
      const EndDate = new Date(encodedEndDate);
      const endDateStr = `${months[EndDate.getMonth()]
        }  ${EndDate.getDate()}, ${EndDate.getFullYear()}`;
      classcard.innerHTML = `<div class="class-name-and-dropdown">
      <div class="checkbox-and-name">
        <input
          type="checkbox"
          name="selected-class"
          id="select-class-${j}-${i}"
        />
        <label for="select-class-${j}-${i}"> ${title}</label>
      </div>
      <div class="expand-class-icon">
        <span class="material-symbols-outlined"> expand_more </span>
      </div>
    </div>
    <div class="date-class-key-div">
      <div class="class-dates-div">${startDateStr}-${endDateStr}</div>
      <div class="class-key-div">Class key:${data[j].classes.entities[i].class_code}</div>
    </div>
    <div class="image-layout-dotted">
      <div class="image-box"></div>
      <div class="image-box"></div>
      <div class="image-box"></div>
      <div class="image-box"></div>
      <div class="image-box"></div>
    </div>
    <hr />
    <div class="study-material-and-data">
      <div class="study-material">
        <figure class="mat-1">
          <span
            class="material-symbols-outlined study-material-icons mat-1"
          >
            monitoring
          </span>
          <figcaption class="mat-1-caption">Class data</figcaption>
        </figure>
      </div>
      <div class="study-material mat-2">
        <figure class="mat-2">
          <span class="material-symbols-outlined study-material-icons">
            assignment
          </span>
          <figcaption class="mat-2-caption">Assignments</figcaption>
        </figure>
      </div>
      <div class="study-material mat-3">
        <figure class="mat-3">
          <span class="material-symbols-outlined study-material-icons">
            library_books
          </span>
          <figcaption class="mat-3-caption">Materials</figcaption>
        </figure>
      </div>
    </div>`;
      let container = mainContainer.children.item(j).querySelector(".prev-class-container");
      container.appendChild(classcard);
    }
  }
  let allClassCards = document.getElementsByClassName("prev-class");
  for (let i = 0; i < allClassCards.length; i++) {
    let expandIcon = allClassCards[i].querySelector(".expand-class-icon");
    expandIcon.addEventListener("click", function () {
      let addedDiv = allClassCards[i].querySelector(".date-class-key-div");
      if (allClassCards[i].classList.contains("active")) {
        allClassCards[i].classList.remove("active");
        addedDiv.style.display = "none";
      } else {
        allClassCards[i].classList.add("active");
        addedDiv.style.display = "flex";
      }
    });
  }
  let clickFilterBy = document.querySelector(".filter-by-heading");
};

getDataFromJson().then((data) => {
  addClassCards(data);
});

// open and close side bar====================================

let showSideBar = function () {
  if (!sideBarVisible) {
    let sideBar = document.createElement("div");
    sideBar.classList.add("sidebar");
    sideBar.innerHTML = `<div class="right-side-modal">
    <div class="modal-heading">
    <span class="material-symbols-outlined sort-by-back-icon">
        navigate_before
      </span>
      <span class="sort-by-heading"> Sort by </span>
    </div>
    <div class="options-container">
      <div class="sort-by-options">
      <div class="sort-by-radio-btn">
      <input type="radio" id="class-name" name="filter" />
      <label for="class-name">Class name</label><br />
      </div>
      <div class="sort-by-radio-btn">
      <input type="radio" id="start-date" name="filter" />
      <label for="start-date">Start date</label><br />
      </div>
      <div class="sort-by-radio-btn">
      <input type="radio" id="end-date" name="filter" />
      <label for="end-date">End date</label>
      </div>
      <div class="sort-by-radio-btn">
      <input type="radio" id="created-date" name="filter" />
      <label for="created-date">Created date</label><br />
      </div>
      </div>
      <hr />
      <div class="sort-char-option-1">
        <span class="material-symbols-outlined sort-asc">
        switch_right
        </span>
        <span class="asc-order">A-Z</span>
      </div>
      <div class="sort-char-option-2">
        <span class="material-symbols-outlined sort-desc">
        switch_left
        </span>
        <span class="desc-order">Z-A</span>
      </div>
      <div class="sort-char-option-3">
        <span class="material-symbols-outlined sort-asc">
        switch_right
        </span>
        <span class="asc-order">First-Last</span>
      </div>
      <div class="sort-char-option-4">
        <span class="material-symbols-outlined sort-desc">
        switch_left
        </span>
        <span class="desc-order">Last-First</span>
      </div>
      <hr />
      <div class="fiter-by-heading">
      <span class="filter-by-heading-text">Filter By</span>
      <span class="material-symbols-outlined fiter-by-next-icon">
      navigate_next
      </span>
      </div>
      <div class="confirm-and-reset-btn">
      <button class="clear-all-btn">Clear all</button>
      <button class="sort apply-filter-btn">Apply</button>
      </div>
      </div>
      </div>`;
    container.appendChild(sideBar);
    sideBarVisible = true;
    let classNameRadioBtn = document.querySelector(".sort-by-radio-btn #class-name");
    let option1Div = document.querySelector(".sort-char-option-1");
    option1Div.style.display = "flex";
    classNameRadioBtn.checked = true;
    let cancelBtn = document.querySelector(".clear-all-btn");
    let backBtn = document.querySelector(".sort-by-back-icon");
    setTimeout(() => {
      backBtn.addEventListener("click", closeSideBar);
    }, 0);

    setTimeout(() => {
      cancelBtn.addEventListener("click", closeSideBar);
    }, 0);

    let firstsortdiv = document.querySelector(".sort-char-option-1");
    let secondsortdiv = document.querySelector(".sort-char-option-2");
    let thirdsortdiv = document.querySelector(".sort-char-option-3");
    let forthsortdiv = document.querySelector(".sort-char-option-4");

    let startDateRadioBtn = document.querySelector('.sort-by-radio-btn #start-date');
    let endDateRadioBtn = document.querySelector('.sort-by-radio-btn #end-date');
    let createDateRadioBtn = document.querySelector('.sort-by-radio-btn #created-date');

    setTimeout(() => {
      classNameRadioBtn.addEventListener("click", function () {
        changeSortOptions();
        firstsortdiv.style.display = "flex";
      });
    }, 0);

    setTimeout(() => {
      startDateRadioBtn.addEventListener("click", function () {
        changeSortOptions();
        thirdsortdiv.style.display = "flex";
      });
    }, 0);

    setTimeout(() => {
      endDateRadioBtn.addEventListener("click", function () {
        changeSortOptions();
        thirdsortdiv.style.display = "flex";
      });
    }, 0);

    setTimeout(() => {
      createDateRadioBtn.addEventListener("click", function () {
        changeSortOptions();
        thirdsortdiv.style.display = "flex";
      });
    }, 0);

    let selectSortType1 = document.querySelector(".sort-char-option-1 .sort-asc");
    let selectSortType2 = document.querySelector(".sort-char-option-2 .sort-desc");
    let selectSortType3 = document.querySelector(".sort-char-option-3 .sort-asc");
    let selectSortType4 = document.querySelector(".sort-char-option-4 .sort-desc");
    setTimeout(() => {
      selectSortType1.addEventListener("click", function(){
        changeSortType();
      });
    }, 0);

    setTimeout(() => {
      selectSortType2.addEventListener("click", function(){
        changeSortType();
      });
    }, 0);

    setTimeout(() => {
      selectSortType3.addEventListener("click", function(){
        changeSortType();
      });
    }, 0);

    setTimeout(() => {
      selectSortType4.addEventListener("click", function(){
        changeSortType();
      });
    }, 0);
  }
};

function closeSideBar() {
  let sideBar = document.querySelector(".sidebar");
  container.removeChild(sideBar);
  sideBarVisible = false;
}


function changeSortType() {
  let firstsortdiv = document.querySelector(".sort-char-option-1");
  let secondsortdiv = document.querySelector(".sort-char-option-2");
  let thirdsortdiv = document.querySelector(".sort-char-option-3");
  let forthsortdiv = document.querySelector(".sort-char-option-4");
  if(firstsortdiv.style.display !== "none"){
    changeSortOptions();
    secondsortdiv.style.display = "flex"
  }
  else if(secondsortdiv.style.display !== "none"){
    changeSortOptions();
    firstsortdiv.style.display = "flex"
  }
  else if(thirdsortdiv.style.display !== "none"){
    changeSortOptions();
    forthsortdiv.style.display = "flex";
  }
  else if(forthsortdiv.style.display !== "none"){
    changeSortOptions();
    thirdsortdiv.style.display = "flex";
  }
}

function changeSortOptions() {
  let firstsortdiv = document.querySelector(".sort-char-option-1");
  let secondsortdiv = document.querySelector(".sort-char-option-2");
  let thirdsortdiv = document.querySelector(".sort-char-option-3");
  let forthsortdiv = document.querySelector(".sort-char-option-4");
  firstsortdiv.style.display = "none";
  secondsortdiv.style.display = "none";
  thirdsortdiv.style.display = "none";
  forthsortdiv.style.display = "none";
}

function showFilterMenu() {
  let filterByBtn = document.querySelector(".fiter-by-heading");
  let sideBar = document.querySelector(".sidebar");
  sideBar.innerHTML = `<div class="right-side-modal">
  <div class="modal-heading">
  <span class="material-symbols-outlined filter-by-back-icon">
      navigate_before
    </span>
    <span class="filter-by-heading"> Filter by </span>
  </div>
  <div class="options-container">
    <div class="filter-by-options">
      <div class="filter-drop-down">
        <p class="filter-class-key">Class key</p>
        <span class="material-symbols-outlined filter-drop-down-icon">
          arrow_drop_down
        </span>
      </div>
      <ul class="filter-list-items"></ul>
    </div>
    <hr />
    <div class="sort-by-directing-heading">
    <span class="sort-by-heading-text">Sort By</span>
    <span class="material-symbols-outlined fiter-by-next-icon">
    navigate_next
    </span>
    </div>
    <div class="confirm-and-reset-btn">
    <button class="clear-all-btn">Clear all</button>
    <button class="filter apply-filter-btn">Apply</button>
    </div>
    </div>
    </div>`;
  let filterKeyOptions = document.querySelector(".filter-list-items");
  let set = new Set();
  getDataFromJson().then((data) => {
    data[0].classes.entities.forEach(element => {
      if (!set.has(element.class_code)) {
        let listItem = document.createElement("li");
        listItem.classList.add("filter-list-elements");
        listItem.innerHTML = `${element.class_code}`;
        filterKeyOptions.appendChild(listItem);
      }
      set.add(element.class_code);
    });
  });

  let dropDownClick = document.querySelector(".filter-drop-down");
  let classCodearea = document.querySelector(".filter-class-key");
  dropDownClick.addEventListener("click", displayFilterKeys);
  let filterOptions = document.querySelector(".filter-list-items");
  filterOptions.addEventListener("click", function (e) {
    classCodearea.innerHTML = e.target.innerHTML;
    displayFilterKeys();
  });
  let filterBackBtn = document.querySelector(".filter-by-back-icon");
  setTimeout(() => {
    filterBackBtn.addEventListener("click", closeSideBar);
  }, 0);
  let cancelFilterBtn = document.querySelector(".clear-all-btn");
  setTimeout(() => {
    cancelFilterBtn.addEventListener("click", closeSideBar);
  }, 0);
}

function sortOnClassName(i) {
  getDataFromJson().then((data) => {
    let selectSortType1 = document.querySelector(".sort-char-option-1");
    let selectSortType2 = document.querySelector(".sort-char-option-2");
    let tempJson = JSON.parse(JSON.stringify(data));
    let arrayToSort = tempJson[i].classes.entities;
    arrayToSort.sort(function (a, b) {
      if(selectSortType1.style.display === "flex"){
        return a.title > b.title ? 1 : -1;
      }
      else{
        return b.title > a.title ? 1 : -1;
      }
    });
    let mainContainer = document.querySelector(".all-class-container");
    mainContainer.innerHTML = "";
    addClassCards(tempJson);
  });
}

function sortOnStartDate(i) {
  getDataFromJson().then((data) => {
    let selectSortType3 = document.querySelector(".sort-char-option-3");
    let selectSortType4 = document.querySelector(".sort-char-option-4");
    let tempJson = JSON.parse(JSON.stringify(data));
    let arrayToSort = tempJson[i].classes.entities;
    arrayToSort.sort(function (a, b) {
      if(selectSortType3.style.display !== "none"){
        return b.class.startdate - a.class.startdate;
      }
      else{
        return a.class.startdate - b.class.startdate;
      }
    });
    let mainContainer = document.querySelector(".all-class-container");
    mainContainer.innerHTML = "";
    addClassCards(tempJson);
  });
}

function sortOnEndDate(i) {
  getDataFromJson().then((data) => {
    let selectSortType3 = document.querySelector(".sort-char-option-3");
    let selectSortType4 = document.querySelector(".sort-char-option-4");
    let tempJson = JSON.parse(JSON.stringify(data));
    let arrayToSort = tempJson[i].classes.entities;
    arrayToSort.sort(function (a, b) {
      if(selectSortType3.style.display === "flex"){
        return a.class.enddate - b.class.enddate;
      }
      else{
        return b.class.enddate - a.class.enddate;
      }
    });
    let mainContainer = document.querySelector(".all-class-container");
    mainContainer.innerHTML = "";
    addClassCards(tempJson);
  });
}

function sortOnCreateDate(i) {
  getDataFromJson().then((data) => {
    let selectSortType3 = document.querySelector(".sort-char-option-3");
    let selectSortType4 = document.querySelector(".sort-char-option-4");
    let tempJson = JSON.parse(JSON.stringify(data));
    let arrayToSort = tempJson[i].classes.entities;
    arrayToSort.sort(function (a, b) {
      if(selectSortType3.style.display === "flex"){
        return a.created - b.created;
      }
      else{
        return b.created - a.created;
      }
    });
    let mainContainer = document.querySelector(".all-class-container");
    mainContainer.innerHTML = "";
    addClassCards(tempJson);
  });
}

function displayFilterKeys() {
  let listItems = document.querySelector(".filter-list-items");
  if (listItems.style.display == 'block') {
    listItems.style.display = 'none'
  }
  else {
    listItems.style.display = 'block'
  }
}

function filterCards(i) {
  getDataFromJson().then((data) => {
    let classKeySelector = document.querySelector(".filter-class-key");
    let classKey = classKeySelector.innerHTML;
    if(classKey === "Class key"){
      return;
    }
    let tempJson = JSON.parse(JSON.stringify(data));
    let filteredArray = tempJson[i].classes.entities.filter(function(ele){
      return ele.class_code === classKey;
    });

    tempJson[i].classes.entities = filteredArray;
    let mainContainer = document.querySelector(".all-class-container");
    mainContainer.innerHTML = "";
    addClassCards(tempJson);
  });
}


