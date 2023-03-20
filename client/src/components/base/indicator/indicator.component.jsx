import './indicator.styles.scss';

const Indicator = ({ status }) => {
    return (
        <span className={`indicator indicator--${status.toLowerCase()}`} />
    )
};

export default Indicator;