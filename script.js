// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

/*window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
});
*/
// Make sure you register your service worker here too

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



window.addEventListener('popstate', (event) => {
  // history.replaceState(event.state, "", document.location);
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state.page));
  console.log(JSON.stringify(event.state.page));
  // console.log(document.location);
  // document.location.reload();
  //remove the entryPage
  router.setState(event.state.page,true);
});
document.addEventListener('DOMContentLoaded', (e) => {
  router.setState("homepage",false);
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.addEventListener("click",function(){
          let entryPage=document.querySelector('entry-page');
          if(document.querySelector("entry-page").shadowRoot.querySelector("[class='entry-image']")){
            document.querySelector("entry-page").shadowRoot.querySelector("[class='entry-image']").remove();
          }
          if(document.querySelector("entry-page").shadowRoot.querySelector("[class='entry-audio']")){
            document.querySelector("entry-page").shadowRoot.querySelector("[class='entry-audio']").remove();
          }
          router.setState(entry.date,false);
          document.querySelector("body").classList.add("single-entry");
          entryPage.entry = newPost.entry;
        }); 
        // document.querySelector("entry-page").shadowRoot.querySelector("[class='entry-image']").remove();
        document.querySelector('main').appendChild(newPost);
      });
    });
});
