import { SimpleChange, SimpleChanges } from '@angular/core';
export interface FieldChanges extends SimpleChanges {
    name?: SimpleChange;
    hasFilter?: SimpleChange;
    value?: SimpleChange;
}
