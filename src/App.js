import './App.css';
import illustration from './images/illustration-woman-online-desktop.svg';
import iconArrow from './images/icon-arrow-down.svg';
import bgImg from './images/bg-pattern-desktop.svg';
import themeSwitch from './images/theme.svg';
import block from './images/illustration-box-desktop.svg';
import React from 'react';

function App() {
  const [visibleAns, setVisibleAns] = React.useState(false);

  const questions = [
    'How many team members can I invite?',
    'What is the maximum file upload size?',
    'How do I reset my password?',
    'Can I cancel my subscription?',
    'Do you provide additional support?',
  ];
  const answers = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  ];

  return (
    <div className="App">
      <div className="content">
        <div className="wrapper">
          <div className="images">
            <img className="main-img" src={illustration} />
            <img className="bg-img" src={bgImg} />
            <img className="img-block" src={block} />
          </div>
          <div>
            <div className="title">
              <h1>FAQ</h1>
              <img className="theme" src={themeSwitch} onClick={() => alert('zxc')} />
            </div>
            <ul>
              {questions.map((question, index) => (
                <li key={`${question}_${index}`}>
                  <div className="question">
                    <p>{question}</p>
                    <button onClick={() => setVisibleAns(!visibleAns)}>
                      <img src={iconArrow} />
                    </button>
                  </div>
                  {visibleAns && <div className="answer">{answers[index]}</div>}
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
