import React from 'react'
import styles from './Card.module.css';


const Card = ({ imageUrl, preTitle, title, description }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.cardContainer}>
      <div className={styles.cardContent}>

<img src={imageUrl} />
{preTitle && <span className={styles.cardPreTitle}>{preTitle}</span>}
<h3 className={styles.cardTitle}>{title}</h3>
<p className={styles.cardDescription}>{description}</p>
</div>

      </div>

      
    </div>
  );
};

export default Card;
