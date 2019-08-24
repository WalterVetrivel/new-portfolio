// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
import React, { useState } from 'react';
import LinkCard from './link-card';

import ResumeIcon from '../../images/resume.png';
import PortfolioIcon from '../../images/portfolio.png';
import JourneyIcon from '../../images/journey.png';

const LinkCards = () => {
  const [links] = useState([
    {
      linkTitle: 'Resume',
      linkImg: ResumeIcon,
      linkText:
        'Want to know more about my skills, education and experience? Click to view my onilne resume.',
      linkUrl: 'resume',
    },
    {
      linkTitle: 'Portfolio',
      linkImg: PortfolioIcon,
      linkText:
        'Want to see a sample of my work? Click to check out my portfolio.',
      linkUrl: 'portfolio',
    },
    {
      linkTitle: 'My Journey',
      linkImg: JourneyIcon,
      linkText:
        'Some stories cannot be told by a resume. Click to find out more about my journey as a web developer.',
      linkUrl: 'journey',
    },
  ]);

  return (
    <section className="section links">
      <div className="section-heading-wrapper links-heading">
        <h1 className="section-heading">What I do</h1>
      </div>
      <div className="section-content links-content">
        {links.map((link, index) => {
          return (
            <LinkCard
              key={index}
              linkTitle={link.linkTitle}
              linkImg={link.linkImg}
              linkText={link.linkText}
              linkUrl={link.linkUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LinkCards;
