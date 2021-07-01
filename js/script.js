'use strict';
const optArticleSelector = '.post',
      optTitleSelector = '.titles';

//Handler in constant


function generateTitleLinks(customSelector='') {
    //Remove content of list in left column
    document.querySelector('.list.titles').innerHTML = '';

    //create constant = '.post'+'customSelector'
    const articles = document.querySelectorAll(optArticleSelector+customSelector);
    // console.log(articles);
    
    let newHtml, currentTitle, currentId;
    
    //For each  article:
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

// add listeners since those present are futile
  addClickListenersToTitles();
}

function generateAuthors() {
  //find all articles - already done
  const articles = document.querySelectorAll('.post');
  //start loop for every article
  for (let article of articles) {
    
    //find author wrapper - current author reference
    let currentAuthorRef = article.querySelector('.post-author');
    
    
        //get author name from .post-author
        let authorCredentials = article.getAttribute('data-author');
        console.log(authorCredentials); 

        //clear current author wrapper
        currentAuthorRef.innerHTML='';

        //create link with reference to author
        let link = '<a href="#author-'+authorCredentials+'">'+'by '+authorCredentials +'</a>';
        // console.log(link);

        //insert link to autor paragraph
        currentAuthorRef.innerHTML=link;

      //end loop for every article
  }
}

function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll('.post');
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find tags wrapper */
      let currentTags = article.querySelector('.post-tags > .list-horizontal');
        
      currentTags.innerHTML='';
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
      
        currentTags.innerHTML += html;
        
    /* END LOOP: for every article: */  
    }
}

function authorClickHandler(event){

  //prevent default action from occuring
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(this);

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  //extract author first and last name
  const authorName = href.replace('#author-','');


  //execute function "generateTitleLinks" with article selector as argument
  generateTitleLinks('[data-author="' + authorName + '"]');
    
}

function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(this);
    // console.log(event);
   
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-','');
    

    /* find all tag links with class active, it is all in the whole document */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    
    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks) {

        /* remove class active */
        activeTagLink.classList.remove('active');
  
    /* END LOOP: for each active tag link */
    }
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    const searchedHrefLinks = document.querySelectorAll('[href="'+href+'"]');
  
    /* START LOOP: for each found tag link */
    for (let searchedHrefLink of searchedHrefLinks) {
       
        /* add class active */
        searchedHrefLink.classList.add('active');

        /* END LOOP: for each found tag link */
    } 
  
    /* execute function "generateTitleLinks" with article selector as argument */
    
    generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToAuthors(){
  
  //find all links to authors
  const authorLinks = document.querySelectorAll('a[href^="#author"]');
  //

  // START loop for each link to author
  for (let authorLink of authorLinks) {

    

      // add authorClickHandler as event listener to a link
      authorLink.addEventListener('click', authorClickHandler);

      //END loop for each link
  }
}

const titleClickHandler = function (event) {
  // console.log('link was clicked');

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

function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');  

    /* START LOOP: for each link */
    for (let tagLink of tagLinks){

        /* add tagClickHandler as event listener for that link */
        tagLink.addEventListener('click', tagClickHandler);
        /* END LOOP: for each link */
        
    }
}

function addClickListenersToTitles(){
  const listOfLinks = document.querySelectorAll('.titles a');

  for (let link of listOfLinks) {
      link.addEventListener('click', titleClickHandler);
  }
}  


generateTitleLinks();

generateTags();

addClickListenersToTags();

addClickListenersToTitles();


//my job
generateAuthors();

addClickListenersToAuthors();