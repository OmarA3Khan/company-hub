import Icon from "../base/icon/icon.component";

import './headerUtility.styles.scss';

const HeaderUtility = () => {
    return (
        <div className="utility">
            <Icon className='icon' icon={'bell'} size={24} />
            <h3>Header Utility here</h3>
        </div>
    )
};

export default HeaderUtility;