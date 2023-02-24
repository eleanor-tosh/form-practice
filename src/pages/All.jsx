import React from 'react'
import styles from '../styles/all.module.css'

function All() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="/images/cover-all-form.webp"
          alt="feedback form to replicate"
          className={styles.img}
        />
      </div>
      {/* Form */}
      <div className={`${styles.formall} ${styles.row}`}>
        <form>
          <div className={`${styles.column} ${styles.left}`}>
            <label>
              Text Field
              <input
                type="string"
                placeholder="Input Text"
                className={styles.input}
              ></input>
            </label>

            <label>
              Select Field
              <select className={styles.input}>
                <option>Select</option>
                <option>Select Two</option>
                <option>Select Three</option>
              </select>
            </label>

            <label>
              Text Area
              <input
                type="textarea"
                placeholder="Text area"
                className={styles.input}
              ></input>
            </label>

            <label>Text Field with Add-ons</label>
            <div>
              <p>Label</p>
              <input
                type="string"
                placeholder="Input Text"
                className={styles.input}
              ></input>
              <button>Button</button>
            </div>

            <label>
              Multiselect Field
              <select className={styles.input}>
                <option>Select</option>
                <option>Select Two</option>
                <option>Select Three</option>
              </select>
            </label>
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <br></br>
            <input
              type="search"
              placeholder="Search"
              className={`${styles.input} ${styles.search}`}
            ></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default All
