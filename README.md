# Claim rewards of rivalz project

## Description

the script checks the available rewards and collects them.

## NOTE!!! 
in the current version of the script, it is only possible to get a list of tokens available for claim.


## Table of Contents

*   [Description](#description)
*   [Installation](#installation)
*   [Usage](#usage)

## Installation

These instructions will guide you on how to install and set up the project on your local machine.

1.  **Prerequisites:**

    *   [Node.js](https://nodejs.org/):  This project requires Node.js to be installed.  It is recommended to use a Node.js version manager like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage different Node.js versions.

2.  **Clone the repository:**

    ```bash
    git clone https://github.com/kertio/rivalz_claimer.git
    cd rivalz_claimer
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

    This command installs all the necessary dependencies listed in the `package.json` file.

## Usage

Instructions on how to run and use your project after installation.

1.  **Create a file with private keys:**  
    ```bash
    touch pk.txt
    nano pk.txt
    ```
    Сreate a file pk.txt in project folder.
    Add private keys to the file pk.txt
     
  
2.  **Run the script:**
    ```bash
    npm run dev:claim
    ```
    This command will run the script to execute
    



### Enjoy 😊
