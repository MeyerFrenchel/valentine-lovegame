
import DanielDayLewis from './assets/img/DanielDayLewis.png';
import Zlatan from './assets/img/Zlatan.jpg';
import Romania from './assets/img/romania94.jpg';
import Isildur from './assets/img/Isildur1.jpg';
import Catea from './assets/img/Catea.jpg';
import Mihai from './assets/img/Mihai.jpg';
import Alex from './assets/img/Alex.jpg';
import Daniel from './assets/img/Daniel.jpg';
import Ronaldinho from './assets/img/ronaldinho.jpg';
import Beckham from './assets/img/Beckham.jpg';
import Mutu from './assets/img/mutu.jpg';
import Ronaldo from './assets/img/ronaldo.jpg';
import ReactLogo from './assets/img/react.png';
import ReduxLogo from './assets/img/redux.jpg';
import fakeLogo from './assets/img/fake.png';
import fakeReact from './assets/img/fakereact.png';
import Notebook from './assets/img/notebook.jpg';
import Stardust from './assets/img/stardust.jpg';
import theFaultinOurStars from './assets/img/faultinstars.jpg';
import LaVitaEBella from './assets/img/la-vita-e-bella.jpg';

const data = [
		
	{
			id: 1,
			questionText: 'Cine a fost primul meu fotbalist preferat?',
			answerOptions: [
				{ answerText: 'David Beckham', isCorrect: true, pic: Beckham },
				{ answerText: 'Ronaldinho', isCorrect: false, pic: Ronaldinho },
				{ answerText: 'Ronaldo Grasu', isCorrect: false, pic: Ronaldo },
				{ answerText: 'Adrian Mutu', isCorrect: false, pic: Mutu },
			],
		},
	
		{
			id: 2,
			questionText: 'My first BFFs name was?' ,
			answerOptions: [
				{ answerText: 'Popa Daniel', isCorrect: false, pic: Daniel  },
				{ answerText: 'Moisa Mihai', isCorrect: true, pic: Mihai },
				{ answerText: 'Grosu Alexandru', isCorrect: false, pic: Alex },
				{ answerText: 'Catea Stefan', isCorrect: false, pic: Catea },
			],
		},
		{
			id: 3,
			questionText: 'React logo is?' ,
			answerOptions: [
				{ answerText: 'React Logo', isCorrect: true, pic: ReactLogo  },
				{ answerText: 'React Logo', isCorrect: false, pic: ReduxLogo },
				{ answerText: 'React Logo', isCorrect: false, pic: fakeLogo },
				{ answerText: 'React Logo', isCorrect: false, pic: fakeReact },
			],
		},
        {
			id: 4,
			questionText: 'Cum se cheama filmul meu romantic preferat?',
			answerOptions: [
				{ answerText: 'The Notebook', isCorrect: false, pic: Notebook },
				{ answerText: 'La vita e bella', isCorrect: false, pic: LaVitaEBella },
				{ answerText: 'Stardust', isCorrect: true, pic: Stardust },
				{ answerText: 'The fault in our stars', isCorrect: false, pic: theFaultinOurStars },
			],
		},
		{
			id:5,
			questionText: 'Elimina intrusul!',
			answerOptions: [
				{ answerText: 'DanielDayLewis', isCorrect: true, pic: DanielDayLewis},
				{ answerText: 'Zlatan Ibrahimovic', isCorrect: false, pic: Zlatan },
				{ answerText: 'Romania94', isCorrect: false, pic: Romania},
				{ answerText: 'Isildur1', isCorrect: false, pic: Isildur },
			],
		}
	];

 export default data;