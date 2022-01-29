import React, { ReactElement } from 'react';

import { PromoBanner } from 'components/promoBanner/PromoBanner';

import Video from '../../assets/videos/volvo.mp4';

import s from './microSite.module.css';

export const MicroSite = (): ReactElement => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <video className={s.video}>
        <source src={Video} type="video/mp4" />
        <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
        Captions
      </video>
      <PromoBanner />
    </div>
  </div>
);
