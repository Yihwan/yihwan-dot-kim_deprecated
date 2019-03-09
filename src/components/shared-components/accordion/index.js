import React from 'react';
import {
  AccordionContainer,
  BlinkableHeaderContainer,
  ContentContainer
} from './style';
import { CSSTransitionGroup } from 'react-transition-group'

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
    const { header, content, activateBlinker } = this.props;
    const { isOpen, isHeaderBlinking } = this.state;

    return(
      <AccordionContainer>
        <BlinkableHeaderContainer blink={activateBlinker && isHeaderBlinking} onClick={this.handleClick}>
          {header}
        </BlinkableHeaderContainer>
        <CSSTransitionGroup
          transitionName="accordion"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {isOpen && <ContentContainer>{content}</ContentContainer>}
        </CSSTransitionGroup>
      </AccordionContainer>
    )
  }
}

export default Accordion;
