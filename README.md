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

Store:
- beers (beersList, selectedBeer, doLoadBeers)
- dashboard (beerOfMonth, brewersTips, doLoad)
- shoppingCart (products, buyHistory, doBuy)
- user (token, name, email, doeLogin, doLogout)

Models
  - beer
  