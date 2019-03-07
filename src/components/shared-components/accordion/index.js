import React from 'react';
import { HeaderContainer, ContentContainer } from './style';

class Accordion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      isHeaderBlinking: true,
    }
  }

  handleClick = () => {
    this.toggleAccordion();
    this.turnOffHeaderBlinking();
  }

  toggleAccordion = () => this.setState({ isOpen: !this.state.isOpen });
  turnOffHeaderBlinking = () => this.setState({ isHeaderBlinking: false });

  render() {
    const { header, content } = this.props;
    const { isOpen, isHeaderBlinking } = this.state;

    return(
      <div>
        <HeaderContainer blink={isHeaderBlinking} onClick={this.handleClick}>
          {header}
        </HeaderContainer>
        {isOpen && <ContentContainer>{content}</ContentContainer>}
      </div>
    )
  }
}

export default Accordion;
