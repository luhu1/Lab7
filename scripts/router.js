// router.js

export const router = {};

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
 
 document.querySelector("img").addEventListener("click",function (){
   router.setState("settings",false);
   document.querySelector("body").classList.add("settings");
   document.querySelector("h1").innerHTML="Settings";
 });
 
 document.querySelector("h1").addEventListener("click",function(){
  router.setState("homepage",false);
 });

 router.setState = function(id,isPop) { 
  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   * 
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   * 
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState() 
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   *    4. For each <journal-entry> element, you can grab the JSON version of its info with .entry (e.g. someJournalEntryElement.entry)
   *       a. This is useful when viewing a single entry. You may notice an <entry-page> element in the HTML, this is the element that is displayed when the
   *          .single-entry class is applied to the body. You can populate this element by using .entry similarly. So if I wanted to grab a specific <journal-entry>
   *          and populate it's info into the <entry-page>, I would simply use an assignment of entryPageElement.entry = journalEntryElement.entry
   *       b. Clearing the <entry-page> element of its previous data can be a bit tricky, it might be useful to just delete it and insert a new blank one 
   *          in the same spot each time. Just a thought.
   *
   * - Answers to some questions you may have:
   *    1. You may add as many helper functions in this file as you like
   *    2. You may modify the parameters of setState() as much as you like
   */

  //pushState handles navigation
  if(id=="homepage"){
    if(!isPop){
       history.pushState({page: "homepage"},"homepage","https://luhu1.github.io/Lab7/");
    }
    
    this.className="body";
    // document.querySelector("entry-page").removeChild
    document.querySelector("body").className="jounal-entry";
    document.querySelector("h1").innerHTML="Journal Entry";
  }
  if(id=="settings"){
    if(!isPop){
      history.pushState({page: "settings"},"settings","https://luhu1.github.io/Lab7/#settings");
    }
    
    document.querySelector("body").className="settings";
    document.querySelector("h1").innerHTML="Settings";
  }
  if(id=="4/25/2021"){
    if(!isPop){
      history.pushState({page: "4/25/2021"},"entry 1","https://luhu1.github.io/Lab7/#entry1");
    }
    
    document.querySelector("h1").innerHTML="Entry 1";
    document.querySelector("body").className="single-entry";
  }
  if(id=="4/26/2021"){
    if(!isPop){
      history.pushState({page: "4/26/2021"},"entry 2","https://luhu1.github.io/Lab7/#entry2");
    }
    
    document.querySelector("h1").innerHTML="Entry 2";
    document.querySelector("body").className="single-entry";
  }
  if(id=="4/27/2021"){
    if(!isPop){
      history.pushState({page: "4/27/2021"},"entry 3","https://luhu1.github.io/Lab7/#entry3");
    }
    
    document.querySelector("h1").innerHTML="Entry 3";
    document.querySelector("body").className="single-entry";
  }
  if(id=="4/28/2021"){
    if(!isPop){
      history.pushState({page: "4/28/2021"},"entry 4","https://luhu1.github.io/Lab7/#entry4");
    }
    
    document.querySelector("h1").innerHTML="Entry 4";
    document.querySelector("body").className="single-entry";
  }
  if(id=="4/29/2021"){
    if(!isPop){
      history.pushState({page: "4/29/2021"},"entry 5","https://luhu1.github.io/Lab7/#entry5");
    }
   
    document.querySelector("h1").innerHTML="Entry 5";
    document.querySelector("body").className="single-entry";

  }
  if(id=="4/30/2021"){
    if(!isPop){
      history.pushState({page: "4/30/2021"},"entry 6","https://luhu1.github.io/Lab7/#entry6");
    }
    
    document.querySelector("h1").innerHTML="Entry 6";
    document.querySelector("body").className="single-entry";
  }
  if(id=="5/1/2021"){
    if(!isPop){
      
    history.pushState({page: 9},"entry 7","https://luhu1.github.io/Lab7/#entry7");
    }
    
    document.querySelector("h1").innerHTML="Entry 7";
    document.querySelector("body").className="single-entry";
  }
  if(id=="5/2/2021"){
    if(!isPop){
      history.pushState({page: 10},"entry 8","https://luhu1.github.io/Lab7/#entry8");
    }
    
    document.querySelector("h1").innerHTML="Entry 8";
    document.querySelector("body").className="single-entry";
  }
  if(id=="5/3/2021"){
    if(!isPop){
      history.pushState({page: 11},"entry 9","https://luhu1.github.io/Lab7/#entry9");
    }
    
    document.querySelector("h1").innerHTML="Entry 9";
    document.querySelector("body").className="single-entry";
  }
  if(id=="5/4/2021"){
    if(!isPop){
      history.pushState({page: 12},"settings","https://luhu1.github.io/Lab7/#entry10");
    }
    
    document.querySelector("h1").innerHTML="Entry 10";
    document.querySelector("body").className="single-entry";
  }
  

  // create a function that changes title and apply a section of css 
}
