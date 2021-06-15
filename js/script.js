'use strict'
// document.getElementById('test-button').addEventListener('click', function(){
  //  const links = document.querySelectorAll('.titles a');
//     console.log(links);
// })

    const titleClickHandler = function(event){

        event.preventDefault();
        console.log(event);
        console.log('Link was clicked');
        
        /*[DONE] remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');
        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }

        /* [IN PROGRESS] add class 'active' to the clicked link */
        const clickedElement = this;
        console.log('clickedElement:',clickedElement);
        console.log('clickedElement(with plus):' + clickedElement);
        clickedElement.classList.add('active');


        /* [DONE] remove class 'active' from all articles */
        const aciveArticles = document.querySelectorAll(".posts .active");
        for(let activeArticle of aciveArticles) {
            activeArticle.classList.remove('active');
        }


        /* get 'href' attribute from the clicked link */
        let hrefAtt = clickedElement.getAttribute('href');
        console.log(hrefAtt);

        /* find the correct article using the selector (value of 'href' attribute) */
        let searchedArticle = document.querySelector(hrefAtt);
        console.log(searchedArticle);
        
        /* add class 'active' to the correct article */
        searchedArticle.classList.add('active');
    }

    const links = document.querySelectorAll('.titles a');

    for (let link of links){
        link.addEventListener ('click', titleClickHandler);
    }

    