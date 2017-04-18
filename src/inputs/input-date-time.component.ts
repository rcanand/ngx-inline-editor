import { Component, ViewChild, ElementRef, OnInit, Renderer } from "@angular/core";
import { InputBase } from "./input-base";

@Component({
    selector: 'inline-editor-datetime',
    styles: [`a {
    text-decoration: none;
    color: #428bca;
    border-bottom: dashed 1px #428bca;
    cursor: pointer;
    line-height: 2;
    margin-right: 5px;
    margin-left: 5px;
}


/* editable-empty */

.editable-empty,
.editable-empty:hover,
.editable-empty:focus,
a.editable-empty,
a.editable-empty:hover,
a.editable-empty:focus {
    font-style: italic;
    color: #DD1144;
    text-decoration: none;
}

.inlineEditForm {
    display: inline-block;
    white-space: nowrap;
    margin: 0;
}

#inlineEditWrapper {
    display: inline-block;
}

.inlineEditForm input,
select {
    width: auto;
    display: inline;
}

.editInvalid {
    color: #a94442;
    margin-bottom: 0;
}

.error {
    border-color: #a94442;
}

[hidden] {
    display: none;
}`],
    template: `<input #inputRef type="datetime-local" class="form-control" [(ngModel)]="context.value" [required]="context.required"
                      [disabled]="context.disabled" [name]="context.name" [placeholder]="context.placeholder" [size]="context.size"
                      [min]="context.min" [max]="context.max"/>`
})
export class InputDateTimeComponent extends InputBase implements OnInit {
    @ViewChild('inputRef') public inputRef: ElementRef;

    constructor(renderer: Renderer) {
        super(renderer);
        this.isRegexTestable = true;
    }

    ngOnInit() {
        this.inputElement = this.inputRef.nativeElement;
    }
}
