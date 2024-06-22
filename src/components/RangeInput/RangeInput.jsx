import classes from './RangeInput.module.scss';

const RangeInput = (props) => {
    return (
        <div className={classes.holder}>
            <label className={classes.label} htmlFor={props.name}>{props.label}</label>
            <input
                className={classes.range}
                id={props.name}
                type="range"
                name={props.name}
                min={props.minValue}
                max={props.maxValue}
                value={props.value}
                step={props.step}
                onInput={props.onChange}
            />
        </div>
    )
}

export default RangeInput;