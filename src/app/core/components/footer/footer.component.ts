import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version$ = this.versionService.numVersion$;
  constructor(private versionService: VersionService) {}

  ngOnInit(): void {}
}
