'use striect'
//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalPurhour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalBranch = 0;
let y = 0;
let cookiesAry = [];
function getRndnum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Salmoncookies(namelocation, minCust, maxCust, avrage) {
  this.namelocation = namelocation;
  this.minmCust = minCust;
  this.maxmCust = maxCust;
  this.avrage = avrage;
  this.coustmernumber = [0];
  this.purchascookies = [0];
  cookiesAry.push(this);
  // console.log(this.coustmernumber);
  // console.log(this.purchascookies);

};


Salmoncookies.prototype.getRndCusts = function (min, max) {
  for (let i = 0; i <= workingHours.length; i++) {

    this.coustmernumber[i] = getRndnum(this.minmCust, this.maxmCust);
  }
};


Salmoncookies.prototype.purCookieshour = function () {

  for (let i = 0; i <= workingHours.length; i++) {

    this.purchascookies[i] = Math.floor((this.coustmernumber[i] * this.avrage));
    totalBranch = totalBranch + this.purchascookies[i];
    // totalPurhour[i]?totalPurhour[i]+=this.purchascookies[i]:totalPurhour[i]=this.purchascookies[i]  
    totalPurhour[i] += this.purchascookies[i];
    // console.log(totalBranch);
    // console.log(totalPurhour[i]);
    // console.log(this.purchascookies);
  }
};

const SectionEl = document.getElementById('section');
const tableEl = document.createElement('table');
SectionEl.appendChild(tableEl);

/// contant of the table function
Salmoncookies.prototype.render = function () {


  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  for (let i = 0; i <= this.purchascookies.length; i++) {
    if (i == 0) {
      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = this.namelocation;
    }

    else if (i !== 0 && i < this.purchascookies.length) {
      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = this.purchascookies[i];
    }

    else if (i == this.purchascookies.length) {
      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = totalBranch;
    }
  }

};

/// Header of the table function 
function hTblet() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  for (let i = 0; i <= workingHours.length + 1; i++) {

    if (i == 0) {
      let thEl = document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = '';
    }
    else if (i !== 0 && i <= workingHours.length) {
      let thEl = document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = workingHours[i - 1];
    }
    else if (i == workingHours.length + 1) {
      let thEl = document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = 'Total';
    }

  }
};

/// total of the table function

function Fotable() {

  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  for (let i = 0; i <= totalPurhour.length; i++) {
    if (i == 0) {
      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = 'Total';
    }

    else if (i !== 0 && i < totalPurhour.length) {

      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = totalPurhour[i];
    }


    else if (i == totalPurhour.length) {

      for (let j = 0; j < totalPurhour.length; j++) {
        y += totalPurhour[j];
      }
      let tdEl = document.createElement('td');
      tr1El.appendChild(tdEl);
      tdEl.textContent = y;

    }
    // console.log(totalPurhour);
  }

};
function delRaw() {
  let lastRow = (tableEl.rows.length) - 1;
  tableEl.deleteRow(lastRow);
};


hTblet();
const seattle = new Salmoncookies('seattle', 3, 65, 6.3);
seattle.getRndCusts();
seattle.purCookieshour();
seattle.render();

const Tokyo = new Salmoncookies('Tokyo', 3, 24, 1.2);
Tokyo.getRndCusts();
Tokyo.purCookieshour();
Tokyo.render();

const Dubai = new Salmoncookies('Dubai', 11, 38, 3.7);
Dubai.getRndCusts();
Dubai.purCookieshour();
Dubai.render();

const Paris = new Salmoncookies('Paris', 20, 38, 2.3);
Paris.getRndCusts();
Paris.purCookieshour();
Paris.render();

const Lima = new Salmoncookies('Lima', 2, 16, 4.6);
Lima.getRndCusts();
Lima.purCookieshour();
Lima.render();
Fotable();


///////////////////////////////////////
let newBranch = document.getElementById('action');
// let addNew1=document.getElementById('addnew');

newBranch.addEventListener('submit', addNewBranch);

function addNewBranch(event) {
  delRaw();
  event.preventDefault();
  let branchName = event.target.locatonname.value;

  let minOrder = event.target.minorder.value;

  let maxOrder = event.target.maxorder.value;

  let avgOrder = event.target.avgorder.value;

  // console.log(branchName);
  // console.log(minOrder);
  // console.log(maxOrder);
  // console.log(avgOrder);
  let addNew = new Salmoncookies(branchName, minOrder, maxOrder, avgOrder);
  addNew.getRndCusts();
  addNew.purCookieshour();
  addNew.render();
  Fotable();
  // delRaw();
}


