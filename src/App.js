import './App.scss';
import illustration from './images/illustration-woman-online-desktop.svg';
import iconArrow from './images/icon-arrow-down.svg';
import bgImg from './images/bg-pattern-desktop.svg';
import themeSwitch from './images/theme.svg';
import block from './images/illustration-box-desktop.svg';
import React from 'react';
import { useTheme } from './useTheme.js';

function App() {
  const { theme, setTheme } = useTheme();

  const handleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [visibleAns, setVisibleAns] = React.useState(false);

  const [activeQuestion, setActiveQuestion] = React.useState(null);

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
              <img className="theme" src={themeSwitch} onClick={() => handleThemeClick()} />
            </div>
            <ul>
              {questions.map((question, index) => (
                <li onClick={() => setActiveQuestion(index)} key={`${question}_${index}`}>
                  <div className="question" onClick={() => setVisibleAns(!visibleAns)}>
                    <p className={activeQuestion === index ? 'active' : ''}>{question}</p>
                    <button>
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

// <ul>
//               <li>
//                 <div className="question" onClick={() => setActiveQuestion(0)}>
//                   <p>{questions[0]}</p>
//                   <button onClick={() => setVisibleAns(!visibleAns)}>
//                     <img src={iconArrow} />
//                   </button>
//                 </div>
//                 {visibleAns && <div className="answer">{answers[0]}</div>}
//               </li>
//               <li>
//                 <div className="question">
//                   <p>{questions[1]}</p>
//                   <button onClick={() => setVisibleAns(!visibleAns)}>
//                     <img src={iconArrow} />
//                   </button>
//                 </div>
//                 {visibleAns && <div className="answer">{answers[1]}</div>}
//               </li>
//               <li>
//                 <div className="question">
//                   <p>{questions[2]}</p>
//                   <button onClick={() => setVisibleAns(!visibleAns)}>
//                     <img src={iconArrow} />
//                   </button>
//                 </div>
//                 {visibleAns && <div className="answer">{answers[2]}</div>}
//               </li>
//               <li>
//                 <div className="question">
//                   <p>{questions[3]}</p>
//                   <button onClick={() => setVisibleAns(!visibleAns)}>
//                     <img src={iconArrow} />
//                   </button>
//                 </div>
//                 {visibleAns && <div className="answer">{answers[3]}</div>}
//               </li>
//               <li>
//                 <div className="question">
//                   <p>{questions[4]}</p>
//                   <button onClick={() => setVisibleAns(!visibleAns)}>
//                     <img src={iconArrow} />
//                   </button>
//                 </div>
//                 {visibleAns && <div className="answer">{answers[4]}</div>}
//               </li>
//             </ul>
