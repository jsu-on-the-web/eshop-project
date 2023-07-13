#!/bin/bash

# A quick and dirty script to automatically install whatever dependencies you need for a Vite project!
# Use this script after setting up your Vite project and npm installed it. Copy this script to your project repo and run it with 
# bash quick-vite.sh
# Feel free to add your own dependencies when you need them, or remove any you don't use often.

# All your save-dev dependencies
echo "Installing save-dev dependencies"`
npm install --save-dev sass

# All your actual dependencies
echo "Installing current dependencies"
npm install react-router-dom

## Install the font awesome package in React
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome