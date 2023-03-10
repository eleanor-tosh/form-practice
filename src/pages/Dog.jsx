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

      <form className={styles.formdog}>
        <div className={`${styles.flexer} ${styles.graydiv}`}>
          <h1>PAWTASTIC</h1>
        </div>
        <div className={styles.flexer}>
          <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
          <div className={styles.rows}>
            <div className={styles.column}>
              <label for="name" className={styles.label}>
                Name
              </label>
              <input
                placeholder="Pet's name"
                id="name"
                className={styles.input}
              ></input>
              <label for="breed" className={styles.label}>
                Breed
              </label>
              <input
                placeholder="Pet's breed"
                id="breed"
                className={styles.input}
              ></input>
              <label for="gender" className={styles.label}>
                Gender
              </label>
              <input className={styles.input}></input>
            </div>
            <div className={styles.column}>
              <label for="photo" className={styles.label}>
                Upload a photo
              </label>
              <input className={styles.input}></input>
              <label for="birthday" className={styles.label}>
                Birthday
              </label>
              <input
                placeholder="MM/DD/YYYY"
                id="birthday"
                className={styles.input}
              ></input>
              <span className={styles.label}>Spayed or Neutered</span>

              <div className={styles.spey}>
                <input
                  type="radio"
                  name="spey"
                  id="spey-1"
                  checked
                  className={styles.radioinput1}
                ></input>
                <label for="spey-1">Yes</label>

                <input
                  type="radio"
                  name="spey"
                  id="spey-2"
                  className={styles.radioinput2}
                ></input>
                <label for="spey-2">No</label>
              </div>
            </div>
          </div>

          <div className={styles.weight}>
            <span className={styles.label}>Weight</span>

            <div className={styles.formweight}>
              <input
                type="radio"
                name="weight"
                id="weight-1"
                checked
                className={styles.radioinput1}
              ></input>
              <label for="weight-1">0-25 lbs</label>
              <input
                name="weight"
                type="radio"
                id="weight-2"
                className={styles.radioinput2}
              ></input>{' '}
              <label for="weight-2">25-50 lbs</label>
              <input
                name="weight"
                type="radio"
                id="weight-3"
                className={styles.radioinput3}
              ></input>
              <label for="weight-3">50-100 lbs</label>
              <input
                name="weight"
                type="radio"
                id="weight-4"
                className={styles.radioinput4}
              ></input>
              <label for="weight-4">100+ lbs</label>
            </div>
          </div>

          <div className={styles.divwhite}>
            <button className={styles.backbtn}>Back</button>
            <button className={styles.nextbtn}>Next</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Dog
