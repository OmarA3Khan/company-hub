import './indicator.styles.scss';

const Indicator = ({ status }) => {
    return (
        <span className={`indicator indicator--${status}`} />
    )
};

export default Indicator;