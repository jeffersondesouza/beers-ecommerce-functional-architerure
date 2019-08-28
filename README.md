# [STUDY] E-Commerce Architetured following Functional Programing Principals

## Structure

+-- models\
+-- view\
|---- + -- pages\
|---- + -- containers\
|---- + -- components\
+-- store\
+-- utils\
+-- assets\
+---- + -- png\
+---- + -- videos\
+---- + -- svg\
+-- config\

## Prestar atenção

- pipe
- Maybe
- promisify
- objectToArray
- arrayRoObject

#######################

## Modeling

store:
- beers (beersList, selectedBeer, doLoadBeers)
- dashboard (beerOfMonth, brewersTips, doLoad)
- cart (products, buyHistory, doBuy)
- user (token, name, email, doeLogin, doLogout)