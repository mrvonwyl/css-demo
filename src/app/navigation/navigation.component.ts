import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  links = [
    { path: '/position', label: 'Position' },
    { path: '/display', label: 'Display' },
    { path: '/links', label: 'Links' },
    { path: '/box-model', label: 'Box Model' }
  ];

  constructor() {}

  ngOnInit() {}
}
