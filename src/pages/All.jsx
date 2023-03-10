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

            <div>
              <span className={styles.minus}>-</span>
              <input
                className={`${styles.input} ${styles.numinput}`}
                type="text"
                value="1"
              />
              <span className={styles.plus}>+</span>
            </div>
            {/* Segmented button */}
            <div className={styles.segmented}>
              <label className={styles.labelspan}>
                <input type="radio"></input>

                <span>Label</span>
              </label>
              <label>
                <input type="radio"></input>

                <span>Label</span>
              </label>
            </div>

            <label>
              <input type="checkbox" checked></input> Checkbox
            </label>
            <br></br>
            <br></br>
            <label>
              <input type="radio" checked></input> Radio Button
            </label>
            <br></br>
            <br></br>
            <label>
              <div className={styles.switch}>
                <input className={styles.inputswitch} type="checkbox"></input>
                <span className={styles.slider}></span>
              </div>
              Switch
            </label>
          </div>
        </form>
      </div>
      <div className={styles.note}>
        <p>
          Most challenging aspects: Creating the two columns, I hadn't done that
          much before. Trying to know the names of some of these input types so
          that I could search how to make them. The "Text Field with Add-Ons"
          and "Multiselect Field", I had no idea about how these are created. I
          hadn't added a search icon inside an input field but it wasn't too
          bad. I think some of these button styles need a framework or library.
        </p>
      </div>
    </div>
  )
}

export default All
