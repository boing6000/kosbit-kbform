import { OnInit } from '@angular/core';
export declare class KbvalidationComponent implements OnInit {
    messages: string[];
    type: string;
    constructor();
    replaceMessage(message: string): string;
    ngOnInit(): void;
}
