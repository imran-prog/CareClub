import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = `
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    `;
    this._renderer2.appendChild(this._document.body, script);
  }
}
