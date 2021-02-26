import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports:[MenuComponent]
})
export class MenuModule {}