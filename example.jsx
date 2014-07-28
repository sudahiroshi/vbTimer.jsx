/*
 * vbTiemrの書き方を学ぶためのサンプル
 * コンパイル： jsx --executable node --output example.jsx.js example.jsx
 * 実行： node example.jsx.js
 */

import "vbTimer.jsx";

class _Main {
	static function main( args: string[] ): void {
		var count1 = 0;
		var count2 = 0;
		var timer1 = new vbTimer();
		timer1.timer = (): void -> {
			log "timer1 : " + count1;
			count1++;
			if( count1 == 10 ) {
				timer1.disable();
			};
		};
		var timer2 = new vbTimer();
		timer2.timer = (): void -> {
			log "timer2 :    " + count2;
			count2++;
			if( count2 == 10 ) {
				timer2.disable();
			};
		};

		timer1.interval = 333;
		timer2.interval = 500;
		timer1.enable();
		timer2.enable();
	}
}
