import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component'
import { Page2Component } from './page2/page2.component'
import { Page3Component } from './page3/page3.component'
import { Page4Component } from './page4/page4.component'
import { Aside1Component } from './aside1/aside1.component'

const routes: Routes = [
    { path: '',
    redirectTo: 'one',
    pathMatch: 'full'
    },

    { path: 'one',
    component: Page1Component },

    { path: 'two',
    component: Page2Component },

    { path: 'three',
    component: Page3Component },

    { path: 'four',
    component: Page4Component },

    { path: 'aside1',
    component: Aside1Component,
    outlet: 'outletaside1'
    },

    { path: 'three/:myParameter',
    component: Page3Component,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
