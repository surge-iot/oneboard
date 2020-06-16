import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

    return this.sanitizer.sanitize(SecurityContext.URL, url);
  }

}
