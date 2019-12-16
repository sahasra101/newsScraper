# Space.Com News Scraper
Full-stack Node JS app that scrapes current news articles for the user. 

# Space News Scraper
This is a full-stack NodeJS app that uses the following packages to scrape news articles from Space.com:
*express
*axios
*cheerio
*mongoose
*handlebars

## Overview of the organization of the app and how to use it
* the app uses axios and cheerio to scrape news articles from Space.com.  The scrape specifically brings back the article title, article link, a relevant article image and the synopsis of the article. 
* the user can clear any current scraped articles which clears the Mongodb database linked to this app. Then the user can perform a new scrape.   
* the user can then save articles that they want to read later and even attach notes to each article. 
* to read the full article, the user just has to click on the link which will bring them to the full article webpage on space.com. 


## link to the Github repository - this app is a nodeJS app which can be run on a command line interface like Gitbash
* https://github.com/sahasra101/newsScraper

## link to the deployed site on Heroku 
* https://nameless-river-41565.herokuapp.com/

## screenshot of the app functioning

Home page displayed:
![Home page for Space Scraper App](public/images/spaceScrapeApp.png)

## Technologies used in this app:
* HTML
* CSS using Bootstrap with Modals
* javascript
* AJAX and APIs
* nodeJS
* npm packages: express, axios, cheerio, handlebars and mongoose (mongodb)

## link to my portfolio 
* https://sahasra101.github.io/Ajay-Kiri-Portfolio/

