import { SideBarSignal } from '@/signals/sidebar.signal';
import { AppState } from '@/store/app.state';
import { selectCount } from '@/store/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-header',
   standalone: true,
   imports: [MatIconModule, AsyncPipe, RouterLink],
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
   public readonly sidebarSignal = inject(SideBarSignal);
   count$: Observable<number>;

   constructor(private store: Store<AppState>) {
      this.count$ = store.select(selectCount);
   }

   toggle() {
      this.sidebarSignal.sidebarOpen.update((val) => !val);
   }
}
