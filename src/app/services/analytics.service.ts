import { inject, Injectable } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
	private analytics = inject(Analytics);
  
	private logEvent(eventName: string, eventParams?: { [key: string]: any }) {
		logEvent(this.analytics, eventName, eventParams);
	}

	public logViewItem(itemId?: string | null) {
		this.logEvent('view_item', { item_id: itemId });
	}
}
