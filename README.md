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

imports: [ ..., FlexLayoutModule ]

#Npm install for ICONS

1. npm install material-design-icons
2. Copy the following path in angular.cli styles Array i.e.. 
"./node_modules/material-design-icons/iconfont/material-icons.css"

#Installation for Pie chart Graphic Representation

1. npm install chart.js –save
2. npm install ng2-charts --save
3. In Angular.cli script section paste the following path 
    ["./node_modules/chart.js/dist/Chart.min.js"]

#Linking Firebase

1. npm install angularfire2 firebase --save
2. Import following in app module
    import { AngularFireModule } from 'angularfire2';
    import { AngularFireDatabaseModule } from 'angularfire2/database';
    import { AngularFireAuthModule } from 'angularfire2/auth';
3. Create a firebase configuration

    var config = {
        apiKey: "xxxxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxx",
        storageBucket: "",
        messagingSenderId: "xxxxxxxxxxxx"
    };
4. Import following in imports section 

    imports : [
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ]
5. When using in components import following 

    import {AngularFireDatabase} from 'angularfire2/database';
    import { AngularFireAuth } from 'angularfire2/auth';

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase){ }
6. Use the following install for rxjs for angular 6

    npm install rxjs@6 rxjs-compat@6 --save
