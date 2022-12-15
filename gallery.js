/* const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 300,
  mousewheel: true,
  coverflowEffect: {
    rotate: 30,
    slideShadows: true
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
*/

let url = 'https://docs.google.com/spreadsheets/d/1W_g9ktBT6d6LWTboa646yAfLAbDi2ooB_ac_XOqAVQc/gviz/tq?';
const lkjs = document.querySelector('.lkjs');
const query = encodeURIComponent('Select B,C,D,E,F');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row uvh');
    data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    console.log(main.c[3]);
    const linkna = main.c[3];
    console.log(main.c[4]);
    const linkba = main.c[4];

    const fullLink = imgna.v;
    const fullTit = titlena.v;
    const fullDes = descna.v;
    const fullHref = linkna.v;
    const fullHrefs = linkba.v;
    console.log(fullLink);
    const column = document.createElement('div');
    const card = document.createElement('div');
    //const link = document.createElement('a');
    const elem = document.createElement('img');
    const huah = document.createElement('h2');
    const desc = document.createElement('p');
    const hreff = document.createElement('a');
    const hreff2 = document.createElement('a');
    const ic1 = document.createElement('li');
    const ic2 = document.createElement('li');

    column.setAttribute('class', 'column4');
    card.setAttribute('class', 'card');
    //link.setAttribute('href', fullHref);
    // link.setAttribute('target', '_blank');
    //link.setAttribute('title', 'CusMeDroid');
    //link.setAttribute('style', 'display: block;');
    elem.setAttribute('src', fullLink);
    elem.setAttribute('title', fullTit);
    elem.setAttribute('alt', fullTit);
    elem.setAttribute('class', 'card-img hiframe');
    huah.innerHTML = fullTit;
    huah.setAttribute('class', 'black Audiowide padd-8');
    
    desc.innerHTML = fullDes;
    desc.setAttribute('class', 'padd-8 Trirong');

    if (fullHref == 'null' || fullHrefs == '') {
      hreff.setAttribute('class', 'hdn');
      ic1.setAttribute('class', 'hdn');
    } else {
      hreff.setAttribute('title', 'Try Now! ' + fullTit);
      hreff.setAttribute('class', 'padd-8 black');
      hreff.setAttribute('href', fullHref);
      hreff.setAttribute('target', '_blank');
      ic1.setAttribute('class', 'fa fa-instagram fa-lg c1');
    }

    if (fullHrefs == 'null' || fullHrefs == '') {
      hreff2.setAttribute('class', 'hdn');
      ic2.setAttribute('class', 'hdn');
    } else {
      hreff2.setAttribute('title', 'Try Now! ' + fullTit);
      hreff2.setAttribute('class', 'padd-8 black');
      hreff2.setAttribute('href', fullHrefs);
      hreff2.setAttribute('target', '_blank');
      ic2.setAttribute('class', 'fa fa-facebook-square fa-lg c2');
    }

    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(elem);
    // link.appendChild(elem);
    card.appendChild(huah);
    card.appendChild(desc);
    card.appendChild(hreff);
    card.appendChild(hreff2);
    hreff.appendChild(ic1);
    hreff2.appendChild(ic2);
  })
  console.log(data);
})
