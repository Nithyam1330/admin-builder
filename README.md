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


#Flex Installation

1. install following command 
npm install @angular/flex-layout@latest --save

2. Import following in app module 
import { FlexLayoutModule } from ‘@angular/flex-layout’;

imports: [ ..., FlexLayoutModule ], 