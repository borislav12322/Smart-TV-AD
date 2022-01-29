import React, { ReactElement } from 'react';

import ReactImg from '../../assets/images/reactImg.png';

import s from './siteInfo.module.css';

export const SiteInfo = (): ReactElement => (
  <header className={s.header}>
    <div className={s.headerContainer}>
      <div className={s.headerWrapper}>
        <h1 className={s.title}>Main Title</h1>
        <p className={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam assumenda
          autem dignissimos, distinctio ea id illum ipsum iure nam odit optio qui quis
          repellat saepe sed sint, soluta totam. Eius, explicabo voluptatum! Amet, animi
          asperiores beatae commodi dicta dignissimos dolorem ea eius excepturi facere
          fuga, magni nihil, sit soluta tempora. Alias beatae dicta hic numquam quam quas
          quibusdam tenetur? Atque commodi itaque nostrum placeat quaerat reprehenderit
          temporibus? Commodi deleniti dolorem in laboriosam magnam, rem similique ullam
          unde voluptas voluptatem. Impedit nam repudiandae ullam. Adipisci dolorem earum
          qui quis quisquam?
        </p>
        <img className={s.img} src={ReactImg} alt="react" />
      </div>
    </div>
  </header>
);
