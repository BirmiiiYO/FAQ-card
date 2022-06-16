import './App.css';
import illustration from './images/illustration-woman-online-desktop.svg';
import iconArrow from './images/icon-arrow-down.svg';
import bgImg from './images/bg-pattern-desktop.svg';

function App() {
  const questions = [
    'How many team members can I invite?',
    'What is the maximum file upload size?',
    'How do I reset my password?',
    'Can I cancel my subscription?',
    'Do you provide additional support?',
  ];

  return (
    <div className="App">
      <div className="content">
        <div className="wrapper">
          <div className="images">
            <img className="main-img" src={illustration} />
            <img className="bg-img" src={bgImg} />
          </div>
          <div>
            <h1>FAQ</h1>
            <ul>
              {questions.map((name, index) => (
                <li key={`${name}_${index}`}>
                  <p>{name}</p>

                  <img src={iconArrow} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
