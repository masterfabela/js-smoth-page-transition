import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
	in({ from, to, done }) {
		const timeline = new TimelineLite();
		timeline
			.fromTo(
				to,
				{
					left: '-100%',
					top: '50%',
				},
				{
					left: '0%',
				}
			)
			.duration(0.5)
			.fromTo(
				to,
				{
					height: '2vh',
				},
				{
					height: '90vh',
					top: '10%',
					onComplete: () => {
						done();
					},
				}
			)
			.duration(0.5);
	}
	out({ from, done }) {
		done();
	}
}

export default Fade;
