import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export class Task {
    description;
    status;
    date;
    constructor(description,status,date) {
        this.description = description;
        this.status = status;
        this.date = date;
    }

}
