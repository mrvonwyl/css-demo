import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  links = [
    { path: '/general-info', label: 'General Info' },
    { path: '/position', label: 'Position' },
    { path: '/display', label: 'Display' },
    { path: '/box-model', label: 'Box Model' },
    { path: '/links', label: 'Links' }
  ];

  constructor() {}

  ngOnInit() {}
}
