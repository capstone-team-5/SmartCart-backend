# $mrtCART

$mrtCART Backend - This backend application is designed to handle requests for shoppers who want to compare prices.

#### [Trello Board](https://)

#### [WireFrame](https://)

#### [Deployed Backend URL](https://)

#### [Deployed Frontend URL](https://)

---

Team Members :

- Diandre Miller

- Ryan Fodera

- Tafari Excell

- Touhami Benmessaoud

- Vandhana Mohan


To learn more about our team, please refer to the GitHub and LinkedIn links provided in the table below.

| Dev Team |   Role           | GitHub | LinkedIn |
| :--------------: | :-------: | :-------: | :-------: |
| **Diandre Miller**  |  Technical Lead |     [GitHub](https://github.com/DiandreMiller) | [LinkedIn](https://www.linkedin.com/in/diandre-miller/) 
| **Ryan Fodera**  |  Project Manager |     [GitHub](https://github.com/ryanfodera) | [LinkedIn](https://www.linkedin.com/in/ryan-fodera/) 
| **Tafari Excell**  |  Demo Lead |     [GitHub](https://github.com/Tafarigit) | [LinkedIn](https://www.linkedin.com/in/tafari-e-7a5554110/) 
| **Touhami Ben**  |  Scrum Master |     [GitHub](https://github.com/touhami-ben) | [LinkedIn](https://www.linkedin.com/in/touhami-benmessaoud-aaa072259/) 
| **Vandhana Mohan**  |  Design Lead |     [GitHub](https://github.com/Vandhana-Mohan) | [LinkedIn](https://www.linkedin.com/in/vandhanamohan/) 

---
## Installation

Getting Started

1. Fork and Clone the repository using the following command:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory and install the dependencies using the following command:

   ```
   `cd` into this repository
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=<port-number>
   ```

4. Start the server using the following command

   ```
   npm start
   ```

Available Endpoints

The following endpoints are available:

        | Method |   Endpoint     |      Description        |
        | :----: | :----------:   | :-------------------:   |
        |  GET   |   /groceries   |    Get all products    |
        |  GET   | /groceries/:id |  Get a product by ID    |
        |  POST  |   /groceries   |  Create a new cart      |
        |  PUT   | /groceries/:id | Update items from cart  |
        | DELETE | /groceries/:id | Delete items from cart  |

---