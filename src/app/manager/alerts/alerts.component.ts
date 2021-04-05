import { Component, OnInit } from '@angular/core';
import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  embedUrl : string;
  constructor(private alertsService : AlertsService) { }

  async ngOnInit() {
    const res = await this.alertsService.getAlertsEmbedUrl().toPromise();
    console.log(res);
    this.embedUrl = res.url;
  }

}
