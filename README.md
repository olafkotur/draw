# Draw: React Native

## Pre-setup
* You must install expo tools before setting up the project, assuming you have `npm` or `yarn` installed
* `npm install expo-cli --global` || `yarn global add expo-cli`

## Setup
* `git clone git@github.com:olafkotur/draw.git`
* `yarn` to install dependencies
* `yarn start` Starts the local server
* `?` to get more available options

## Running: Device
* Download `expo` app from the app store
* Android: Scan the barcode that is printed after running `yarn start`
* iOS: Login to your expo account on the expo app, the project will be listed after running `yarn start`
* You must have an internet connection

## Running: Simulator
* `yarn start`
* `i` for iOS or `a` Android simulators, this will install and run the app
* `yarn offline` - this will allow you to run the simulator without internet

## Running: Web
* `yarn web`