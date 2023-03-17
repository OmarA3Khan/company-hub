import Avatar from '../base/avatar/avatar.component';
import Indicator from '../base/indicator/indicator.component';

import './informationRow.styles.scss';

const InformationRow = (props) => {
  const { children, employeeInfo, projectInfo } = props;
  if(employeeInfo) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
        <Avatar name={employeeInfo.firstName + ' ' + employeeInfo.lastName} imgSrc={employeeInfo.imgSrc}/>
        <div className="information-row__col">
          <span>
            <strong>{employeeInfo.firstName} {employeeInfo.lastName}</strong>
          </span>
          <span>{employeeInfo.designation}</span>
        </div>
        <span className='information-row__element'>{employeeInfo.project}</span>
        <span className='information-row__element'>{employeeInfo.unit}</span>
        <span className='information-row__element'>{employeeInfo.timeZone}</span>
        <div className='row'>
          <Indicator status={'busy'}/>
          <span>{employeeInfo.status}</span>
        </div>
        <span className='information-row__element'>{employeeInfo.assignmentStatus}</span>
      </div>
    )
  } else if(projectInfo) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
          <span className='information-row__element'>
            <strong>{projectInfo.name}</strong>
          </span>
        <span className='information-row__element'>{projectInfo.lead}</span>
        <span className='information-row__element'>{projectInfo.client}</span>
        <span className='information-row__element'>{projectInfo.startDate}</span>
        <span className='information-row__element'>{projectInfo.endDate}</span>
        <span className='information-row__element'>{projectInfo.staffing}</span>
      </div>
    )
  } else if(children) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
        {children}
      </div>
    );
  }
};

export default InformationRow;
