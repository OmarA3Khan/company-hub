import Avatar from '../base/avatar/avatar.component';

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
        <span>{employeeInfo.project}</span>
        <span>{employeeInfo.unit}</span>
        <span>{employeeInfo.timeZone}</span>
        <div className='row'>
          <span className='status-indicator'></span>
          <span>{employeeInfo.status}</span>
        </div>
        <span>{employeeInfo.assignmentStatus}</span>
      </div>
    )
  } else if(projectInfo) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
          <span>
            <strong>{projectInfo.name}</strong>
          </span>
        <span>{projectInfo.lead}</span>
        <span>{projectInfo.client}</span>
        <span>{projectInfo.startDate}</span>
        <span>{projectInfo.endDate}</span>
        <span>{projectInfo.staffing}</span>
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
