'use strict'

//Handler in constant
const titleClickHandler = function(event) {
    console.log('link was clicked');
    console.log(event);
    
    event.preventDefault();
    const clickedElement = this;

/* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    
    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
        console.log('active class removed');
    }
/* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

/* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    console.log('removed active class');
    for(let activeArticle of activeArticles) {
        activeArticle.classList.remove('active' ,'runningForSecond');
    }
/* get 'href' attribute from the clicked link */
    const hrefAtt  = clickedElement.getAttribute('href');

/* find the correct article using the selector (value of 'href' attribute) */
    const searchedArticle = document.querySelector(hrefAtt);
    console.log(searchedArticle);
  
/* add class 'active' to the correct article */
    searchedArticle.classList.add('active');
    setTimeout(function(){searchedArticle.classList.add('runningForSecond')}, 200);
}

const generateTitleLinks = function(){
//Remove content of list in left column
document.querySelector('.list.titles').innerHTML = "";

//For each  article:
    const articles = document.querySelectorAll('.post');
    let newHtml, currentTitle, currentId; 

    for(let article of articles) {
        //  -read article id and assign it to a constant value
        currentId = article.id;
        
        //  -find element with title name and assign it to a constant value
        currentTitle = article.querySelector('.post-title').innerHTML;

        //  Based on those create HTML code and assign it to a constant
        
        newHtml = '<li><a href="#'+currentId+'"><span>'+currentTitle+'</span></a></li>';
        console.log(newHtml);
        // Insert newly created code to link list in left column
        document.querySelector('.list.titles').innerHTML += newHtml;
    }
}

generateTitleLinks;
//List in constant
const listOfLinks = document.querySelectorAll('.titles a');

for (let link of listOfLinks){
    link.addEventListener("click", titleClickHandler);
}
