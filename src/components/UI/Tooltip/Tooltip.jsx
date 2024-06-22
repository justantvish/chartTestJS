import classes from './Tooltip.module.scss';

const Tooltip = ({children, title, imgUrl}) => {
    return (
        <div className={classes.tooltip}>
            <div className={classes.header}>
                {imgUrl && <img className={classes.img} src={imgUrl} alt={title} />}
                <div className={classes.title}>{title}</div>
            </div>
            <div className={classes.main}>
                {children}
            </div>
        </div>
    );
};

export default Tooltip;