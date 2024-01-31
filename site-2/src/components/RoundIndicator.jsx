import './RoundIndicator.css';

export const IndicatorStyle = {
    SUCCESS: 'round-indicator-success',
    NEUTRAL: 'round-indicator-neutral',
    FAIL: 'round-indicator-fail',
};

const RoundIndicator = ({
    style = IndicatorStyle.SUCCESS
}) => {
    return (
        <div className={`round-indicator ${style}`}>
            <div></div>
        </div>
    );
}

export default RoundIndicator;