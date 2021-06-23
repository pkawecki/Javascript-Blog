'use strict';

//Handler in constant
const titleClickHandler = function (event) {
   // console.log('link was clicked');
   // console.log(event);

    event.preventDefault();
    const clickedElement = this;

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
        //console.log('active class removed');
    }
    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
   // console.log('removed active class');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active', 'runningForSecond');
    }
    /* get 'href' attribute from the clicked link */
    const hrefAtt = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const searchedArticle = document.querySelector(hrefAtt);

    /* add class 'active' to the correct article */
    searchedArticle.classList.add('active');
    setTimeout(function () { searchedArticle.classList.add('runningForSecond'); }, 200);
};

function generateTitleLinks() {
    //Remove content of list in left column
    document.querySelector('.list.titles').innerHTML = '';

    //For each  article:
    const articles = document.querySelectorAll('.post');
    let newHtml, currentTitle, currentId;

    for (let article of articles) {
        //  -read article id and assign it to a constant value
        currentId = article.id;

        //  -find element with title name and assign it to a constant value
        currentTitle = article.querySelector('.post-title').innerHTML;

        //  Based on those create HTML code and assign it to a constant

        newHtml = '<li><a href="#' + currentId + '"><span>' + currentTitle + '</span></a></li>';
       // console.log(newHtml);
        // Insert newly created code to link list in left column
        document.querySelector('.list.titles').innerHTML += newHtml;
    }
}

function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll('.post');
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find tags wrapper */
        let currentTags = article.querySelector(".post-tags");
        

      /* make html variable with empty string */
        let html = '';

      /* get tags from data-tags attribute */
        let dataTags = article.getAttribute('data-tags').split(' ');
        

      /* split tags into array */
  
      /* START LOOP: for each tag */
        for (let tag of dataTags) {

        /* generate HTML of the link */
            let link = '<li><a href="#tag-'+tag+'">'+tag+'</a></li>\n';
        /* add generated code to html variable */
            html +=link;
      /* END LOOP: for each tag */
        }
      /* insert HTML of all the links into the tags wrapper */
      
        document.querySelector('.list.list-horizontal').innerHTML += html;
        
    /* END LOOP: for every article: */  
    }
  }

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
  
    /* make a new constant "tag" and extract tag from the "href" constant */
  
    /* find all tag links with class active */
  
    /* START LOOP: for each active tag link */
  
      /* remove class active */
  
    /* END LOOP: for each active tag link */
  
    /* find all tag links with "href" attribute equal to the "href" constant */
  
    /* START LOOP: for each found tag link */
  
      /* add class active */
  
    /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(tagLinks);
    /* START LOOP: for each link */
    for (let tagLink of tagLinks){
        console.log(tagLink);
      /* add tagClickHandler as event listener for that link */
        //tagLink

    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();
generateTags();
generateTitleLinks();
//List in constant
const listOfLinks = document.querySelectorAll('.titles a');

for (let link of listOfLinks) {
    link.addEventListener('click', titleClickHandler);
}
