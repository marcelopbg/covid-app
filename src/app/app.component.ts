import { Component } from '@angular/core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.configTranslate(translate);
  }
  title = 'covid-app';
  faVirus = faVirus;
  faGlobe = faGlobe;

  configTranslate(translate: TranslateService): void {
    translate.addLangs(['en', 'pt-BR']);
    translate.setDefaultLang('pt-BR');

    const browserLang = navigator.language;
    translate.use(browserLang.match(/en|pt-BR/) ? browserLang : 'en')
  }
}
