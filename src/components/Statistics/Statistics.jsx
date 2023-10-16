import css from './Statistics.module.css';




export const Statistics = ({ stats, title = false }) => {

    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    }

    const itemStyles = { backgroundColor: getRandomHexColor(), }

    return (
<section className={css.statistics}>
            {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

            <ul className={css.statList}>
                {stats.map(item => {
                    return (
                        <li key={item.id} className={css.item} style={itemStyles}>
      <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}</span>
    </li>
                )
                })}
  
                </ul>
</section>
    )
};
