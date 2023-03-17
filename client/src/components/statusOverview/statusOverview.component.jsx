import Icon from '../base/icon/icon.component';

import './statusOverview.styles.scss';

const StatusOverview = (props) => {
    return (
        <div className="status-overview">
            {
            props.overViewData.map((data, index) => {
                return (
                    <div key={index}>
                        <div className='status-overview__status'>{data.status}</div>
                        <div className='row'>
                            <Icon color={data.iconColor} Icon className='icon' icon={data.iconName} size={data.iconSize} />
                            <div className='status-overview__count'>{data.iconCount}</div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
};

export default StatusOverview