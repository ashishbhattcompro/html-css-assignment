let sortFilterbtn = document.querySelector(".filter-btn");
let container = document.querySelector(".container");
let sideBarVisible = false;
let filterDisplayed = false;

//getting the data from JSON file===================================

function getDataFromJson(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

// add college Name================================================

(function addCollegeName() {
  getDataFromJson("example.json").then((data) => {
    let collegeName = data[0].space_title;
    let collegeNameSelector = document.querySelector(".college-name p");
    collegeNameSelector.innerHTML = "";
    collegeNameSelector.innerHTML = collegeName;
  });
})();

// add class cards=============================================

(function addClassCards() {
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
  getDataFromJson("example.json").then((data) => {
    for (let j = 0; j < data.length; j++) {
      let classContainerDiv = document.createElement("div");
      classContainerDiv.classList.add("my-classes-container");
      classContainerDiv.innerHTML = `<div class="college-name">
      <p>ABBERYSTWYTH COLLEGE - THOR</p>
    </div>
    <div class="filter-button">
      <button class="filter-btn">Sort/Filter</button>
      Class name(A-Z)/All materials
    </div>
    <div class="prev-class-container">
      <!-- <div class="prev-class">
      <div class="class-name-and-dropdown">
        <div class="checkbox-and-name">
          <input
            type="checkbox"
            name="selected-class"
            id="select-class-1"
          />
          <label for="select-class-1"> c6</label>
        </div>
        <div class="expand-class-icon">
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
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
      </div>
    </div>
    <div class="prev-class">
      <div class="class-name-and-dropdown">
        <div class="checkbox-and-name">
          <input
            type="checkbox"
            name="selected-class"
            id="select-class-2"
          />
          <label for="select-class-2"> 1 oct</label>
        </div>
        <div class="expand-class-icon">
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
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
      </div>
    </div>
    <div class="prev-class">
      <div class="class-name-and-dropdown">
        <div class="checkbox-and-name">
          <input
            type="checkbox"
            name="selected-class"
            id="select-class-3"
          />
          <label for="select-class-3"> 01 oct</label>
        </div>
        <div class="expand-class-icon">
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
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
      </div>
    </div>
    <div class="prev-class">
      <div class="class-name-and-dropdown">
        <div class="checkbox-and-name">
          <input
            type="checkbox"
            name="selected-class"
            id="select-class-4"
          />
          <label for="select-class-4"> c3 arya</label>
        </div>
        <div class="expand-class-icon">
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
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
      </div>
    </div> -->
    </div>
    <div class="create-class-container">
      <h2 class="create-class-heading">TEST SCHOOL 2</h2>
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
    <hr />`;
      let outerContainer = document.querySelector(".my-classes-container");
      outerContainer.appendChild(classContainerDiv);
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
          id="select-class-1"
        />
        <label for="select-class-1"> ${title}</label>
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
        let container = document.querySelector(".prev-class-container");
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
          addedDiv.style.display = "block";
        }
      });
    }
  });
})();

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
      </div>
      <hr />
      <div class="sort-char-options">
        <span class="material-symbols-outlined sort-asc-desc">
        switch_right
        </span>
        <span class="asc-desc-order">A-Z</span>
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
      <button class="apply-filter-btn">Apply</button>
      </div>
      </div>
      </div>`;
    container.appendChild(sideBar);
    sideBarVisible = true;
    let classNameRadioBtn = document.querySelector(".sort-by-radio-btn #class-name");
    classNameRadioBtn.checked = true;
    let cancelBtn = document.querySelector(".clear-all-btn");
    let backBtn = document.querySelector(".sort-by-back-icon");
    setTimeout(() => {
      backBtn.addEventListener("click", closeSideBar);
    }, 0);

    setTimeout(() => {
      cancelBtn.addEventListener("click", closeSideBar);
    }, 0);

    let sortText = document.querySelector(".asc-desc-order");
    let sortIcon = document.querySelector(".sort-asc-desc");
    let startDateRadioBtn = document.querySelector('.sort-by-radio-btn #start-date');
    let endDateRadioBtn = document.querySelector('.sort-by-radio-btn #end-date');

    setTimeout(() => {
      classNameRadioBtn.addEventListener("click", function () {
        sortText.innerHTML = "A-Z";
        sortIcon.innerHTML = "switch_right";
      });
    }, 0);

    setTimeout(() => {
      startDateRadioBtn.addEventListener("click", function () {
        sortText.innerHTML = "First-Last";
        sortIcon.innerHTML = "switch_right";
      });
    }, 0);

    setTimeout(() => {
      endDateRadioBtn.addEventListener("click", function () {
        sortText.innerHTML = "First-Last";
        sortIcon.innerHTML = "switch_right";
      });
    }, 0);

    let selectSortType = document.querySelector(".sort-asc-desc");
    setTimeout(() => {
      selectSortType.addEventListener("click", changeSortType);
    }, 0);

    let filterByBtn = document.querySelector(".fiter-by-heading");
    setTimeout(() => {
      filterByBtn.addEventListener("click", showFilterMenu);
    }, 0);

    let applyFilterBtn = document.querySelector(".apply-filter-btn");
    applyFilterBtn.addEventListener("click", sortOnClassName);
  }
};

function closeSideBar() {
  let sideBar = document.querySelector(".sidebar");
  container.removeChild(sideBar);
  sideBarVisible = false;
}

function changeSortType() {
  let oldType = document.querySelector(".asc-desc-order");
  let oldIcon = document.querySelector(".sort-asc-desc");
  if (oldIcon.innerHTML == "switch_right") {
    oldIcon.innerHTML = "switch_left";
    if (oldType.innerHTML == "A-Z" || oldType.innerHTML == "Z-A") {
      if (oldType.innerHTML == "A-Z") {
        oldType.innerHTML = "Z-A";
      }
      else {
        oldType.innerHTML = "A-Z";
      }
    }
    else {
      if (oldType.innerHTML == "First-Last") {
        oldType.innerHTML = "Last-First";
      }
      else {
        oldType.innerHTML = "First-Last";
      }
    }
  }
  else {
    oldIcon.innerHTML = "switch_right";
    if (oldType.innerHTML == "A-Z" || oldType.innerHTML == "Z-A") {
      if (oldType.innerHTML == "A-Z") {
        oldType.innerHTML = "Z-A";
      }
      else {
        oldType.innerHTML = "A-Z";
      }
    }
    else {
      if (oldType.innerHTML == "First-Last") {
        oldType.innerHTML = "Last-First";
      }
      else {
        oldType.innerHTML = "First-Last";
      }
    }
  }
}

// class code is class key

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
      <div class="filter-drop-down">Class key
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
    <button class="apply-filter-btn">Apply</button>
    </div>
    </div>
    </div>`;
  let filterKeyOptions = document.querySelector(".filter-list-items");
  let set = new Set();
  getDataFromJson("example.json").then((data) => {
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
  // console.log(set.size);
  // for(let item of set){

  //   console.log(hello + item);
  // }
  let dropDownClick = document.querySelector(".filter-drop-down");
  dropDownClick.addEventListener("click", displayFilterKeys);
  let filterOptions = document.querySelector(".filter-list-items");
  filterOptions.addEventListener("click", function (e) {
    dropDownClick.innerHTML = e.target.innerHTML;
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

  // let goToSortByBtn = document.querySelector(".sort-by-directing-heading");
  // setTimeout(() => {
  //   goToSortByBtn.addEventListener("click", showSideBar);
  // }, 0);

}

function sortOnClassName() {
  let allCards = document.querySelectorAll(".prev-class");
  console.log(allCards);
  allCards.sort((a, b) => {
    return a.querySelector(".class-name-and-dropdown .checkbox-and-name #select-class-1").innerHTML - b.querySelector(".class-name-and-dropdown .checkbox-and-name #select-class-1").innerHTML;
  });
  console.log(allCards);
}

function sortOnStartDate() {
  getDataFromJson("example.json").then((data) => {
    let cardDataArray = data[0].classes.entities;
    let allCards = document.querySelectorAll(".prev-class");
    let twoDCardsArray = [[]];
    for (let i = 0; i < allCards.length; i++) {
      twoDCardsArray[i] = [allCards[i], cardDataArray[i]];
    }
    twoDCardsArray.sort((a, b) => {
      return a[1].class.startdate - b[1].class.startdate;
    });
  })
}

function sortOnEndDate() {
  getDataFromJson("example.json").then((data) => {
    let cardDataArray = data[0].classes.entities;
    let allCards = document.querySelectorAll(".prev-class");
    let twoDCardsArray = [[]];
    for (let i = 0; i < allCards.length; i++) {
      twoDCardsArray[i] = [allCards[i], cardDataArray[i]];
    }

    twoDCardsArray.sort((a, b) => {
      return a[1].class.enddate - b[1].class.enddate;
    });
  })
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

function changeFilterText() {

}

sortFilterbtn.addEventListener("click", showSideBar);

let clickFilterBy = document.querySelector(".filter-by-heading");

// adding second card

(function addCreateClassCard() {
  getDataFromJson("example.json").then((data) => {
    let heading = document.querySelector(".create-class-heading");
    heading.innerHTML = data[1].space_title.toString();
  });
})();

// getDataFromJson();
