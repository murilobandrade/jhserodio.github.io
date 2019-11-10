import React from 'react';
import { useIntl } from 'react-intl';
import style from './Jobs.module.css';
import { COMPANIES } from '../../constants/companies';

const Jobs = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.Jobs}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'jobs.title',
        })}
      </h2>
      <div className={style.list}>
        {Object.values(COMPANIES).map(company => (
          <div key={company} className={style.item}>
            <h3 className={style.company}>
              {formatMessage({
                id: `jobs.${company}.company`,
              })}
            </h3>
            <p className={style.employ}>
              {formatMessage({
                id: `jobs.${company}.employ`,
              })}
            </p>
            <p className={style.date}>
              {formatMessage({
                id: `jobs.${company}.date`,
              })}
            </p>
            <p className={style.description}>
              {formatMessage({
                id: `jobs.${company}.description`,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Jobs };
