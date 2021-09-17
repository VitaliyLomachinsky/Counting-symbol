import s from "./TextHolder.module.css"

const TextHolder =() =>{
  return(
    <div className={s.main}>
      <h2 className={s.title}>Text holder</h2>
      <div className={s.main_inside}>
        <textarea className={s.textarea}>
        </textarea>
      </div>
    </div>
  );
}

export default TextHolder;