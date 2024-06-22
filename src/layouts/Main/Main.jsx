import classes from './Main.module.scss';

const Main = ({ children }) => {
    return (
        <main className={classes.main}>{children}</main>
    );
};

export default Main;