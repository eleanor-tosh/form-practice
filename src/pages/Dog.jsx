import React from 'react'
import styles from '../styles/dog.module.css'

function Dog() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="/images/dog.jpg"
          alt="feedback form to replicate"
          className={styles.img}
        />
      </div>
      {/* Form */}
      <form className={styles.formdog}></form>
    </div>
  )
}

export default Dog
