#installation for angular material 

1. npm install --save @angular/material @angular/cdk

2. npm install --save @angular/animations

3. import folwing module in app module

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

imports: [BrowserAnimationsModule],

4. copy and paste following in style.css

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

5. Hammer JS

npm install --save hammerjs

open main.js and paste following 

import 'hammerjs';