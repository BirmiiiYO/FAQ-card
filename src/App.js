import React, { useRef, useState } from 'react';
import { useTheme } from './useTheme.js';

import './App.scss';

import illustration from './images/illustration-woman-online-desktop.svg';
import iconArrow from './images/icon-arrow-down.svg';
import bgImg from './images/bg-pattern-desktop.svg';
import themeSwitch from './images/theme.svg';
import block from './images/illustration-box-desktop.svg';
import womanMobile from './images/illustration-woman-online-mobile.svg';
import bgMobile from './images/bg-pattern-mobile.svg';

function App() {
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

  const { theme, setTheme } = useTheme();

  const [visibleAns, setVisibleAns] = useState(false);

  const [activeQuestion, setActiveQuestion] = React.useState(null);

  const activeRef = useRef(null);

  const handleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const handleOutsideClick = (e) => {
    if (!e.path.includes(activeRef.current)) {
      setActiveQuestion(null);
      setVisibleAns(false);
    }
  };

  document.body.addEventListener('click', handleOutsideClick);

  return (
    <div className="App">
      <div className="content">
        <div className="wrapper">
          <div className="images">
            <img className="main-img" alt="woman" src={illustration} />
            <img className="bg-img" alt="bg" src={bgImg} />
            <img className="img-block" alt="box" src={block} />
            <div className="mobile-img">
              <img className="mobile-img_woman" src={womanMobile} alt="mobile-woman" />
              <img className="mobile-img_bg" src={bgMobile} alt="mobile-bg" />
            </div>
          </div>
          <div>
            <div className="title">
              <h1>FAQ</h1>
              <img
                className="theme"
                src={themeSwitch}
                alt="switcher"
                onClick={() => handleThemeClick()}
              />
            </div>
            <ul ref={activeRef}>
              {questions.map((question, index) => (
                <li
                  onClick={() => {
                    activeQuestion === index ? setActiveQuestion(null) : setActiveQuestion(index);
                  }}
                  key={`${question}_${index}`}
                >
                  <div className="question">
                    <p className={activeQuestion === index ? 'active' : ''}>{question}</p>
                    <button className="arrow">
                      <img
                        className={activeQuestion === index ? 'active' : ''}
                        src={iconArrow}
                        alt="arrow"
                      />
                    </button>
                  </div>
                  {activeQuestion === index ? (
                    <div className="answer">{answers[activeQuestion]}</div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      Created by BirmiiiYo
    </div>
  );
}

export default App;
